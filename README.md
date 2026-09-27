# Website Julian Frick

Interaktive Bewerbungs-Website im Papiercollage-Stil. Reines HTML/CSS/JS, gehostet auf GitHub Pages.
Inhalte und Dateien werden im Backend unter `/admin` bearbeitet (Sveltia CMS).

## Aufbau

| Ordner / Datei | Inhalt |
|---|---|
| `index.html`, `css/`, `js/` | Die Website selbst |
| `img/` | Szene und ausgeschnittene Orte (nicht über das Backend änderbar) |
| `content/*.json` | Alle Texte – werden vom Backend geschrieben |
| `uploads/` | Alle hochgeladenen PDFs und Bilder |
| `admin/` | Das Backend (`admin/config.yml` legt fest, was bearbeitbar ist) |

## Einmalige Einrichtung

1. Auf github.com ein neues **öffentliches** Repository anlegen mit dem Namen `IHR-NAME.github.io`
   (IHR-NAME = Ihr GitHub-Benutzername).
2. Alle Dateien aus diesem Ordner hochladen (auf GitHub: «Add file» → «Upload files», Ordner hineinziehen, «Commit changes»).
3. In `admin/config.yml` die Zeile `repo:` anpassen: `IHR-NAME/IHR-NAME.github.io` (direkt auf GitHub mit dem Stift-Symbol bearbeitbar).
4. Repository → Settings → Pages → «Deploy from a branch» → Branch `main`, Ordner `/ (root)` → Save.
5. Nach 1–2 Minuten ist die Website erreichbar unter `https://IHR-NAME.github.io`.

## Backend öffnen

1. `https://IHR-NAME.github.io/admin` öffnen.
2. Anmelden mit **«Sign In with Token»** (Zugangsschlüssel):
   GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → «Generate new token»,
   nur dieses Repository auswählen, Berechtigung **Contents: Read and write**. Token kopieren und im Backend einfügen.
   Der Token bleibt nur in Ihrem Browser gespeichert – nicht weitergeben.
3. Inhalte bearbeiten, Dateien hochladen, **«Save»** (Speichern). Die Website ist 1–2 Minuten später aktuell.

## Wo landen die Daten?

- Texte → `content/*.json` im GitHub-Repository
- Hochgeladene PDFs und Bilder → Ordner `uploads/` im GitHub-Repository
- Jede Änderung ist ein «Commit» und kann auf GitHub jederzeit rückgängig gemacht werden.
- Achtung: Alles im Repository ist öffentlich einsehbar (auch Dokumente in `uploads/`).
