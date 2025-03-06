import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "../context/FavoritesContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Docs } from "../types/restaurant";
import { styles } from "../theme/FavoritesStyle";
import { BottomNav } from "../components/BottomNav";

type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: { item: Docs };
  Favorites: undefined;
  Map: undefined;
};

type FavoritesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Favorites"
>;

interface FavoritesProps {
  navigation: FavoritesScreenNavigationProp;
}

export const Favorites = ({ navigation }: FavoritesProps) => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Favoritos</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.restaurantsGrid}>
          {favorites.map((item) => (
            <TouchableOpacity
              key={item._id}
              onPress={() => navigation.navigate("RestaurantDetails", { item })}
              style={styles.restaurantCard}
            >
              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => removeFromFavorites(item._id)}
              >
                <Ionicons name="heart" size={24} color="#FF6B6B" />
              </TouchableOpacity>

              <Image
        source={
          item.image && item.image.url
            ? { uri: item.image.url }
            : require("./../../assets/images/splash-icon.png")
        }
        style={styles.image}
      />

              <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.stat}>
          <Ionicons name="map-outline" size={16} color="#FF6B6B" />
          <Text style={styles.statText}>{item.addressInfo.country}</Text>
        </View>
        <View style={styles.stat}>
          <Ionicons name="time-outline" size={16} color="#FF6B6B" />
          <Text style={styles.statText}>{item.timezone}</Text>
        </View>
        <Text style={styles.number}>{item.contacts.phoneNumber}</Text>
      </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomNav navigation={navigation} screen="Favorites" />
    </SafeAreaView>
  );
};
