/**
 * NOSNÍK CALCULATOR - JavaScript
 * Výpočty statiky nosníku a vizualizace
 *
 * @author Your Name
 * @version 1.0.0
 */

// ===================================
// GLOBÁLNÍ PROMĚNNÉ
// ===================================

let pointLoads = [];
let distributedLoads = [];

// ===================================
// TŘÍDY PRO ZATÍŽENÍ
// ===================================

/**
 * Třída pro bodové zatížení
 */
class PointLoad {
    constructor(force, position) {
        this.force = force;
        this.position = position;
        this.id = Date.now() + Math.random();
    }
}

/**
 * Třída pro spojité zatížení
 */
class DistributedLoad {
    constructor(load, start, end) {
        this.load = load;
        this.start = start;
        this.end = end;
        this.id = Date.now() + Math.random();
    }
}

// ===================================
// PŘIDÁNÍ ZATÍŽENÍ
// ===================================

/**
 * Přidání bodového zatížení
 */
function addPointLoad() {
    const force = parseFloat(document.getElementById('pointLoadForce').value);
    const position = parseFloat(document.getElementById('pointLoadPosition').value);
    const beamLength = parseFloat(document.getElementById('beamLength').value);

    if (isNaN(force) || isNaN(position)) {
        alert('Zadejte platné hodnoty!');
        return;
    }

    if (position < 0 || position > beamLength) {
        alert(`Pozice musí být mezi 0 a ${beamLength} m!`);
        return;
    }

    pointLoads.push(new PointLoad(force, position));
    updateLoadsList();
    drawBeam();
}

/**
 * Přidání spojitého zatížení
 */
function addDistributedLoad() {
    const load = parseFloat(document.getElementById('distributedLoad').value);
    const start = parseFloat(document.getElementById('distLoadStart').value);
    const end = parseFloat(document.getElementById('distLoadEnd').value);
    const beamLength = parseFloat(document.getElementById('beamLength').value);

    if (isNaN(load) || isNaN(start) || isNaN(end)) {
        alert('Zadejte platné hodnoty!');
        return;
    }

    if (start < 0 || end > beamLength || start >= end) {
        alert('Neplatné pozice zatížení!');
        return;
    }

    distributedLoads.push(new DistributedLoad(load, start, end));
    updateLoadsList();
    drawBeam();
}

// ===================================
// ODSTRANĚNÍ ZATÍŽENÍ
// ===================================

/**
 * Odstranění bodového zatížení
 */
function removePointLoad(id) {
    pointLoads = pointLoads.filter(load => load.id !== id);
    updateLoadsList();
    drawBeam();
}

/**
 * Odstranění spojitého zatížení
 */
function removeDistributedLoad(id) {
    distributedLoads = distributedLoads.filter(load => load.id !== id);
    updateLoadsList();
    drawBeam();
}

// ===================================
// AKTUALIZACE UI
// ===================================

/**
 * Aktualizace seznamu zatížení v UI
 */
function updateLoadsList() {
    const container = document.getElementById('activeLoads');
    container.innerHTML = '';

    if (pointLoads.length === 0 && distributedLoads.length === 0) {
        container.innerHTML = '<p style="color: #999; font-style: italic;">Žádné zatížení</p>';
        return;
    }

    pointLoads.forEach(load => {
        const div = document.createElement('div');
        div.className = 'load-item';
        div.innerHTML = `
            <span>Bodové: F = ${load.force} kN na pozici ${load.position} m</span>
            <button onclick="removePointLoad(${load.id})">Odstranit</button>
        `;
        container.appendChild(div);
    });

    distributedLoads.forEach(load => {
        const div = document.createElement('div');
        div.className = 'load-item';
        div.innerHTML = `
            <span>Spojité: q = ${load.load} kN/m od ${load.start} m do ${load.end} m</span>
            <button onclick="removeDistributedLoad(${load.id})">Odstranit</button>
        `;
        container.appendChild(div);
    });
}

