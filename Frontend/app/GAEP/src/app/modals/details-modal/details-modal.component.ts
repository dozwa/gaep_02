import { Component , Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { MatDialogRef, MatDialogTitle, MatDialogClose, MatDialogModule  } from '@angular/material/dialog';
import { DetailsTabComponent } from '../../components/home/details-tab/details-tab.component';
import { Reference } from '../../models/Response';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-modal',
  standalone: true,
  imports: [CommonModule,DetailsTabComponent,MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './details-modal.component.html',
  styleUrl: './details-modal.component.scss'
})
export class DetailsModalComponent {
  
  reference!:Reference;

  showDetails:Boolean = false;

  constructor(public dialogRef: MatDialogRef<DetailsModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Reference) {
    this.reference = data;

  }

  onClose(): void {
    this.dialogRef.close();
  }

}
