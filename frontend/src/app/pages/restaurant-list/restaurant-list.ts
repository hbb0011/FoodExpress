import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-list',
  imports: [RouterLink],
  templateUrl: './restaurant-list.html',
  styleUrl: './restaurant-list.css',
})
export class RestaurantList {
  private service = inject(RestaurantService);

  restaurants = signal<Restaurant[]>([]);
  loading = signal(true);
  error = signal(false);

  search = signal('');
  cuisine = signal('All');
  openOnly = signal(false);
  sort = signal('az');

  cuisines = computed(() => [
    'All',
    ...new Set(this.restaurants().map((r) => r.typeCuisine)),
  ]);

  filtered = computed(() => {
    const q = this.search().toLowerCase();
    const list = this.restaurants().filter(
      (r) =>
        r.nom.toLowerCase().includes(q) &&
        (this.cuisine() === 'All' || r.typeCuisine === this.cuisine()) &&
        (!this.openOnly() || r.isOpen)
    );
    return [...list].sort((a, b) =>
      this.sort() === 'az'
        ? a.nom.localeCompare(b.nom)
        : a.fraisLivraison - b.fraisLivraison
    );
  });

  constructor() {
    this.service.getRestaurants().subscribe({
      next: (data) => {
        this.restaurants.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }
}