import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Datenmodelle
import { ApiResponse, Reference, ReferenceDetail } from '../models/Response';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root',
})
export class GeapBackendService {
  private dummyDataResponse = 'dummyData/JSON_sturcture_im.txt'; // Pfad zu deiner JSON-Datei

  // Array mit Beispiel-Fragen
  exampleQuestions: string[] = [
    'Sind NSARs bei chronischem Kreuzschmerz empfehlenswert?',
    'Welche Übungen werden für Kreuzschmerzen empfohlen?',
    'Wie können psychosoziale Risikofaktoren bei Kreuzschmerzen erkannt werden?',
    'Ist eine Bildgebung zur Diagnose von Kreuzschmerzen sinnvoll?',
    'Welches Training wird bei COPD empfohlen?',
    'Wird Atemtherapie in der Behandlung von COPD empfohlen?',
    'Wie kann ich bei COPD eine Tabakentwöhnung durchführen?',
  ];

  constructor(private http: HttpClient) {}

  getAnswer(userRequest: Request): Observable<ApiResponse> {
    return this.getAnswerDummyData();
  }

  getAnswerDummyData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.dummyDataResponse);
  }

  // Wird in der HomeComponent genutzt. Hier können später die Beispielfragen über eine API oder ähnliches geholt werden.
  getExampleQuestions(): string[] {
    return this.exampleQuestions;
  }
}
