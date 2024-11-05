import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Source } from '../../models/Response';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-source-modal',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './source-modal.component.html',
  styleUrl: './source-modal.component.scss'
})
export class SourceModalComponent {

  sources!:Source[];

  noSourcesAvailable = false;

  constructor(public dialogRef: MatDialogRef<SourceModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Source[]) {
    this.sources = data;
    if(this.sources == undefined || this.sources == null || this.sources.length == 0){
      this.noSourcesAvailable = true;
    }
  }
  onClose(): void {
    this.dialogRef.close();
  }

}
