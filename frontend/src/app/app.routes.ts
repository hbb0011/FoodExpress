import { Routes } from '@angular/router';
import { RestaurantList } from './pages/restaurant-list/restaurant-list';
import { RestaurantDetail } from './pages/restaurant-detail/restaurant-detail';

export const routes: Routes = [
  { path: '', component: RestaurantList },
  { path: 'restaurants/:id', component: RestaurantDetail },
  { path: '**', redirectTo: '' },
];