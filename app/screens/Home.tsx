import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, SafeAreaView } from "react-native";
import { useFavorites } from "../context/FavoritesContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Docs, ApiResponse } from "../types/restaurant";
import NetInfo from "@react-native-community/netinfo";
import { styles } from "../theme/HomeStyle";
import { BottomNav } from "../components/BottomNav";
import { Category } from "../components/Category";
import { RestaurantCard } from "../components/RestaurantCard";
const BASE_API_URL = "https://api.wefood.dev/restaurants"; // URL base da API
const LIMIT = 5; // Número de restaurantes por página

type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: { item: Docs };
  Favorites: undefined;
  Map: undefined;
  RestaurantByCuisine: { cuisine: any };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export const Home = ({ navigation }: HomeProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchData = async (newOffset: number) => {
    try {
      if (newOffset === 0) setLoading(true);
      else setLoadingMore(true);

      const response = await fetch(
        `${BASE_API_URL}?limit=${LIMIT}&offset=${newOffset}`
      );
      if (!response.ok) throw new Error("Erro ao buscar dados");

      const result: ApiResponse = await response.json();

      setData((prevData) => ({
        docs:
          newOffset === 0
            ? result.docs
            : [...(prevData?.docs || []), ...result.docs],
        totalDocs: result.totalDocs,
        offset: result.offset,
        limit: result.limit,
      }));

      setOffset(newOffset);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      if (newOffset === 0) setLoading(false);
      else setLoadingMore(false);
    }
  };

  useEffect(() => {
    const offline = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected || false);
      if (state.isConnected) {
        fetchData(0);
      }
    });

    return () => offline();
  }, []);

  useEffect(() => {
    if (isConnected) {
      fetchData(0);
    }
  }, [isConnected]);

  const loadMore = () => {
    if (!loadingMore) {
      fetchData(offset + LIMIT);
    }
  };

  const toggleFavorite = async (restaurant: Docs) => {
    if (isFavorite(restaurant._id)) {
      await removeFromFavorites(restaurant._id);
    } else {
      await addToFavorites(restaurant);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isConnected ? (
        <Text style={styles.offlineText}>You are offline.</Text>
      ) : (
        <>
          <Category navigation={navigation} />

          <View style={styles.restaurantSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Restaurants</Text>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              overScrollMode="always"
              onMomentumScrollEnd={({ nativeEvent }) => {
                const contentHeight = nativeEvent.contentSize.height;
                const contentOffsetY = nativeEvent.contentOffset.y;
                const layoutHeight = nativeEvent.layoutMeasurement.height;
                if (contentHeight - contentOffsetY <= layoutHeight + 20) {
                  loadMore();
                }
              }}
            >
              <View style={styles.grid}>
                {data?.docs.map((item) => (
                  <RestaurantCard
                    key={item._id}
                    item={item}
                    navigation={navigation}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                  />
                ))}
              </View>
              {loadingMore && (
                <View>
                  <ActivityIndicator size="large" color="#FF6B6B" />
                </View>
              )}
            </ScrollView>
          </View>

          <BottomNav navigation={navigation} screen="Home" />
        </>
      )}
    </SafeAreaView>
  );
};
