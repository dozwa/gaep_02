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

// Bezeichnungen der einzelnen Ansichten
export enum View {
  NONE, // Keine Seite anzeigen
  HOME, // Home Seite
  ANSWER, // Antwort Seite
  HISTORY, // Suchverlauf
  SOURCE // Quellen Modal
}

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [HomeComponent, SearchHistoryComponent, MatButton, MatProgressBarModule, CommonModule, SourceModalComponent, MatDialogModule],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
})
export class TutorialComponent implements OnInit {
  // Variablen zum Tracken des aktuellen Fortschritts des Tutorials
  currentText = 'Hallo';
  currentButtonText = 'Verstanden';
  currentTutorial = 0;
  currentProgress = 0.0;
  test = true;

  // Diese beiden Zeilen dienen dazu, dass das View-enum auch im HTML template genutzt werden kann
  static View = View;
  View = TutorialComponent.View;

  // Hier sind die Texte für jeden Schritt des Tutorials enthalten
  tutorialText = [
    'Dies ist die Startseite.\nVon hier aus können Fragen an die KI gestellt werden.',
    'Wählen Sie zuerst die Leitlinie aus, aus welcher die KI die Informationen für die Generierung Ihrer Antwort beziehen soll.',
    'Abhängig davon, ob Sie eine kompakte und einfach verständliche Antwort, oder eine ausführliche Zusammenfassung erhalten möchten, kann dies hier eingestellt werden.',
    'Sie können entweder konkrete Fragen stellen oder die KI passende Informationen zu einem Schlagwort zusammenfassen lassen.',
    'Dies ist die Antwortseite, welche nach dem Absenden einer Anfrage oder der Auswahl eines Eintrags im Suchverlauf generiert wird.',
    'Oben finden Sie die von Ihnen gestellte Frage, sowie die KI-generierte Antwort (ggf. inklusive Quellenverweise), basierend auf den Informationen aus der entsprechenden Leitlinie.',
    'Ein Klick auf das App-Logo oder den Reset-Button bringt Sie zurück zur Startseite.',
    'Die Antwort der KI basiert auf den Empfehlungen aus den Leitlinien und den mit diesen zusammenhängenden Informationen. Diese Empfehlungen können Sie nach verschiedenen Attributen sortieren oder durchsuchen.',
    '"Relevanz" beschreibt die Relevanz einer Empfehlung für die Beantwortung Ihrer Frage. Der Emfpehlungsgrad ist entnommen aus der Leitlinie. Eine Legende zu den Symbolen kann jederzeit aufgerufen werden.',
    'Hier werden alle Empfehlungspakete in der Reihenfolge der von Ihnen gewählten Sortierung aufgelistet.',
    'Der obere Text ist die konkrete Empfehlung aus der Leitlinie und wird nicht durch die KI abgeändert.',
    'Die Empfehlungsbasis findet sich unten in einer Karte. Sofern die Empfehlung auf Fachliteratur basiert, können Sie diese Quellen aufrufen.',
    'Falls eine Originalquelle online verfügbar ist, kann diese von hier aus direkt aufgerufen werden.',
    'Unten rechts können Sie die Original-PDF-Version der Leitlinie aufrufen, aus welcher die Empfehlung entnommen wurde.',
    'Zu jeder Empfehlung finden sich Detailinformationen. Diese werden ebenfalls von der KI in Bezug auf Ihre Frage zusammengefasst.\nMit einem Klick auf die Karte können Sie eine Seite mit den Original-Detailinformationen aufrufen.',
    'Neben der Empfehlungskarte sind hier alle Detailinformationen aufgelistet und können ausgeklappt werden.',
    'Diese Detailinformation können entweder Texte oder auch Grafiken beinhalten.',
    'Sofern ein Detailabschnitt auf Quellen verweist, sind auch diese am Ende des Abschnitts aufrufbar.',
    'Über das Menü haben Sie unter anderem Zugriff auf den Suchverlauf.',
    'Alle vergangenen Suchanfragen werden hier chronologisch aufgelistet.',
    'Neben der Fragestellung finden sie auch die Info zur Komplexität der generierten Antwort. Mit einem Click auf einen Eintrag können sie die jeweilige Antwortseite aufrufen.',
    'Über das Menü oder den Homebutton gelangen Sie zurück zur Startseite.\nDamit haben Sie das Ende des Tutorials erreicht.',
  ];

  // Hier sind die Elemente, welche bei jedem Schritt hervorgehoben werden soll enthalten
  tutorialComponents = [
    '',
    '#select-guideline',
    '.language-select',
    '#searchBar',
    '',
    '#asked-question',
    '#home-picture',
    '#filter-card',
    '',
    '.details-tab',
    '.details-header-text',
    '.reference',
    '',
    '.pdf-link',
    '.details-summary',
    '',
    '',
    '',
    '#menu-bar',
    '',
    '',
    '',
  ];

  // Hier sind die Seiten welche zum jeweiligen Schritt im Tutorial angezeigt werden soll enthalten
  tutorialView = [
    View.HOME,
    View.HOME,
    View.HOME,
    View.HOME,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.ANSWER,
    View.NONE,
    View.NONE,
    View.NONE,
    View.HOME,
    View.HISTORY,
    View.HISTORY,
    View.HISTORY,
  ];
  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
    private geapService: GeapBackendService
  ) {
    if (
      !(
        this.tutorialComponents.length == this.tutorialView.length &&
        this.tutorialView.length == this.tutorialText.length
      )
    ) {
      alert(
        'Ein Fehler in der GAEP Anwendung ist beim Konfigurieren passiert. Bitte kontaktieren Sie den Betreiber der Software. Fehlermeldung: Das erstellte Tutorial besitzt unterschiedlich lange Einstellungen.'
      );
    }
  }
  ngOnInit(): void {
    this.currentText = this.tutorialText[this.currentTutorial];
    this;
  }
  getDummyData(): ApiResponse {
    return this.geapService.getDummyData();
  }

  endTutorial() {
    this.router.navigate(['/home']);
  }
  prevStep() {
    if (this.currentTutorial <= 0) {
      return;
    }

    this.unhighlightElement(this.currentTutorial);
    this.currentTutorial -= 1;
    this.currentText = this.tutorialText[this.currentTutorial];
    this.currentProgress =
      (100 * this.currentTutorial) / (this.tutorialText.length - 1);
    this.highlightElement(this.currentTutorial);
  }
  nextStep() {
    this.unhighlightElement(this.currentTutorial);
    this.currentTutorial += 1;
    // check if tutorial is last
    if (this.currentTutorial >= this.tutorialText.length) {
      this.router.navigate(['/home']);
    }

    this.currentText = this.tutorialText[this.currentTutorial];
    this.currentProgress =
      (100 * this.currentTutorial) / (this.tutorialText.length - 1);
    this.highlightElement(this.currentTutorial);
  }

  // Hebt ein Elements hervor
  highlightElement(tutorial: number) {
    // add highlight class to current tutorial elements
    var specifier = this.tutorialComponents[tutorial];
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
    const specifier = this.tutorialComponents[tutorial];
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
