import { TouchableOpacity } from "react-native";
import { styles } from "../theme/HomeStyle";
import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text } from "react-native";
import { theme } from "../theme/theme";
export const RestaurantCard = ({
  item,
  navigation,
  toggleFavorite,
  isFavorite,
}: {
  item: any;
  navigation: any;
  toggleFavorite: any;
  isFavorite: any;
}) => {
  return (
    <TouchableOpacity
      key={item._id}
      onPress={() => navigation.navigate("RestaurantDetails", { item })}
      style={styles.card}
    >
      <TouchableOpacity
        style={styles.heartButton}
        onPress={() => toggleFavorite(item)}
      >
        <Ionicons
          name={isFavorite(item._id) ? "heart" : "heart-outline"}
          size={24}
          color={
            isFavorite(item._id)
              ? theme.colors.primary
              : theme.colors.background
          }
        />
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
  );
};
