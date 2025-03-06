import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useFavorites } from "../context/FavoritesContext";
import MapView, { Marker, Callout } from "react-native-maps";
import { theme } from "../theme/theme";
import { styles } from "../theme/RestaurantDetailsStyle";

type RestaurantDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RestaurantDetails"
>;
type RestaurantDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantDetails"
>;

interface RestaurantDetailsProps {
  navigation: RestaurantDetailsScreenNavigationProp;
  route: RestaurantDetailsScreenRouteProp;
}

export const RestaurantDetails = ({
  navigation,
  route,
}: RestaurantDetailsProps) => {
  const { item } = route.params;
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const [additionalInfo, setAdditionalInfo] = useState<any[]>([]);

  const toggleFavorite = async () => {
    if (isFavorite(item._id)) {
      await removeFromFavorites(item._id);
    } else {
      await addToFavorites(item);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.wefood.dev/restaurants/${item._id}`
      );
      if (!response.ok) throw new Error("Erro ao buscar dados");

      const result = await response.json();

      setAdditionalInfo(
        result.additionalInfo && Array.isArray(result.additionalInfo)
          ? result.additionalInfo
          : []
      );
    } catch (err) {
      setAdditionalInfo([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color={theme.colors.background} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heartButton} onPress={toggleFavorite}>
            <Ionicons
              name={isFavorite(item._id) ? "heart" : "heart-outline"}
              size={24}
              color={isFavorite(item._id) ? theme.colors.primary : theme.colors.background}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={
              item && item.image && item.image.url
                ? { uri: item.image.url }
                : require("./../../assets/images/splash-icon.png")
            }
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.address}>{item.addressInfo.country} | {item.addressInfo.city}</Text>

          {/* Contact Section */}
          {(item?.contacts?.phoneNumber ||
            item?.contacts?.email ||
            item?.contacts?.cellphoneNumber) && (
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>Contact</Text>
              {item?.contacts?.phoneNumber && (
                <View style={styles.infoRow}>
                  <Ionicons
                    name="call-outline"
                    size={20}
                    color={theme.colors.primary}
                    style={styles.infoIcon}
                  />
                  <Text style={styles.infoText}>
                    {item.contacts.phoneNumber}
                  </Text>
                </View>
              )}
              {item?.contacts?.email && (
                <View style={styles.infoRow}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={theme.colors.primary}
                    style={styles.infoIcon}
                  />
                  <Text style={styles.infoText}>{item.contacts.email}</Text>
                </View>
              )}
              {item?.contacts?.cellphoneNumber && (
                <View style={styles.infoRow}>
                  <Ionicons
                    name="phone-portrait-outline"
                    size={20}
                    color={theme.colors.primary}
                    style={styles.infoIcon}
                  />
                  <Text style={styles.infoText}>
                    {item.contacts.cellphoneNumber}
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Location Section */}
          {item.addressInfo && (
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>Location</Text>
              <View style={styles.infoRow}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={theme.colors.primary}
                  style={styles.infoIcon}
                />
                <Text style={styles.infoText}>{item.addressInfo.address}</Text>
              </View>
            </View>
          )}
          {/* Map Section */}
          {item.location && item.location.coordinates && (
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: item.location.coordinates[1],
                  longitude: item.location.coordinates[0],
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: item.location.coordinates[1],
                    longitude: item.location.coordinates[0],
                  }}
                >
                  <Callout tooltip={true} style={styles.callout}>
                    <View style={styles.calloutContainer}>
                      <Text style={styles.calloutText}>{item.name}</Text>
                    </View>
                  </Callout>
                </Marker>
              </MapView>
            </View>
          )}

          {/* Cuisines Section */}
          {item.cuisines && item.cuisines.length > 0 && (
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>Cuisines</Text>
              <View style={styles.tagsContainer}>
                {item.cuisines.map((cuisine, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>
                      {cuisine.name?.en || "Unknown"}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Additional Info Section */}
          {additionalInfo.length > 0 && (
            <View style={styles.infoContainer}>
              <Text style={styles.sectionTitle}>Additional Info</Text>
              <View style={styles.tagsContainer}>
                {additionalInfo.map((info, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>
                      {info.name?.en || "Unknown"}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
