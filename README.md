# 📐 Nosník Calculator

Interaktivní webová aplikace pro výpočet zatížení a vizualizaci statiky nosníků. Aplikace umožňuje provádět základní statické výpočty nosníků s grafickou vizualizací výsledků.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Hlavní funkce

- ✅ **Výpočet reakcí v podporách** - Automatický výpočet pro prostý nosník
- ✅ **Bodové zatížení** - Přidání libovolného počtu bodových sil
- ✅ **Spojité zatížení** - Rovnoměrné spojité zatížení na vybraný úsek
- ✅ **Grafická vizualizace** - Canvas zobrazení nosníku se všemi zatíženími
- ✅ **Diagram posouvající síly (Q)** - Grafický diagram průběhu posouvající síly
- ✅ **Diagram ohybového momentu (M)** - Grafický diagram průběhu ohybového momentu
- ✅ **Maximální hodnoty** - Automatický výpočet Qmax a Mmax
- ✅ **Responsivní design** - Přizpůsobení pro mobilní zařízení

## 🚀 Demo

[🔗 Live Demo](https://yourusername.github.io/nosnik-calculator/)

## 📸 Screenshots

### Hlavní rozhraní
![Screenshot](screenshot.png)

## 🛠️ Technologie

- **HTML5** - Sémantická struktura
- **CSS3** - Moderní styling s gradientem
- **JavaScript (ES6+)** - Výpočetní logika
- **Canvas API** - Vykreslování vizualizací

## 📦 Instalace

### Lokální spuštění

1. **Klonujte repositář:**
```bash
git clone https://github.com/yourusername/nosnik-calculator.git
```

2. **Přejděte do složky:**
```bash
cd nosnik-calculator
```

3. **Otevřete v prohlížeči:**
- Poklikejte na `index.html` nebo
- Použijte lokální server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

4. **Otevřete v prohlížeči:**
```
http://localhost:8000
```

## 📖 Použití

### Základní postup

1. **Nastavte parametry nosníku**
   - Zadejte délku nosníku v metrech (např. 6 m)
   - Vyberte typ podpory (aktuálně dostupný: prostý nosník)

2. **Přidejte zatížení**

   **Bodové zatížení:**
   - Zadejte sílu F v kN
   - Zadejte pozici v metrech od levé podpory
   - Klikněte na "Přidat bodové zatížení"

   **Spojité zatížení:**
   - Zadejte zatížení q v kN/m
   - Zadejte počáteční a koncovou pozici
   - Klikněte na "Přidat spojité zatížení"

3. **Vypočítejte výsledky**
   - Klikněte na tlačítko "Vypočítat"
   - Aplikace zobrazí:
     - Reakce v podporách (RA, RB)
     - Maximální hodnoty (Qmax, Mmax)
     - Grafické diagramy

4. **Upravte nebo resetujte**
   - Můžete odstranit jednotlivá zatížení kliknutím na "Odstranit"
   - Tlačítko "Reset" vymaže všechna data

### Ukázkový příklad

```
Nosník:
- Délka: 6 m
- Typ: Prostý nosník

Zatížení:
- Bodové: F = 10 kN na pozici 3 m
- Spojité: q = 5 kN/m od 0 m do 6 m

Výsledky:
- RA = 20 kN
- RB = 20 kN
- Qmax = 20 kN
- Mmax = 30 kNm
```

## 📐 Výpočetní metody

### Reakce v podporách

Aplikace využívá základní rovnice rovnováhy:

```
ΣFy = 0  →  RA + RB - F = 0
ΣMA = 0  →  RB × L - F × a = 0
```

Kde:
- `RA, RB` = reakce v podporách
- `F` = síla
- `L` = délka nosníku
- `a` = vzdálenost síly od podpory A

### Posouvající síla Q(x)

```
Q(x) = RA - Σ(síly vlevo od x)
```

### Ohybový moment M(x)

```
M(x) = RA × x - Σ(momenty od sil vlevo od x)
```

## 🎨 Konvence

### Znaménková konvence

- **Síly:** Pozitivní směr dolů
- **Posouvající síla:** Pozitivní, pokud má tendenci otáčet prvek ve směru hodinových ručiček
- **Ohybový moment:** Pozitivní moment způsobuje tah ve spodních vláknech

### Barevné kódování

- 🔴 **Červená** - Bodové zatížení
- 🟢 **Zelená** - Spojité zatížení
- 🔵 **Modrá** - Diagram posouvající síly
- 🟣 **Fialová** - Diagram ohybového momentu

## 📁 Struktura projektu

```
nosnik-calculator/
│
├── index.html          # Hlavní HTML soubor
├── style.css           # Styly aplikace
├── script.js           # JavaScript logika
├── README.md           # Dokumentace
├── LICENSE             # MIT licence
└── .gitignore         # Git ignore soubor
```

## 🔧 Konfigurace

### Úprava maximálních hodnot

V souboru `index.html` můžete upravit maximální délku nosníku:

```html
<input type="number" id="beamLength" value="6" min="1" max="20" step="0.1">
```

### Změna barevného schématu

V souboru `style.css` upravte CSS proměnné:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
}
```

## 🤝 Přispívání

Přispění jsou vítána! Prosím postupujte podle následujících kroků:

1. Forkněte projekt
2. Vytvořte feature branch (`git checkout -b feature/NoveFunkce`)
3. Commitněte změny (`git commit -m 'Přidání nové funkce'`)
4. Pushněte do branch (`git push origin feature/NoveFunkce`)
5. Otevřete Pull Request

## 📝 Plánované funkce (TODO)

- [ ] Podpora konzoly (vetknutí)
- [ ] Podpora spojitých nosníků
- [ ] Momentové zatížení
- [ ] Trojúhelníkové spojité zatížení
- [ ] Výpočet průhybu nosníku
- [ ] Export výsledků do PDF
- [ ] Uložení a načtení projektů
- [ ] Vícepodporové nosníky
- [ ] Tisk výsledků

## 🐛 Známé problémy

- Typ podpory "Konzola" a "Spojitý nosník" nejsou zatím implementovány
- Canvas vizualizace může být rozostřená na některých HiDPI displejích

## 📄 Licence

Tento projekt je licencován pod MIT licencí - viz soubor [LICENSE](LICENSE) pro detaily.

## 👨‍💻 Autor

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Poděkování

- Inspirováno potřebami studentů stavebních oborů
- Děkuji všem, kteří přispěli zpětnou vazbou

## 📚 Reference

- [Stavební mechanika - základy](https://cs.wikipedia.org/wiki/Stavební_mechanika)
- [Teorie nosníků](https://en.wikipedia.org/wiki/Euler%E2%80%93Bernoulli_beam_theory)

## 🔗 Další zdroje

- [Canvas API dokumentace](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [JavaScript ES6 Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

⭐ **Pokud se vám tento projekt líbí, dejte mu hvězdičku na GitHubu!** ⭐
