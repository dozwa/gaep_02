import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButton} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [MatSlideToggleModule,MatButton,FormsModule],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.scss',
})
export class DisclaimerComponent {
  constructor(private router: Router){}

  acceptedCookies:Boolean = false;
  acceptedInformation:Boolean = false;
  acceptedUsage:Boolean = false;
  

  onDisclaimerSend() {

    localStorage.setItem('disclaimerAgreed', "1");

    // Den Benutzer zu /home umleiten
    this.router.navigate(['/home']);
  }
}
