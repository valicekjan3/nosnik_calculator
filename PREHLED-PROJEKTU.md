# 📊 Přehled projektu - Nosník Calculator

## 📁 Struktura souborů

```
nosnik-calculator/
│
├── 📄 index.html              (4.4 KB)  - Hlavní HTML struktura
├── 🎨 style.css               (5.7 KB)  - Styly a design
├── ⚙️ script.js               (16 KB)   - Výpočetní logika
│
├── 📖 README.md               (6.5 KB)  - Hlavní dokumentace
├── ⚡ RYCHLY-START.md         (1.6 KB)  - Rychlý návod ke spuštění
├── 📘 NAVOD-GITHUB.md         (7.5 KB)  - Kompletní GitHub návod
├── 📊 PREHLED-PROJEKTU.md     (tento)   - Přehled projektu
│
├── 📋 LICENSE                 (1.1 KB)  - MIT licence
└── 🚫 .gitignore              (2.1 KB)  - Git ignore pravidla
```

**Celkem:** 9 souborů | ~50 KB

---

## 🎯 Co je v jednotlivých souborech

### 📄 `index.html`
**Hlavní HTML soubor aplikace**
- Struktura stránky
- Vstupní formuláře pro parametry nosníku
- Sekce pro přidávání zatížení
- Canvas elementy pro vizualizaci
- Sekce pro výsledky
- Propojení s CSS a JS

