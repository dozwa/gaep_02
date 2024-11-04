import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatMenuModule } from '@angular/material/menu'; // Importiere MatMenuModule
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';

import { GeapBackendService } from '../../services/geap-backend.service';
import { ApiResponse } from '../../models/Response';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatIconModule,MatAutocompleteModule,FormsModule,ReactiveFormsModule,MatMenuModule,MatSlideToggleModule,MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
 // Array mit Beispiel-Fragen
 exampleQuestions: string[] = [
  'Sind NSARs bei chronischem Kreuzschmerz empfehlenswert?',
  'Welche Übungen werden für Kreuzschmerzen empfohlen?',
  'Wie können psychosoziale Risikofaktoren bei Kreuzschmerzen erkannt werden?',
  'Ist eine Bildgebung zur Diagnose von Kreuzschmerzen sinnvoll?',
  'Welches Training wird bei COPD empfohlen?',
  'Wird Atemtherapie in der Behandlung von COPD empfohlen?',
  'Wie kann ich bei COPD eine Tabakentwöhnung durchführen?'
];

// Steuerung der Eingabe
selectedQuestion = '';
questionControl = new FormControl();

useComplexLanguage: Boolean = false; // gibt an ob einfache oder fachsprache Verwendet werden soll


constructor(private geapService:GeapBackendService) {
  
}


// Auswahl einer Frage aus dem Menü
selectExampleQuestion(question: string) {
  this.selectedQuestion = question;
}

}
