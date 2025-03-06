import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { TouchableOpacity, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Docs } from "../types/restaurant";
import { Ionicons } from "@expo/vector-icons"; // Importando Ionicons
import { styles } from "../theme/MapStyle";
import { BottomNav } from "../components/BottomNav";
import { theme } from "../theme/theme";
const BASE_API_URL = "https://api.wefood.dev/restaurants";

type MapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Map"
>;

interface MapScreenProps {
  navigation: MapScreenNavigationProp;
}

export const Map = ({ navigation }: MapScreenProps) => {
  const [restaurants, setRestaurants] = useState<Docs[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(BASE_API_URL);
        const data = await response.json();
        setRestaurants(data.docs);
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color={theme.colors.background} />
      </TouchableOpacity>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.7223,
          longitude: -9.1393,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {restaurants.map(
          (restaurant) =>
            restaurant.location?.coordinates && (
              <Marker
                key={restaurant._id}
                coordinate={{
                  latitude: restaurant.location.coordinates[1],
                  longitude: restaurant.location.coordinates[0],
                }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", {
                      item: restaurant,
                    })
                  }
                >
                  <TouchableOpacity>
                    <Text style={styles.calloutText}>{restaurant.name}</Text>
                  </TouchableOpacity>
                </Callout>
              </Marker>
            )
        )}
      </MapView>

      <BottomNav navigation={navigation} screen="Map" />
    </SafeAreaView>
  );
};
