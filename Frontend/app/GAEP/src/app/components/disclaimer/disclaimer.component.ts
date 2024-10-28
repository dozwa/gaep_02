import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.scss',
})
export class DisclaimerComponent {
  constructor(private router: Router){}

  onDisclaimerSend() {

    localStorage.setItem('disclaimerAgreed', "1");

    // Den Benutzer zu /home umleiten
    this.router.navigate(['/home']);
  }
}
