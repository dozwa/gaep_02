import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  standalone: true,
  imports : [MatFormFieldModule,MatInputModule,MatButton],
  styleUrl: './feedback-modal.component.scss'
})
export class FeedbackModalComponent {
  constructor(public dialogRef: MatDialogRef<FeedbackModalComponent>) {}
  onClose(): void {
    this.dialogRef.close();
  }
}
   
