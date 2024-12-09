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

  private dummyApiResponse: ApiResponse = {
    optimized_question: "Was sind die Leitlinien zur Behandlung von Rückenschmerzen?",
    generated_answer: "Die Leitlinien umfassen sowohl medikamentöse als auch nicht-medikamentöse Therapieansätze.",
    guideline: "Rückenschmerz-Leitlinie 2023",
    n_references_returned: 1,
    request_id: "req-1234",
    timestamp_request: Date.now(),
    timestamp_response: Date.now() + 5000, // Beispiel: 5 Sekunden später
    duration: 5000, // Dauer in Millisekunden
    model: "GPT-4",
    user_question: "Was sind die Therapiemethoden bei Rückenschmerzen?",
    references: [
      {
        reference_id: "1-1",
        generated_summary: "Rückenschmerz kann medikamentös oder mit Physiotherapie behandelt werden.",
        relevance: "HOCH",
        sources: [
          { source_id: 1, content: "Quelle 1 Inhalt", url: "http://source1.com" },
          { source_id: 2, content: "Quelle 2 Inhalt", url: "http://source2.com" },
        ],
        details: [
          {
            position: 1,
            title: "Detallierter Bereich 1",
            content: "Detailiertes Abteil 1 Content",
            image_base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA" // Optional
          }
        ],
        reference_text: "Detaillierter Text der Referenz",
        reference_sort: 1,
        level: "soll",
        level_sort: "A",
        semantic_sort: 1,
        base: "Basistext der Referenz",
        guideline_url: "http://guidelineexample.com",
        chapter: "Physiotherapie bei Rückenschmerzen",
        search_string: "Rückenschmerzmethode"
      },
      {
        reference_id: "1-2",
        generated_summary: "Rückenschmerz kann medikamentös oder mit Physiotherapie behandelt werden.",
        relevance: "MITTEL",
        sources: [
          { source_id: 1, content: "Quelle 1 Inhalt", url: "http://source1.com" },
          { source_id: 2, content: "Quelle 2 Inhalt", url: "http://source2.com" },
        ],
        details: [
          {
            position: 1,
            title: "Detallierter Bereich 1",
            content: "Detailiertes Abteil 1 Content",
            image_base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA" // Optional
          }
        ],
        reference_text: "Detaillierter Text der Referenz",
        reference_sort: 1,
        level: "sollte",
        level_sort: "A",
        semantic_sort: 1,
        base: "Basistext der Referenz",
        guideline_url: "http://guidelineexample.com",
        chapter: "Physiotherapie bei Rückenschmerzen",
        search_string: "Rückenschmerzmethode"
      }
    ]
  };

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
  getDummyData():ApiResponse{
    return this.dummyApiResponse;
  }

  // Wird in der HomeComponent genutzt. Hier können später die Beispielfragen über eine API oder ähnliches geholt werden.
  getExampleQuestions(): string[] {
    return this.exampleQuestions;
  }
}
