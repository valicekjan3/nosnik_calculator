# 📘 Kompletní návod - Nasazení na GitHub

Tento dokument obsahuje **krok za krokem** návod, jak nahrát projekt na GitHub a zprovoznit live demo přes GitHub Pages.

---

## 📋 Obsah

1. [Příprava Git](#1-příprava-git)
2. [Vytvoření GitHub repositáře](#2-vytvoření-github-repositáře)
3. [Nahrání projektu na GitHub](#3-nahrání-projektu-na-github)
4. [Aktivace GitHub Pages](#4-aktivace-github-pages)
5. [Ověření a testování](#5-ověření-a-testování)
6. [Další aktualizace](#6-další-aktualizace)
7. [Řešení problémů](#7-řešení-problémů)

---

## 1. Příprava Git

### Instalace Git (pokud ještě nemáte)

**Windows:**
1. Stáhněte Git z [git-scm.com](https://git-scm.com/download/win)
2. Spusťte instalátor a postupujte podle pokynů
3. Ověřte instalaci v CMD:
```bash
git --version
```

**macOS:**
```bash
brew install git
```

**Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/Fedora
```

### Konfigurace Git (první nastavení)

```bash
git config --global user.name "Vaše Jméno"
git config --global user.email "vas.email@example.com"
```

### Inicializace Git repositáře

1. Otevřete **Command Prompt** (CMD) nebo **Terminal**
2. Přejděte do složky projektu:

```bash
cd C:\Users\KEAI\nosnik-calculator
```

3. Inicializujte Git:

```bash
git init
```

4. Přidejte všechny soubory:

```bash
git add .
```

5. Vytvořte první commit:

```bash
git commit -m "Počáteční commit - Nosník Calculator v1.0"
```

---

## 2. Vytvoření GitHub repositáře

### Krok 1: Přihlášení na GitHub

1. Jděte na [github.com](https://github.com)
2. Přihlaste se (nebo si vytvořte účet, pokud nemáte)

### Krok 2: Vytvoření nového repositáře

1. Klikněte na zelené tlačítko **"New"** (nebo `+` vpravo nahoře → "New repository")
2. Vyplňte informace:

   - **Repository name:** `nosnik-calculator`
   - **Description:** `Interaktivní webová aplikace pro výpočet zatížení a vizualizaci nosníků`
   - **Public/Private:** Vyberte **Public** (pro GitHub Pages)
   - ❌ **NEZAŠKRTÁVEJTE** "Add a README file"
   - ❌ **NEZAŠKRTÁVEJTE** ".gitignore"
   - ❌ **NEZAŠKRTÁVEJTE** "Choose a license"

3. Klikněte na **"Create repository"**

### Krok 3: Poznamenejte si URL

GitHub vám ukáže URL typu:
```
https://github.com/vase-uzivatelske-jmeno/nosnik-calculator.git
```

**Tuto URL si poznamenejte!** (budete ji potřebovat v dalším kroku)

---

## 3. Nahrání projektu na GitHub

### Propojení lokálního projektu s GitHub

V CMD/Terminal spusťte (nahraďte URL vaší skutečnou URL):

```bash
# Přidání remote repositáře
git remote add origin https://github.com/vase-uzivatelske-jmeno/nosnik-calculator.git

# Ověření
git remote -v

# Nahrání na GitHub
git branch -M main
git push -u origin main
```

### Co dělat, když se zobrazí přihlašovací okno?

- **Username:** Vaše GitHub uživatelské jméno
- **Password:** **Personal Access Token** (NIKOLI vaše heslo!)

#### Jak vytvořit Personal Access Token:

1. Na GitHub → **Settings** (vpravo nahoře, váš profil)
2. **Developer settings** (dole v levém menu)
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token** → **Generate new token (classic)**
5. Pojmenujte: `nosnik-calculator-token`
6. Zaškrtněte: `repo` (celá sekce)
7. Klikněte **Generate token**
8. **ZKOPÍRUJTE TOKEN** (už ho neuvidíte!)
9. Použijte tento token jako heslo při pushu

### Ověření nahrání

1. Obnovte stránku GitHub repositáře
2. Měli byste vidět všechny soubory:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `LICENSE`
   - `.gitignore`

---

## 4. Aktivace GitHub Pages

### Krok za krokem:

1. **V GitHub repositáři** jděte na záložku **Settings** (nahoře)

2. V levém menu klikněte na **Pages**

3. V sekci **"Source"**:
   - Branch: Vyberte **`main`** (nebo `master`)
   - Folder: Vyberte **`/ (root)`**
   - Klikněte **Save**

4. **Počkejte 1-2 minuty**

5. Obnovte stránku - měli byste vidět zelený box:
   ```
   ✅ Your site is published at https://vase-uzivatelske-jmeno.github.io/nosnik-calculator/
   ```

6. **Klikněte na URL** - měla by se otevřít vaše aplikace!

---

## 5. Ověření a testování

### Kontrolní seznam:

- ✅ Stránka se načítá bez chyb
- ✅ Vizualizace nosníku je viditelná
- ✅ Lze přidávat bodové zatížení
- ✅ Lze přidávat spojité zatížení
- ✅ Tlačítko "Vypočítat" funguje
- ✅ Diagramy se zobrazují správně
- ✅ Tlačítko "Reset" funguje
- ✅ Responsivní design funguje na mobilu

### Testování na mobilním zařízení:

1. Otevřete URL na mobilu
2. Vyzkoušejte základní funkce
3. Zkontrolujte, že se vše zobrazuje správně

---

## 6. Další aktualizace

### Jak aktualizovat projekt po změnách:

1. **Proveďte změny** v souborech

2. **V CMD/Terminal:**

```bash
# Přejděte do složky projektu
cd C:\Users\KEAI\nosnik-calculator

# Zkontrolujte změny
git status

# Přidejte změněné soubory
git add .

# Vytvořte commit
git commit -m "Popis změn (např. 'Přidána nová funkce X')"

# Nahrajte na GitHub
git push
```

3. **Počkejte 1-2 minuty** - GitHub Pages se automaticky aktualizuje

4. **Obnovte stránku** (Ctrl + F5 pro tvrdé obnovení)

---

## 7. Řešení problémů

### Problém: "Permission denied"

**Řešení:**
```bash
git remote set-url origin https://vase-uzivatelske-jmeno@github.com/vase-uzivatelske-jmeno/nosnik-calculator.git
git push
```

### Problém: "GitHub Pages není aktivní"

**Řešení:**
1. Zkontrolujte, že repositář je **Public**
2. Zkontrolujte nastavení Pages (Settings → Pages)
3. Zkuste změnit Branch na jinou a zpět na `main`

### Problém: "404 Not Found" na GitHub Pages

**Řešení:**
1. Zkontrolujte, že soubor se jmenuje přesně `index.html`
2. Vyčkejte 5-10 minut (někdy trvá déle)
3. Zkuste vymazat cache prohlížeče (Ctrl + Shift + Delete)

### Problém: CSS/JS nefunguje na GitHub Pages

**Řešení:**

V `index.html` zkontrolujte, že cesty jsou **relativní**:

```html
<!-- SPRÁVNĚ ✅ -->
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

<!-- ŠPATNĚ ❌ -->
<link rel="stylesheet" href="/style.css">
<script src="/script.js"></script>
```

### Problém: Zapomenuté heslo k Git

**Řešení:**

Použijte SSH místo HTTPS:

1. Vygenerujte SSH klíč:
```bash
ssh-keygen -t ed25519 -C "vas.email@example.com"
```

2. Přidejte klíč na GitHub (Settings → SSH and GPG keys)

3. Změňte remote URL:
```bash
git remote set-url origin git@github.com:vase-uzivatelske-jmeno/nosnik-calculator.git
```

---

## 🎉 Hotovo!

Gratulujeme! Váš projekt je nyní:
- ✅ Nahrán na GitHub
- ✅ Zpřístupněn online přes GitHub Pages
- ✅ Připraven ke sdílení

### 📤 Sdílení projektu:

**GitHub repositář:**
```
https://github.com/vase-uzivatelske-jmeno/nosnik-calculator
```

**Live aplikace:**
```
https://vase-uzivatelske-jmeno.github.io/nosnik-calculator/
```

---

## 📞 Podpora

Pokud narazíte na problémy:

1. Zkontrolujte [GitHub Docs](https://docs.github.com)
2. Hledejte na [Stack Overflow](https://stackoverflow.com)
3. Kontaktujte GitHub Support

---

## 🔗 Užitečné odkazy

- [Git dokumentace](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com)
- [GitHub Pages dokumentace](https://docs.github.com/en/pages)
- [Markdown guide](https://www.markdownguide.org)

---

**Vytvořeno pro projekt Nosník Calculator**
© 2024 | MIT License
