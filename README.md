# Dehnübungen Timer PWA

Eine minimalistische Progressive Web App für Dehnübungsroutinen mit automatischem Timer.

## Features

- Wiederholender Timer mit konfigurierbarer Dauer
- Automatische Pausen zwischen Übungen
- Akustisches Signal bei jedem Ablauf
- Vibration auf mobilen Geräten
- Fortschrittsanzeige (aktuell & gesamt)
- Offline-Funktionalität
- Einstellungen werden lokal gespeichert

## Installation

### Lokales Testing

1. Starte einen lokalen Webserver im Projektverzeichnis:

```bash
# Mit Python 3
python -m http.server 8000

# Oder mit Node.js
npx serve

# Oder mit PHP
php -S localhost:8000
```

2. Öffne `http://localhost:8000` im Browser

### Als PWA installieren

1. Öffne die App in Chrome (Desktop oder Android)
2. Klicke auf das Install-Icon in der Adressleiste
3. Oder nutze "Zum Startbildschirm hinzufügen" im Chrome-Menü

## Icons erstellen

Die App benötigt Icons in `assets/icons/`:

- `icon-192.png` (192x192 px)
- `icon-512.png` (512x512 px)

### Option 1: Mit Online-Tool erstellen

Nutze z.B. [Favicon.io](https://favicon.io/) oder [RealFaviconGenerator](https://realfavicongenerator.net/)

### Option 2: Mit ImageMagick

```bash
# Erstelle einfache Icons mit Textlabel
convert -size 192x192 xc:#2563eb -gravity center -pointsize 80 -fill white -annotate +0+0 "T" assets/icons/icon-192.png
convert -size 512x512 xc:#2563eb -gravity center -pointsize 200 -fill white -annotate +0+0 "T" assets/icons/icon-512.png
```

### Option 3: SVG zu PNG mit Node.js

Ein einfaches Icon-Generator-Script ist im Projekt enthalten (`generate-icons.js`).

## Verwendung

1. **Einstellungen anpassen**:
   - Timer-Dauer (z.B. 60 Sekunden)
   - Pause zwischen Übungen (z.B. 5 Sekunden)
   - Anzahl Wiederholungen (z.B. 10)
   - Ton-Auswahl (Beep/Chime/Bell)
   - Lautstärke

2. **Timer starten**:
   - "Start"-Button drücken
   - Timer zählt herunter
   - Bei 0: Ton + Vibration
   - Automatische Pause
   - Nächste Wiederholung startet automatisch

3. **Pause/Resume**:
   - "Pause"-Button während Timer läuft
   - "Fortsetzen" zum Weitermachen

4. **Reset**:
   - Stoppt Timer komplett
   - Setzt alles zurück

## Technische Details

- **Framework**: Vanilla JavaScript (keine Dependencies)
- **Größe**: < 50 KB
- **Browser**: Chrome, Firefox, Safari, Edge
- **Offline**: Vollständig funktionsfähig ohne Internet
- **Audio**: Web Audio API für Sounds
- **Speicher**: LocalStorage für Einstellungen

## Browser-Kompatibilität

- Chrome/Edge: ✅ Vollständig
- Firefox: ✅ Vollständig
- Safari: ✅ Vollständig (iOS 11.3+)
- Samsung Internet: ✅ Vollständig

## Deployment

### GitHub Pages

1. Pushe Code zu GitHub
2. Aktiviere GitHub Pages in Repository Settings
3. Wähle `main` branch als Source

### Netlify/Vercel

1. Verbinde Repository
2. Build Command: (leer)
3. Publish Directory: `/`

**Wichtig**: HTTPS ist erforderlich für PWA-Features!

## Lizenz

MIT
