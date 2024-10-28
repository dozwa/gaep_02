import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { DisclaimerGuard } from './disclaimer.guard';

export const routes: Routes = [
  {
    path: '',
    component: DisclaimerComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [DisclaimerGuard],
  },
  {
    path: 'tutorial',
    component: TutorialComponent,
    canActivate: [DisclaimerGuard],
  },
  {
    path: 'searchHistory',
    component: SearchHistoryComponent,
    canActivate: [DisclaimerGuard],
  },
  { path: 'disclaimer', 
    component: DisclaimerComponent },
];
