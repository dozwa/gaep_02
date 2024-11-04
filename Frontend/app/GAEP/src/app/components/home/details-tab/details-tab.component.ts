import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Reference } from '../../../models/Response';
import { MatTooltipModule } from '@angular/material/tooltip';

/*
export enum Empfehlengrad{
  Soll="keyboard_double_arrow_up",
  Sollte="keyboard_arrow_up",
  Kann="remove",
  SollteNicht="keyboard_arrow_down",
  SollNicht="keyboard_double_arrow_down",
  Statement="info",
  None="question_mark"
}*/
export enum Empfehlengrad {
  soll = '↑↑',
  sollte = '↑',
  kann = '-',
  sollteNicht = '↓',
  sollNicht = '↓↓',
  statement = '🛈',
  None = 'question_mark',
}
export enum Relevanz {
  None = '?',
  HOCH = '◼',
  MITTEL = '◧',
  NIEDRIG = '◫',
}

@Component({
  selector: 'app-details-tab',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTooltipModule],
  templateUrl: './details-tab.component.html',
  styleUrl: './details-tab.component.scss',
})
export class DetailsTabComponent implements OnInit{

  empfehlungsgrad: Empfehlengrad = Empfehlengrad.None;
  relevanz: Relevanz = Relevanz.None;

  @Input() refernce!: Reference;

  constructor() {
    console.log(this.refernce);
  }
  ngOnInit(): void {
      console.log("onInit");
      console.log(this.refernce);
      this.empfehlungsgrad = Empfehlengrad[this.refernce.level as keyof typeof Empfehlengrad];
      this.relevanz = Relevanz[this.refernce.relevance as keyof typeof Relevanz];
  }
  

  getTooltipEmpfehlungsgrad():string {
    return `Empfehlungsgrad:
    ↑↑ = soll
    ↑ = sollte
    - = kann
    ↓ = sollte nicht
    ↓↓ = soll nicht
    🛈 = Statement`;
  }
  getTooltipRelevanz():string {
    return `Relevanz:
    ◼ = Hoch
    ◧ = Mittel
    ◫ = Niedrig
    `
  }
}
