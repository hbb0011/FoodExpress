import { Routes } from '@angular/router';
import { RestaurantList } from './pages/restaurant-list/restaurant-list';
import { MenuComponent } from './pages/menu/menu';
export const routes: Routes = [
  { path: '', component: RestaurantList },
  { path: 'restaurants/:id/menu', component: MenuComponent },
  { path: '**', redirectTo: '' },
];