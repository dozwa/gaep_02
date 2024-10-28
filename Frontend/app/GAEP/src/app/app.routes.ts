import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'tutorial', component: TutorialComponent },
    { path: 'searchHistory', component: SearchHistoryComponent }
    
];