// ===================================
// VÝPOČTY STATIKY
// ===================================

/**
 * Výpočet reakcí v podporách (prostý nosník)
 */
function calculateReactions() {
    const beamLength = parseFloat(document.getElementById('beamLength').value);
    const supportType = document.getElementById('supportType').value;

    if (supportType !== 'simple') {
        return { RA: 0, RB: 0, MA: 0 };
    }

    let sumForces = 0;
    let sumMoments = 0; // Momenty kolem bodu A

    // Bodové síly
    pointLoads.forEach(load => {
        sumForces += load.force;
        sumMoments += load.force * load.position;
    });

    // Spojité zatížení
    distributedLoads.forEach(load => {
        const length = load.end - load.start;
        const totalForce = load.load * length;
        const centerPosition = load.start + length / 2;

        sumForces += totalForce;
        sumMoments += totalForce * centerPosition;
    });

    // Reakce v B (pravá podpora)
    const RB = sumMoments / beamLength;

    // Reakce v A (levá podpora)
    const RA = sumForces - RB;

    return { RA, RB, MA: 0 };
}

/**
 * Výpočet posouvající síly v dané pozici
 */
function calculateShearForce(x) {
    const reactions = calculateReactions();
    let Q = reactions.RA;

    // Odečteme bodové síly vlevo od pozice x
    pointLoads.forEach(load => {
        if (load.position < x) {
            Q -= load.force;
        }
    });

    // Odečteme spojité zatížení vlevo od pozice x
    distributedLoads.forEach(load => {
        if (load.start < x) {
            const effectiveEnd = Math.min(load.end, x);
            const effectiveLength = effectiveEnd - load.start;
            Q -= load.load * effectiveLength;
        }
    });

    return Q;
}

/**
 * Výpočet ohybového momentu v dané pozici
 */
function calculateBendingMoment(x) {
    const reactions = calculateReactions();
    let M = reactions.RA * x;

    // Odečteme momenty od bodových sil vlevo od pozice x
    pointLoads.forEach(load => {
        if (load.position < x) {
            M -= load.force * (x - load.position);
        }
    });

    // Odečteme momenty od spojitého zatížení vlevo od pozice x
    distributedLoads.forEach(load => {
        if (load.start < x) {
            const effectiveEnd = Math.min(load.end, x);
            const effectiveLength = effectiveEnd - load.start;
            const centerDistance = x - (load.start + effectiveLength / 2);
            M -= load.load * effectiveLength * centerDistance;
        }
    });

    return M;
}

// ===================================
// HLAVNÍ VÝPOČETNÍ FUNKCE
// ===================================

/**
 * Hlavní výpočetní funkce
 */
