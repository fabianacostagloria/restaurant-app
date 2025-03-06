import { Docs } from './restaurant';

export interface Cuisine {
  _id: string;
  name: {
    en: string;
    'pt-PT'?: string;
    'pt-BR'?: string;
  };
  tag: string;
}

export type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: { item: Docs };
  Favorites: undefined;
  Map: undefined;
  RestaurantByCuisine: { cuisine: Cuisine };
}; 