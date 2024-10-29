import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackModalComponent } from '../../modals/feedback-modal/feedback-modal.component';

@Component({
  selector: 'app-feedback-tab',
  standalone: true,
  imports: [],
  templateUrl: './feedback-tab.component.html',
  styleUrl: './feedback-tab.component.scss'
})
export class FeedbackTabComponent {
constructor(public dialog: MatDialog){}

  openFeedbackDialog(): void {
    
    const dialogRef = this.dialog.open(FeedbackModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog wurde geschlossen');
      // Bearbeite das Ergebnis hier, falls erforderlich
    });
  }
}
