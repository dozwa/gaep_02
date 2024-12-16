# GAEP Frontend

Das Frontend für GAEP ist eine webbasierte Oberfläche über welche der Benutzer die Anwendung bedienen kann. Diese kann über einen Webbrowser aufgerufen werden.

Die Anwendung wurde mit Angular umgesetzt und kann mithilfe des miteglieferten Docker-Containers ausgeführt werden.

[Zurück zur Haupt README](/README.md)

[Switch to english Version](/Frontend/README.md)


## Table of Contents

- [Prerequisite & Setup](#prerequisite--setup)
- [Docker](#docker)
  - [Build Container](#build-container)
  - [Run Container](#run-container)
- [Technologie-Stack](#technologie-stack)
- [Projektstruktur](#projektstruktur)
  - [Stylings](#stylings)
  - [Service](#service)
  - [Modals](#modals)
  - [Models](#models)
  - [Components](#components)
- [Weiterführende Dokumentationen](#weiterführende-dokumentationen)
  - [GAEP Backend Service](#gaep-backend-service)
  - [Tutorial erstellen](#tutorial-erstellen)

## Prerequisite & Setup

Um das Frontend auszuführen wird eine Docker Installation (Docker Compose) benötigt.

Um die Anwendung einzurichten, klonen Sie zuerst das Repository auf Ihr lokales System und navigieren dann in den `Frontend`-Ordner. Bauen Sie anschließend den Docker-Container und führen Sie ihn aus, um die Anwendung zu starten. Schließlich öffnen Sie die bereitgestellte URL in Ihrem Browser, um auf die Anwendung zuzugreifen und sicherzustellen, dass sie korrekt funktioniert.

## Docker

Die mit Angular umgesetzte Webanwendung wird in einem Docker Container ausgeführt. Hierzu stehen zwei verschiedene Docker Container zur Verfügung. Ein Container beinhaltet die Entwicklungsumgebung, welcher sich zum Entwickeln der Anwendung eignet, und der andere für die Produktivumgebung, welcher für den Einsatz gedacht ist.

Innerhalb des Containers der Entwicklungsumgebung wird die Angular Anwendung mit `ng serve` gebaut und zur Laufzeit lokal gehostet. Änderungen im Code werden direkt kompiliert und gehostet, wodurch der Entwicklungsprozess effizienter gestaltet wird. Dies ermöglicht Entwicklern, Änderungen am Code vorzunehmen und diese sofort im laufenden System zu testen, ohne dass der gesamte Entwicklungsserver jedes Mal neu gestartet werden muss.  <span style="color:red">Die Entwicklungsumgebung ist nicht für den produktiveinsatz ausgelegt!</span>

Der Container mit der Produktumgebung kompiliert die Angular Anwendung mit den Produktiveinstellungen und hostet die Anwendung anschließen mithilfe eines NGINX servers. 

### build container

Bevor der Docker Container verwendet werden kann muss dieser gebaut werden. Anschließend kann dieser gestartet werden. Die Docker Container können mithilfe von Docker Compose erstellt und gestartet werden.

Zum bauen des Development Containes:
> $ docker compose build gaep-frontend

Zum bauen des Deployment Containers:
> $ docker compose build gaep-frontend-prod

### run container

Zum Starten des Containers mit der Entwicklungsumgebung
> $ docker compose up gaep-frontend
Zum Starten des 
> $ docker compose up gaep-frontend-prod

Die Website kann dann über http erreicht werden: 'http://localhost:80'

HTTPS ist bisher noch nicht eingerichtet!


## Technologie-Stack

verwendete Frameworks:
* Angular 18
* Node 18

verwendete UI Bibliothek:
* Angular Material
'https://material.angular.io/components/categories'


## Projektstruktur 

```plaintext
app/GAEP/
├─ package.json
├─ public/
└─ src/
   ├─ app/
   │  ├─ components/
   │  │  ├─ disclaimer/
   │  │  ├─ feedback-tab/
   │  │  ├─ header/
   │  │  ├─ home/
   │  │  ├─ search-history/
   │  │  └─ tutorial/
   │  ├─ modals/
   │  ├─ models/
   │  └─ services/
   └─ stylings/
      ├─ custom-styling.scss
      ├─ custom-theme.scss
      └─ custom-variables.scss
```

Der Ordner `public` beinhaltet statische Dateien wie Bilder, Icons, Schriftarten oder andere Ressourcen, die während der Entwicklung und im fertigen Build benötigt werden.

Die `package.json`-Datei in einem Projekt enthält Metadaten über das Projekt, einschließlich seines Namens, seiner Version, der Abhängigkeiten zu anderen Paketen, Skripten für verschiedene Aufgaben sowie Konfigurationseigenschaften.

Der `src` Ordner enthält den Quellcode der Anwendung. Neben dem `app`-Ordner, der die Hauptanwendungslogik und Komponenten enthält, und dem Styling-Ordner mit den Stylesheets, enthält der `src`-Ordner in einem Angular-Projekt auch Dateien wie `index.html`, die zentrale HTML-Struktur, und `main.ts`, den Einstiegspunkt für die Anwendung.

Der `components`-Ordner in einem Angular-Projekt enthält die Sammlung von wiederverwendbaren Bausteinen, die als Komponenten bezeichnet werden. Eine Komponente ist eine in sich geschlossene Einheit der Benutzeroberfläche mit einer eigenen Logik und Darstellung, bestehend aus einer TypeScript-Datei für die Logik, einem HTML-Template für die Struktur und optionalen CSS-Dateien für die Styles.

Der Ordner `modals` enthält alle speziell für Modals erstellten Komponenten, die als eigenständige UI-Elemente fungieren und zur Anzeige von überlagerten Dialogen in der Anwendung verwendet werden. Modals sind interaktive Fenster, die über die aktuelle Anwendungsschicht eingeblendet werden, um Benutzereingaben zu erfassen, wichtige Informationen anzuzeigen oder bestimmte Aktionen zu bestätigen, ohne die bestehende Benutzeroberfläche zu verlassen.

Der Ordner `models` enthält alle Datenmodelle, die die Struktur und Typen von Datenobjekten im Projekt definieren, um die Datenaustausch- und Verarbeitungslogik zu unterstützen und zu vereinfachen.

### Stylings
```
app/GAEP/src/
├─ styles.scss
└─ stylings/
   ├─ custom-styling.scss
   ├─ custom-theme.scss
   └─ custom-variables.scss
```
In diesem Projekt wird SCSS als Styling-Präprozessor verwendet, um eine erweiterte und modulare Form der Stylesheet-Verwaltung zu ermöglichen. Der Ordner `stylings` enthält die selbst erstellten Style-Dateien, die speziell auf die Bedürfnisse der Anwendung ausgerichtet sind. Als zentrale Einstiegsdatei dient `style.scss`, welche `custom-styling.scss` importiert. Diese Datei enthält grundlegende Formatierungen für das allgemeine Erscheinungsbild der Anwendung. Für die Implementierung des Farbschemas, das mit Angular Material verwendet wird, ist die Datei `custom-theme.scss` verantwortlich. Zudem werden alle definierten Farbwerte in der Datei `custom-variables.scss` verwaltet, die ursprünglich im ersten Prototyp der Mendix-Anwendung entwickelt wurden.

### Service
```
app/GAEP/src/services
├─ geap-backend.service.ts
├─ geap-backend.service.spec.ts
└─ README.md
```
Der Ordner `services` enthält Services, die für die Kommunikation der Anwendung mit externen Systemen verantwortlich sind. Eine detaillierte Beschreibung der enthaltenen Services finden Sie [hier](/Frontend/app/GAEP/src/app/services/README.md).

Der in `geap-backend.service.ts` umgesetzte Service übernimmt die zentrale Aufgabe, mit dem GAEP Backend zu kommunizieren. Dieser Service sendet Anfragen an die REST-API, verarbeitet die empfangenen Daten und stellt diese für die Nutzung in anderen Angular-Komponenten bereit.


### Modals
```
app/GAEP/src/modals
├─ details-modal/
├─ feedback-modal/
└─ source-modal/
```

Der Ordner `modals` enthält alle speziell für Modals erstellten Komponenten. Enthalten sind folgende Modals:

| modal | Beschreibung |
| --- | --- |
| details-modal | Zum Anzeigen von detaillierten Informationen eines Empfehlungspackets |
| feedback-modal | Beinhaltet das Feedback Formular |
| source-modal | Zeigt eine Liste von Quellen an |




### Models
```
app/GAEP/src/models
├─ Request.ts
└─ Response.ts
```
In diesem Ordner befinden sich die Datenmodelle, welche in dieser Anwendung genutzt werden. Die Datenmodelle dienen hauptsächlich zur einheitlichen Kommunikation untereinander. Sie werden unteranderem genutzt, um die vom Backend erhaltenen Daten einheitlich zu Formatieren.

Die `Request.ts` enthalt das Datenmodell `Request`, welche alle Daten einer Benutzeranfrage beinhaltet.

Die `Response.ts` beinhaltet mehrere Datenmodelle, welche die Daten der Antwort einer Benutzeranfrage beinhaltet. Das Hauptmodell für die Antwort vom Backend Server ist `ApiResponse`. Diese enthalt eine Liste von `Reference`, welche zusätzliche Informationen für jede Handlungsempfelhung beinhalten. `ReferenceDetail` beinhaltet weiterführende Informationen zu jeder Referenz. In dem Datenmodell `Source` sind die Informationen zu einer Quelle enthalten.

### Components
```
app/GAEP/src/components
├─ disclaimer
├─ feedback-tab
├─ header
├─ home
├─ search-history
└─ tutorial
```

In diesem Ordner befinden sich die Implementierungen der einzelnen Angular Komponenten. Eine Angular Komponente ist eine in sich geschlossene Einheit der Benutzeroberfläche mit einer eigenen Logik und Darstellung, bestehend aus einer TypeScript-Datei für die Logik, einem HTML-Template für die Struktur und optionalen CSS-Dateien für die Styles.

| Komponente | Beschreibung |
| --- | --- |
| disclaimer | Dislaimer, welches direk beim Start angezeigt wird |
| feedback-tab | blaues Feedback Element am rechten Rand |
| header | Menuleiste oben |
| home | Hauptseite auf der der Benutzer Fragen stellen kann und Antworten angezeigt bekommt |
| search-history | Suchverlauf in der der Benutzer die letzten Suchanfragen sehen kann |
| tutorial | Beinhaltet das Tutorial zu der Benutzeroberfläche |

Ein Anleitung zum erstellen eines Tutorials ist [hier](/Frontend/app/GAEP/src/app/components/tutorial/README.md)

## weiterführende Dokumenationen

### GAEP Backend Service
Eine detaillierte Beschreibung des GAEP Backend Services finden Sie [hier](/Frontend/app/GAEP/src/app/services/README.md). Dort ist auch beschrieben, wie der Service funktioniert und auf den Backend Server angepasst werden kann.

### Tutorial erstellen
Ein Anleitung zum erstellen eines Tutorials ist [hier](/Frontend/app/GAEP/src/app/components/tutorial/README.md)