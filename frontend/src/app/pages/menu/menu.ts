
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { DishService } from '../../services/dish.service';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private dishService = inject(DishService);

  dishes = signal<Dish[]>([]);

  restaurantName = signal('Restaurant Menu');
  restaurantImage = signal<string | null>(null);
  restaurantCuisine = signal<string | null>(null);
  deliveryFee = signal<number | null>(null);

  loading = signal(true);
  errorMessage = signal('');

  ngOnInit(): void {

    const restaurantId =
      this.route.snapshot.paramMap.get('id');

    if (!restaurantId) {
      this.errorMessage.set('Restaurant not found.');
      this.loading.set(false);
      return;
    }

    this.loadDishes(restaurantId);
  }

  loadDishes(restaurantId: string): void {

    this.loading.set(true);
    this.errorMessage.set('');

    this.dishService.getDishesByRestaurant(restaurantId)
      .subscribe({
        next: (data) => {

          this.dishes.set(data);

          const restaurant = data[0]?.restaurant;
          if (restaurant) {
            if (restaurant.nom) {
              this.restaurantName.set(restaurant.nom);
            }
            this.restaurantImage.set(restaurant.image ?? null);
            this.restaurantCuisine.set(restaurant.typeCuisine ?? null);
            this.deliveryFee.set(restaurant.fraisLivraison ?? null);
          }

          this.loading.set(false);
        },

        error: (error) => {
          console.error('Error loading dishes:', error);

          this.errorMessage.set(
            'Unable to load the restaurant menu. Please try again.'
          );

          this.loading.set(false);
        }
      });
  }

  getCategory(dish: Dish): string {
    return dish.categorie?.nom
      || dish.categorie?.name
      || 'Other';
  }

}
