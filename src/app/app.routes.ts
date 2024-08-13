import { Routes } from '@angular/router';
import { GifComponent } from './pages/gif/gif.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jack/1', pathMatch: 'full' },
  { path: ':search/:page', component: GifComponent },
];
