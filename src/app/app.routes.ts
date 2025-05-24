import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecruitComponent } from './recruit/recruit.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recruit', component: RecruitComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