function calculate() {
    const beamLength = parseFloat(document.getElementById('beamLength').value);

    if (pointLoads.length === 0 && distributedLoads.length === 0) {
        alert('Přidejte nejprve nějaké zatížení!');
        return;
    }

    const reactions = calculateReactions();

    // Zobrazení výsledků
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Reakce v podporách:</h3>
        <p>Reakce v bodě A (levá podpora): <span class="result-value">RA = ${reactions.RA.toFixed(2)} kN</span></p>
        <p>Reakce v bodě B (pravá podpora): <span class="result-value">RB = ${reactions.RB.toFixed(2)} kN</span></p>
        <p>Kontrola: RA + RB = ${(reactions.RA + reactions.RB).toFixed(2)} kN</p>
    `;

    // Najdeme max hodnoty pro měřítko
    let maxShear = 0;
    let maxMoment = 0;

    for (let x = 0; x <= beamLength; x += 0.1) {
        maxShear = Math.max(maxShear, Math.abs(calculateShearForce(x)));
        maxMoment = Math.max(maxMoment, Math.abs(calculateBendingMoment(x)));
    }

    resultsDiv.innerHTML += `
        <h3>Maximální hodnoty:</h3>
        <p>Max. posouvající síla: <span class="result-value">Qmax = ${maxShear.toFixed(2)} kN</span></p>
        <p>Max. ohybový moment: <span class="result-value">Mmax = ${maxMoment.toFixed(2)} kNm</span></p>
    `;

    // Vykreslení diagramů
    drawBeam();
    drawShearDiagram();
    drawMomentDiagram();
}

// ===================================
// VYKRESLOVÁNÍ - NOSNÍK
// ===================================

/**
 * Vykreslení nosníku a zatížení
 */
function drawBeam() {
    const canvas = document.getElementById('beamCanvas');
    const ctx = canvas.getContext('2d');
    const beamLength = parseFloat(document.getElementById('beamLength').value);

    // Vymazání plátna
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Nastavení měřítka
    const scale = (canvas.width - 100) / beamLength;
    const offsetX = 50;
    const beamY = canvas.height / 2;

    // Vykreslení nosníku
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(offsetX, beamY);
    ctx.lineTo(offsetX + beamLength * scale, beamY);
    ctx.stroke();

    // Vykreslení podpor
    ctx.fillStyle = '#667eea';

    // Levá podpora (kloub)
    ctx.beginPath();
    ctx.moveTo(offsetX, beamY);
    ctx.lineTo(offsetX - 10, beamY + 20);
    ctx.lineTo(offsetX + 10, beamY + 20);
    ctx.closePath();
    ctx.fill();

    // Pravá podpora (kloub)
    ctx.beginPath();
    ctx.moveTo(offsetX + beamLength * scale, beamY);
    ctx.lineTo(offsetX + beamLength * scale - 10, beamY + 20);
    ctx.lineTo(offsetX + beamLength * scale + 10, beamY + 20);
    ctx.closePath();
    ctx.fill();

    // Vykreslení bodových zatížení
    ctx.strokeStyle = '#dc3545';
    ctx.fillStyle = '#dc3545';
    ctx.lineWidth = 2;

    pointLoads.forEach(load => {
        const x = offsetX + load.position * scale;
        const arrowLength = 40;

        // Šipka
        ctx.beginPath();
        ctx.moveTo(x, beamY - arrowLength);
        ctx.lineTo(x, beamY);
        ctx.stroke();

        // Hrot šipky
        ctx.beginPath();
        ctx.moveTo(x, beamY);
        ctx.lineTo(x - 5, beamY - 10);
        ctx.lineTo(x + 5, beamY - 10);
        ctx.closePath();
        ctx.fill();

        // Popisek
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        ctx.fillText(`${load.force} kN`, x - 15, beamY - arrowLength - 5);
        ctx.fillStyle = '#dc3545';
    });

    // Vykreslení spojitého zatížení
    ctx.strokeStyle = '#28a745';
    ctx.fillStyle = '#28a745';

    distributedLoads.forEach(load => {
        const x1 = offsetX + load.start * scale;
        const x2 = offsetX + load.end * scale;
        const arrowSpacing = 30;
        const arrowLength = 30;

        for (let x = x1; x <= x2; x += arrowSpacing) {
            // Šipka
            ctx.beginPath();
            ctx.moveTo(x, beamY - arrowLength);
            ctx.lineTo(x, beamY);
            ctx.stroke();

            // Hrot šipky
            ctx.beginPath();
            ctx.moveTo(x, beamY);
            ctx.lineTo(x - 3, beamY - 7);
            ctx.lineTo(x + 3, beamY - 7);
            ctx.closePath();
            ctx.fill();
        }

        // Popisek
        ctx.fillStyle = '#000';
        ctx.font = '12px Arial';
        const midX = (x1 + x2) / 2;
        ctx.fillText(`${load.load} kN/m`, midX - 20, beamY - arrowLength - 5);
        ctx.fillStyle = '#28a745';
    });

    // Měřítko
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.fillText('0 m', offsetX - 10, beamY + 40);
    ctx.fillText(`${beamLength} m`, offsetX + beamLength * scale - 15, beamY + 40);
}

// ===================================
// VYKRESLOVÁNÍ - DIAGRAMY
// ===================================

/**
 * Vykreslení diagramu posouvající síly
 */
function drawShearDiagram() {
    const canvas = document.getElementById('shearCanvas');
    const ctx = canvas.getContext('2d');
    const beamLength = parseFloat(document.getElementById('beamLength').value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = (canvas.width - 100) / beamLength;
    const offsetX = 50;
    const zeroY = canvas.height / 2;

    // Najdeme max hodnotu pro měřítko
    let maxShear = 0;
    for (let x = 0; x <= beamLength; x += 0.1) {
        maxShear = Math.max(maxShear, Math.abs(calculateShearForce(x)));
    }

    const scaleY = maxShear > 0 ? (canvas.height / 2 - 20) / maxShear : 1;

    // Nulová čára
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(offsetX, zeroY);
    ctx.lineTo(offsetX + beamLength * scale, zeroY);
    ctx.stroke();

    // Vykreslení diagramu
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 2;
    ctx.beginPath();
    let firstPoint = true;

    for (let x = 0; x <= beamLength; x += 0.05) {
        const Q = calculateShearForce(x);
        const canvasX = offsetX + x * scale;
        const canvasY = zeroY - Q * scaleY;

        if (firstPoint) {
            ctx.moveTo(canvasX, canvasY);
            firstPoint = false;
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();

    // Popisky
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText('Q [kN]', 10, 20);
    ctx.fillText('0', offsetX - 20, zeroY + 5);
}

/**
 * Vykreslení diagramu ohybového momentu
 */
function drawMomentDiagram() {
    const canvas = document.getElementById('momentCanvas');
    const ctx = canvas.getContext('2d');
    const beamLength = parseFloat(document.getElementById('beamLength').value);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = (canvas.width - 100) / beamLength;
    const offsetX = 50;
    const zeroY = canvas.height / 2;

    // Najdeme max hodnotu pro měřítko
    let maxMoment = 0;
    for (let x = 0; x <= beamLength; x += 0.1) {
        maxMoment = Math.max(maxMoment, Math.abs(calculateBendingMoment(x)));
    }

    const scaleY = maxMoment > 0 ? (canvas.height / 2 - 20) / maxMoment : 1;

    // Nulová čára
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(offsetX, zeroY);
    ctx.lineTo(offsetX + beamLength * scale, zeroY);
    ctx.stroke();

    // Vykreslení diagramu
    ctx.strokeStyle = '#764ba2';
    ctx.lineWidth = 2;
    ctx.beginPath();
    let firstPoint = true;

    for (let x = 0; x <= beamLength; x += 0.05) {
        const M = calculateBendingMoment(x);
        const canvasX = offsetX + x * scale;
        const canvasY = zeroY - M * scaleY;

        if (firstPoint) {
            ctx.moveTo(canvasX, canvasY);
            firstPoint = false;
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();

    // Popisky
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText('M [kNm]', 10, 20);
    ctx.fillText('0', offsetX - 20, zeroY + 5);
}

// ===================================
// RESET
// ===================================

/**
 * Reset všech dat a vizualizací
 */
function resetAll() {
    pointLoads = [];
    distributedLoads = [];
    updateLoadsList();

    const ctx1 = document.getElementById('beamCanvas').getContext('2d');
    const ctx2 = document.getElementById('shearCanvas').getContext('2d');
    const ctx3 = document.getElementById('momentCanvas').getContext('2d');

    ctx1.clearRect(0, 0, 800, 200);
    ctx2.clearRect(0, 0, 800, 200);
    ctx3.clearRect(0, 0, 800, 200);

    document.getElementById('results').innerHTML = '<p class="info">Zadejte parametry a klikněte na "Vypočítat"</p>';

    drawBeam();
}

// ===================================
// INICIALIZACE
// ===================================

/**
 * Inicializace aplikace při načtení stránky
 */
window.onload = function() {
    drawBeam();
    updateLoadsList();
};
