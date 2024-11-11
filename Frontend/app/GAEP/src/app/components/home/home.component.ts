import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatMenuModule } from '@angular/material/menu'; // Importiere MatMenuModule
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

import { GeapBackendService } from '../../services/geap-backend.service';
import { ApiResponse, Reference } from '../../models/Response';
import { Request } from '../../models/Request';

import { DetailsTabComponent } from './details-tab/details-tab.component';
import { DetailsModalComponent } from '../../modals/details-modal/details-modal.component';

export enum SortCriteria {
  RELEVANZ,
  NUMMERIERUNG,
  EMPFEHLUNGSGRAD,
}
enum RelevanzPriority {
  NONE = 0,
  HOCH = 3,
  MITTEL = 2,
  NIEDRIG = 1,
}
enum EmpfehlengradPriority {
  None = -1,
  soll = 5,
  sollte = 4,
  kann = 3,
  sollteNicht = 2,
  sollNicht = 1,
  statement = 0,
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatButton,
    DetailsTabComponent,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Steuerung der Eingabe
  selectedQuestion = '';

  // Auswahl für die Leitlinein
  leitlinien = [
    'NVL Nicht-spezifischer Kreuzschmerz (2017)',
    'NVL COPD (2021)',
    'NVL COPD (2022)',
    'NVL COPD (2022)',
  ];
  selectedLeitlinie = 0;

  // gibt an ob einfache oder fachsprache Verwendet werden soll
  useComplexLanguage: Boolean = false;

  // Parameter zum Anzeigen der Antwort
  showResponse: Boolean = false;
  currentResponse: ApiResponse = {
    optimized_question: '',
    generated_answer: '',
    guideline: '',
    n_references_returned: 0,
    request_id: '',
    timestamp_request: 0,
    timestamp_response: 0,
    duration: 0,
    model: '',
    user_question: '',
    references: [],
  };
  currentReferences: Array<Reference> = [];

  // Diese beiden Zeilen dienen dazu, dass SortCriteria auch im HTML template genutzt werden kann
  static SortCriteria = SortCriteria;
  SortCriteria = HomeComponent.SortCriteria;

  // Kriterium zum Sortieren
  currentCritia: SortCriteria = SortCriteria.RELEVANZ;
  currentSortUp: boolean = true;

  // Eingabe in der Suchleiste (Filter)
  searchbarInput = "";

  constructor(
    private geapService: GeapBackendService,
    public dialog: MatDialog
  ) {}

  // Auswahl einer Frage aus dem Menü
  selectExampleQuestion(question: string) {
    this.selectedQuestion = question;
  }

  getExampleQuestions(): string[] {
    return this.geapService.getExampleQuestions();
  }

  sendRequest() {
    if (this.selectedQuestion.length < 4) {
      alert('Die Frage ist zu kurz bitte geben Sie eine richtige Frage ein.');
      return;
    }
    const request: Request = {
      frage: this.selectedQuestion,
      ll: this.leitlinien[this.selectedLeitlinie],
      a_laenge: 1,
      n_empfehlung: 10,
      relevanz: 2,
      detail: this.useComplexLanguage,
    };

    console.log(request);

    this.geapService.getAnswer(request).subscribe((data: ApiResponse) => {
      this.currentResponse = data;
      this.currentReferences = this.currentResponse.references.slice();
      this.showResponse = true;
      console.log(data);
    });
  }

  // Wenn eine Frage gestellt wurde und eine neue Frage gestellt werden soll
  refresh() {
    this.showResponse = false;
    this.selectedQuestion = '';
  }

  // Öffnet ein Popup mit den Dateils der Referenz
  openDetailsModal(reference: Reference) {
    const dialogRef = this.dialog.open(DetailsModalComponent, {
      data: reference,
      panelClass: 'modal-details',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Details Dialog wurde geschlossen');
    });
  }

  clickSortCriteria(criteria: SortCriteria) {
    if (criteria == this.currentCritia) {
      this.currentSortUp = !this.currentSortUp;
    } else {
      this.currentCritia = criteria;
      this.currentSortUp = true;
    }

    this.sortReferences();
  }

  sortReferences() {
    switch (this.currentCritia) {
      case SortCriteria.RELEVANZ: // Sortieren nach Relevanz
        this.currentReferences.sort((a, b) => {
          const relevanz_a =
            RelevanzPriority[a.relevance as keyof typeof RelevanzPriority];
          const relevanz_b =
            RelevanzPriority[b.relevance as keyof typeof RelevanzPriority];

          if (this.currentSortUp) {
            return relevanz_b - relevanz_a; // Nach Relevanz aufsteigend sortieren
          } else {
            return relevanz_a - relevanz_b; // Nach Relevanz absteigen sortieren
          }
        });
        break;

      case SortCriteria.EMPFEHLUNGSGRAD: // Sortieren nach Empfehlungsgrad
        this.currentReferences.sort((a, b) => {
          const recommendation_a =
            EmpfehlengradPriority[
              a.level as keyof typeof EmpfehlengradPriority
            ];
          const recommendation_b =
            EmpfehlengradPriority[
              b.level as keyof typeof EmpfehlengradPriority
            ];

          if (this.currentSortUp) {
            return recommendation_b - recommendation_a; // Nach Empfehlungsgrad aufsteigend sortieren
          } else {
            return recommendation_a - recommendation_b; // Nach Empfehlungsgrad absteigen sortieren
          }
        });
        break;

      case SortCriteria.NUMMERIERUNG:
        this.currentReferences.sort((a, b) => {
          var [aFirst, aSecond] = a.reference_id.split('-').map(Number);
          var [bFirst, bSecond] = b.reference_id.split('-').map(Number);

          if(this.currentSortUp){
            [aFirst, bFirst] = [bFirst, aFirst];
            [aSecond, bSecond] = [bSecond, aSecond];
          }

          if (aFirst !== bFirst) {
            
            return aFirst - bFirst;
          }else{
            return aSecond - bSecond;
          }
        });
        break;
    }
  }

  searchRefernces() {
    var search = this.searchbarInput;
    if (search.length == 0 || search == '' || search == ' ') {
      this.currentReferences = this.currentResponse.references.slice();
      this.sortReferences();
      return;
    }
    search = search.toLocaleLowerCase();
    this.currentReferences = this.currentResponse.references.filter((ref) => {
      return (
        ref.reference_id.toLocaleLowerCase().includes(search) ||
        ref.generated_summary.toLocaleLowerCase().includes(search) ||
        ref.reference_text.toLocaleLowerCase().includes(search) ||
        ref.chapter.toLocaleLowerCase().includes(search) ||
        ref.search_string.toLocaleLowerCase().includes(search)
      );
    });
    this.sortReferences();
  }

  resetFilterSearch(){
    this.searchbarInput = "";
    this.searchRefernces();
  }
}
