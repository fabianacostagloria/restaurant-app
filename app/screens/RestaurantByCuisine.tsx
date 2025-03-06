import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { Docs } from '../types/restaurant';
import { useFavorites } from '../context/FavoritesContext';
import { theme } from '../theme/theme';
import { styles } from '../theme/RestaurantByCuisineStyle';
import { RestaurantCard } from '../components/RestaurantCard';

const BASE_API_URL = "https://api.wefood.dev/restaurants?limit=29";

type RestaurantByCuisineScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RestaurantByCuisine'
>;

type RestaurantByCuisineScreenRouteProp = RouteProp<
  RootStackParamList,
  'RestaurantByCuisine'
>;

interface RestaurantByCuisineProps {
  navigation: RestaurantByCuisineScreenNavigationProp;
  route: RestaurantByCuisineScreenRouteProp;
}

export const RestaurantByCuisine = ({ navigation, route }: RestaurantByCuisineProps) => {
  const [restaurants, setRestaurants] = useState<Docs[]>([]);
  const [loading, setLoading] = useState(true);
  const { cuisine } = route.params;
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(BASE_API_URL);
        const data = await response.json();
        const filteredRestaurants = data.docs.filter((restaurant: Docs) =>
          restaurant.cuisines?.some(
            (restaurantCuisine) => restaurantCuisine.name?.en === cuisine.name.en
          )
        );
        setRestaurants(filteredRestaurants);
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [cuisine]);

  const toggleFavorite = async (restaurant: Docs) => {
    if (isFavorite(restaurant._id)) {
      await removeFromFavorites(restaurant._id);
    } else {
      await addToFavorites(restaurant);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>{cuisine.name.en} Restaurants</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#FF6B6B" style={styles.loader} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.restaurantsGrid}>
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant._id} item={restaurant} navigation={navigation} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
