import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-modal',
  templateUrl: './feedback-modal.component.html',
  standalone: true,
  imports : [MatFormFieldModule,MatInputModule,MatButton, FormsModule],
  styleUrl: './feedback-modal.component.scss'
})
export class FeedbackModalComponent {

  public subject:string = "";
  public comment:string="";
  public mail:string="";

  constructor(public dialogRef: MatDialogRef<FeedbackModalComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }
  onClear(){
    this.subject="";
    this.comment="";
    this.mail="";
  }
}
   
