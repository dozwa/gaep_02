import { Component } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent {
  exampleQuestions = [
    { question: 'Sind NSARs bei chronischem Kreuzschmerz empfehlenswert?', type: 'einfach' },
    { question: 'Welche Übungen werden für Kreuzschmerzen empfohlen?', type: 'detailliert' },
    { question: 'Wie können psychosoziale Risikofaktoren bei Kreuzschmerzen erkannt werden?', type: 'detailliert' },
    { question: 'Ist eine Bildgebung zur Diagnose von Kreuzschmerzen sinnvoll?', type: 'einfach' },
    { question: 'Welches Training wird bei COPD empfohlen?', type: 'detailliert' },
    { question: 'Wird Atemtherapie in der Behandlung von COPD empfohlen?', type: 'einfach' },
    { question: 'Wie kann ich bei COPD eine Tabakentwöhnung durchführen?', type: 'detailliert' }
  ];

  onQuestionClick(question: { question: string, type: string }) {
    // Logik bei Klick auf eine Frage
    console.log(`Ausgewählte Frage: ${question.question}, Antworttyp: ${question.type}`);
    // Hier können Sie zusätzliche Logik implementieren
  }
}