import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Docs } from '../types/restaurant';

interface FavoritesContextData {
  favorites: Docs[];
  addToFavorites: (restaurant: Docs) => Promise<void>;
  removeFromFavorites: (restaurantId: string) => Promise<void>;
  isFavorite: (restaurantId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextData>({} as FavoritesContextData);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Docs[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('@WeFood:favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  const saveFavorites = async (newFavorites: Docs[]) => {
    try {
      await AsyncStorage.setItem('@WeFood:favorites', JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  };

  const addToFavorites = async (restaurant: Docs) => {
    const newFavorites = [...favorites, restaurant];
    setFavorites(newFavorites);
    await saveFavorites(newFavorites);
  };

  const removeFromFavorites = async (restaurantId: string) => {
    const newFavorites = favorites.filter(fav => fav._id !== restaurantId);
    setFavorites(newFavorites);
    await saveFavorites(newFavorites);
  };

  const isFavorite = (restaurantId: string) => {
    return favorites.some(fav => fav._id === restaurantId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
}; 