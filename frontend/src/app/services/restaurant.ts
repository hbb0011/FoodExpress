import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { Category } from '../models/category';
import { Dish } from '../models/dish';

const API = 'http://localhost:3000/api';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private http = inject(HttpClient);

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${API}/restaurants`);
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${API}/restaurants/${id}`);
  }

  getCategories(restaurantId: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${API}/restaurants/${restaurantId}/categories`);
  }

  getDishes(restaurantId: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${API}/restaurants/${restaurantId}/dishes`);
  }
}