### 🎨 `style.css`
**Kompletní styling aplikace**
- Moderní gradientový design
- Responsivní layout (desktop + mobil)
- Stylování tlačítek a formulářů
- Barevné schéma (#667eea, #764ba2)
- Grid layout pro sekce
- Animace a přechody

### ⚙️ `script.js`
**Výpočetní logika a vizualizace**

**Funkce:**
- `addPointLoad()` - Přidání bodového zatížení
- `addDistributedLoad()` - Přidání spojitého zatížení
- `calculateReactions()` - Výpočet reakcí v podporách
- `calculateShearForce(x)` - Výpočet posouvající síly
- `calculateBendingMoment(x)` - Výpočet ohybového momentu
- `drawBeam()` - Vykreslení nosníku
- `drawShearDiagram()` - Diagram posouvající síly
- `drawMomentDiagram()` - Diagram ohybového momentu
- `calculate()` - Hlavní výpočetní funkce
- `resetAll()` - Reset aplikace

**Třídy:**
- `PointLoad` - Reprezentace bodového zatížení
- `DistributedLoad` - Reprezentace spojitého zatížení

---

## 📚 Dokumentační soubory

### 📖 `README.md` (Hlavní dokumentace)
**Obsahuje:**
- Popis projektu a funkcí
- Instalační návod
- Návod k použití
- Ukázkový příklad
- Výpočetní metody
- Plánované funkce (TODO)
- Informace o licenci a autorovi

**Určeno pro:** GitHub, nové uživatele, dokumentaci

### ⚡ `RYCHLY-START.md` (5minutový start)
**Obsahuje:**
- Nejrychlejší způsob spuštění lokálně
- Zkrácený GitHub návod
- Základní použití
- Odkazy na podrobnější návody

**Určeno pro:** Uživatele, kteří chtějí rychle začít

### 📘 `NAVOD-GITHUB.md` (Kompletní GitHub návod)
**Obsahuje:**
- Instalace Git
- Vytvoření GitHub účtu
- Vytvoření repositáře
- Nahrání projektu
- Aktivace GitHub Pages
- Řešení běžných problémů
- Aktualizace projektu

**Určeno pro:** Úplné začátečníky s Git/GitHub

### 📊 `PREHLED-PROJEKTU.md` (tento soubor)
**Obsahuje:**
- Strukturu projektu
- Popis jednotlivých souborů
- Technické specifikace
- Přehled funkcí

**Určeno pro:** Vývojáře, pokročilé uživatele

---

## 🛠️ Technické specifikace

### Frontend
- **HTML5** - Sémantické značky
- **CSS3** - Moderní styling, Grid, Flexbox
- **JavaScript ES6+** - Třídy, arrow funkce, const/let
- **Canvas API** - Vykreslování grafiky

### Kompatibilita
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobilní prohlížeče (iOS Safari, Chrome Mobile)

### Požadavky
- **Server:** Žádný (statická webová stránka)
- **Dependencies:** Žádné (pure JavaScript)
- **Node.js:** Není potřeba
- **Build tools:** Není potřeba

---

## ✨ Funkční možnosti

### Aktuálně implementováno ✅

1. **Výpočty:**
   - Reakce v podporách (prostý nosník)
   - Posouvající síla Q(x)
   - Ohybový moment M(x)
   - Maximální hodnoty Qmax, Mmax

2. **Zatížení:**
   - Bodové zatížení (F, pozice)
   - Spojité zatížení (q, rozsah)
   - Neomezený počet zatížení
   - Odstranění jednotlivých zatížení

3. **Vizualizace:**
   - Grafický nosník s podporami
   - Vizualizace zatížení (šipky)
   - Diagram posouvající síly
   - Diagram ohybového momentu

4. **UI/UX:**
   - Responsivní design
   - Moderní vzhled
   - Validace vstupů
   - Real-time vizualizace

### Plánované funkce 🔄

- [ ] Konzola (vetknutí)
- [ ] Spojitý nosník
- [ ] Momentové zatížení
- [ ] Trojúhelníkové zatížení
- [ ] Výpočet průhybu
- [ ] Export do PDF
- [ ] Uložení/načtení projektů

---

## 📊 Statistiky projektu

### Kód
- **JavaScript:** ~450 řádků
- **CSS:** ~250 řádků
- **HTML:** ~100 řádků
- **Celkem:** ~800 řádků kódu

### Dokumentace
- **Markdown:** ~500 řádků
- **Komentáře:** ~50 řádků
- **Celkem:** ~550 řádků dokumentace

### Poměr dokumentace/kód
- **1.45:1** (dokumentace:kód)
- Velmi dobře zdokumentovaný projekt ✅

---

## 🎨 Barevná paleta

```css
Primární:     #667eea (Modrá)
Sekundární:   #764ba2 (Fialová)
Úspěch:       #28a745 (Zelená)
Varování:     #dc3545 (Červená)
Pozadí:       #f8f9fa (Světle šedá)
Text:         #333333 (Tmavě šedá)
```

### Gradient
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## 📦 Velikosti souborů

| Soubor | Velikost | % z celku |
|--------|----------|-----------|
| script.js | 16 KB | 32% |
| README.md | 6.5 KB | 13% |
| NAVOD-GITHUB.md | 7.5 KB | 15% |
| style.css | 5.7 KB | 11% |
| index.html | 4.4 KB | 9% |
| .gitignore | 2.1 KB | 4% |
| RYCHLY-START.md | 1.6 KB | 3% |
| LICENSE | 1.1 KB | 2% |
| **CELKEM** | **~50 KB** | **100%** |

---

## 🚀 Deployment možnosti

### 1. GitHub Pages (doporučeno)
- ✅ Zdarma
- ✅ Automatické HTTPS
- ✅ Custom doména možná
- ✅ Snadná aktualizace

### 2. Netlify
- ✅ Zdarma
- ✅ Continuous deployment
- ✅ Formuláře

### 3. Vercel
- ✅ Zdarma
- ✅ Rychlý deployment
- ✅ Preview URLs

### 4. GitLab Pages
- ✅ Zdarma
- ✅ Alternativa k GitHub

---

## 📞 Podpora a kontakt

### Otázky a problémy
1. Zkontrolujte `NAVOD-GITHUB.md` (řešení problémů)
2. Přečtěte `README.md` (FAQ)
3. Vytvořte Issue na GitHubu

### Přispívání
1. Fork projektu
2. Vytvořte feature branch
3. Commit změn
4. Push do branch
5. Otevřete Pull Request

---

## 📅 Verze a changelog

### v1.0.0 (Listopad 2024)
- ✅ Inicializace projektu
- ✅ Základní výpočty statiky
- ✅ Canvas vizualizace
- ✅ Responsivní design
- ✅ Kompletní dokumentace
- ✅ GitHub ready

---

## 🎓 Vzdělávací hodnota

Tento projekt je vhodný pro:
- 📚 Studenty stavebních oborů
- 👨‍🏫 Učitele jako demo nástroj
- 💻 JavaScript začátečníky (reference)
- 🎨 Web designery (UI/UX příklad)

---

## 📄 Licence

**MIT License** - Volně použitelné, upravitelné a distribuovatelné

---

**Vytvořeno s ❤️ pro studenty a inženýry**

Poslední aktualizace: Listopad 2024
