
export interface Dish {
  _id: string;
  nom: string;
  description: string;
  prix: number;
  image: string;
  disponible: boolean;

  categorie?: {
    _id: string;
    nom?: string;
    name?: string;
  };

  restaurant?: {
    _id: string;
    nom?: string;
    image?: string;
    typeCuisine?: string;
    fraisLivraison?: number;
  };
}
