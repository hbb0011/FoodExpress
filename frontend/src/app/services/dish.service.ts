
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/api/dishes';

  getDishesByRestaurant(restaurantId: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(
      `${this.apiUrl}/restaurant/${restaurantId}`
    );
  }
}
