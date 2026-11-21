export interface Restaurant {
  _id: string;
  nom: string;
  description: string;
  adresse: string;
  typeCuisine: string;
  image?: string;
  horaires?: string;
  isOpen: boolean;
  fraisLivraison: number;
}