# Einführung #

Terminalapplikation zum Einlesen und Verarbeiten von CSV Dateien


# Einmalige Ausführung

## Installation

1. nodejs installieren
2. npm installieren
3. Am Anfang ein leeres Verzeichnis erstellen (beliebig)
4. Öffnen eines Terminalfensters cmd und in des erstellte Verzeichnis navigieren
5. Erstmalige Installation der App mittels **npm i hereford.fileparser.mgschneider**

# Wiederholte Ausführung

## Bearbeitung CSV Rohdaten (am Beispiel adressen.csv)

1. Datei **adressen.csv** öffnen
2. Zeile 1 in **adressen.csv** prüfen, und Leerzeichen in **Adresse Nr** löschen (muss **AdressNr** lauten)
3. Zeile 1 in **adressen.csv** prüfen, und Leerzeichen in **E Mail** löschen (muss **EMail** lauten)
4. Datei schließen
5. Datei in das unter dem o.a. Punkt **Installation** erstellte **Verzeichnis** kopieren (Explorer)
6. Evtl. im Verzeichnis befindliche Datei **output.csv** in einen anderen Ordner sichern

## Ausführung Bearbeitung

1. Öffnen eines Terminalfensters und in das unter **Installation** erstellte **Verzeichis** navigieren
2. Eingabe des Befehls **npm start adressen.csv**
3. Eingabe eines Schwellwertes (threshold) für die Gruppen (es werden in der Ausgabedatei nur die Kunden mit höchste Gruppe > Schwellwert mit einem Flag = 1 ergänzt)
4. Wenn Terminalausgabe am Ende stehen bleibt und das Fenster sich nicht selbstständig schließt, **CTRL/STRG - C drücken**
5. Kopieren der Datei **output.csv**, wenn gewünscht (wird beim erneuten Lauf gelöscht)