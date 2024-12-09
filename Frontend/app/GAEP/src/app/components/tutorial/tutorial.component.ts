import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { SourceModalComponent } from '../../modals/source-modal/source-modal.component';
import { SearchHistoryComponent } from '../search-history/search-history.component';
import { MatButton } from '@angular/material/button';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Router } from '@angular/router';
import { GeapBackendService } from '../../services/geap-backend.service';
import { ApiResponse } from '../../models/Response';
import { MatDialogModule } from '@angular/material/dialog';

import { GAEPTutorial } from './Tutorial';
import { Tutorial, View } from './TutorialModel';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [HomeComponent, SearchHistoryComponent, MatButton, MatProgressBarModule, CommonModule, SourceModalComponent, MatDialogModule],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
})
export class TutorialComponent implements OnInit {
  // Variablen zum Tracken des aktuellen Fortschritts des Tutorials
  tutorial:Tutorial = GAEPTutorial;
  currentStep:number = 0;
  currentProgress:number = 0.0;

  // Diese beiden Zeilen dienen dazu, dass das View-enum auch im HTML template genutzt werden kann
  static View = View;
  View = TutorialComponent.View;

  
  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    private geapService: GeapBackendService
  ) {

  }
  ngOnInit(): void {
  }
  getDummyData(): ApiResponse {
    return this.geapService.getDummyData();
  }

  endTutorial() {
    this.router.navigate(['/home']);
  }
  prevStep() {
    if (this.currentStep <= 0) {
      return;
    }

    this.unhighlightElement(this.currentStep);
    this.currentStep -= 1;
    this.currentProgress =
      (100 * this.currentStep) / (this.tutorial.steps.length - 1);
    this.highlightElement(this.currentStep);
  }
  nextStep() {
    this.unhighlightElement(this.currentStep);
    this.currentStep += 1;
    // check if tutorial is last
    if (this.currentStep >= this.tutorial.steps.length) {
      this.router.navigate(['/home']);
    }

    this.currentProgress =
      (100 * this.currentStep) / (this.tutorial.steps.length - 1);
    this.highlightElement(this.currentStep);
  }

  // Hebt ein Elements hervor
  highlightElement(tutorial: number) {
    // add highlight class to current tutorial elements
    var specifier = this.tutorial.steps[this.currentStep].ElementSpecifier;
    // Wenn kein Specifier angegeben ist, dann beende die Funktion
    if (specifier == '') {
      return;
    }
    var searchElements = Array.from(
      document.querySelectorAll(specifier)
    );

    if (searchElements.length >= 1) {
      searchElements.forEach((element) => {
        this.renderer.addClass(element, 'highlight');
      });
      const firstElement = searchElements[0];
      if (firstElement instanceof HTMLElement) {
        firstElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Hebt das Hervorheben eines Elements auf
  unhighlightElement(tutorial: number) {
    // remove highlight class from last tutorial step
    const specifier = this.tutorial.steps[this.currentStep].ElementSpecifier;
    // Wenn kein Specifier angegeben ist, dann beende die Funktion
    if (specifier == '') {
      return;
    }
    const searchElements = Array.from(
      document.querySelectorAll(specifier)
    );

    if (searchElements.length >= 1) {
      searchElements.forEach((element) => {
        this.renderer.removeClass(element, 'highlight');
      });
    }
  }
}
