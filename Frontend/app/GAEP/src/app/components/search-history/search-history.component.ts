import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeapBackendService } from '../../services/geap-backend.service';
import { SearchHistoryEntry } from '../../models/Response';

@Component({
  selector: 'app-search-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {
  searchHistory: SearchHistoryEntry[] = [];

  @Output() questionSelected = new EventEmitter<{ question: string, detail: boolean }>();

  constructor(private geapService: GeapBackendService) {}

  ngOnInit(): void {
    this.geapService.getSearchHistory().subscribe((data) => {
      console.log('Search History:', data);
      if (data && Array.isArray(data)) {
        this.searchHistory = data;
      } else {
        console.error('Wrong structure:', data);
      }
    }, (error) => {
      console.error('Error:', error);
    });
  }

  onQuestionClick(question: string, detail: boolean): void {
    this.questionSelected.emit({ question, detail });
  }
}
