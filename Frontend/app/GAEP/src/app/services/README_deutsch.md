# Beschreibung
[Switch to english version](/Frontend/app/GAEP/src/app/services/README.md)

[back to main README](/README.md)

In diesem Ordner befinden sich alle Angular Services. Services dienen allgemein zur Kommunikation mit anderen Schnittstellen und stellen Funktionalitäten für Komponenten bereit.

## gaep-backend.service

Dieser Service dient zur Kommunikation mit dem Backend (gaep-python server). Es werden API-Anfragen gesendet und die Daten in ein definiertes Datenmodell umgedwandelt. Diese Datenmodelle finden sich im Ordner `models`.



Funktionen im Überblick:
- getAnswer

### Benutzerabfrage
Sendet eine Benutzeranfrage zum Backend Server und wandelt die Anfrage in eine ApiResponse um, welche alle Daten beinhaltet. Hierfür gibt es die Methode `getAnswer()` im Service. 

> Aktuell werden die Beispieldaten aus einer JSON geladen und nicht vom GAEP Backend Server. In dieser Methode müsste statt dem Aufruf der `getAnswerDummyData()` Methode eine POST-Request mit der userRequest an das GAEP Backend ausgeführt werden.

Methodenübersicht:
- `getAnswer(userRequest: Request): Observable<ApiResponse>` - Sendet eine Benutzeranfrage zum Backend Server und konvertiert die Antwort in ein `ApiResponse` Objekt

- `getAnswerDummyData(): Observable<ApiResponse>` - lädt Dummy Daten aus einer JSON Datei, welche auf dem Webserver liegt.

- `getDummyData():ApiResponse` - Gibt die in diesem Service definierten Dummydaten zurück. (Wird für das Tutorial verwendet)


### Suchverlauf
Lädt eine Liste von letzten Benutzerabfragen.

> Aktuell wird ein Beispiel-Suchverlauf aus einer JSON geladen und nicht vom GAEP Backend Server. In dieser Methode müsste statt dem Aufruf der `getSearchHistoryDummy()` Methode gegen eine GET Request oder ähnliches ausgetauscht werden

- `getSearchHistory(): Observable<SearchHistoryEntry[]>` - Fragt die Liste der letzten Sucheinträge ab.

`getSearchHistoryDummy(): Observable<SearchHistoryEntry[]>` - lädt Dummy Daten eines Suchverlaufs aus einer JSON Datei, welche auf dem Webserver liegt
