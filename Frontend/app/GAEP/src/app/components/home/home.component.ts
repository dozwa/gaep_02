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

import { GeapBackendService } from '../../services/geap-backend.service';
import { ApiResponse } from '../../models/Response';
import { Request } from '../../models/Request';

import { DetailsTabComponent } from './details-tab/details-tab.component';

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
    MatCardModule
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
    'NVL COPD (2022)'
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
    references: []
  };;

  constructor(private geapService: GeapBackendService) {}

  // Auswahl einer Frage aus dem Menü
  selectExampleQuestion(question: string) {
    this.selectedQuestion = question;
  }

  getExampleQuestions(): string[] {
    return this.geapService.getExampleQuestions();
  }

  sendRequest(){
    const request: Request = {
      frage: this.selectedQuestion,
      ll: this.leitlinien[this.selectedLeitlinie],
      a_laenge: 1,
      n_empfehlung: 10,
      relevanz: 2,
      detail: this.useComplexLanguage
    };

    console.log(request);

    this.geapService.getAnswer(request).subscribe(
      (data:ApiResponse)=>{
        this.currentResponse = data;
        this.showResponse=true;
        console.log(data);
      }
    );

  }

  // Wenn eine Frage gestellt wurde und eine neue Frage gestellt werden soll
  refresh(){
    this.showResponse=false;
    this.selectedQuestion = "";
  }
}
