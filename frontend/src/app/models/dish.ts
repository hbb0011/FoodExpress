export interface Dish {
  _id: string;
  nom: string;
  description?: string;
  prix: number;
  image?: string;
  disponible: boolean;
  categorie: string;
  restaurant: string;
}