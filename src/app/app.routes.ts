import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { StationList } from './pages/station-list/station-list';
import { StationDetail } from './pages/station-detail/station-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'stations', component: StationList },
  { path: 'stations/:slug', component: StationDetail },
];
