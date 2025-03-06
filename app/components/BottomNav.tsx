import { TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../theme/theme";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const BottomNav = ({ navigation, screen }: { navigation: any, screen: string }) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}
              onPress={() => navigation.navigate("Home")}
>
        <Ionicons name="home" size={24} color={screen === "Home" ? theme.colors.primary : theme.colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Map")}
      >
        <Ionicons name="map-outline" size={24} color={screen === "Map" ? theme.colors.primary : theme.colors.secondary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Favorites")}
      >
        <Ionicons name="heart" size={24} color={screen === "Favorites" ? theme.colors.primary : theme.colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: theme.borderRadius.large,
    borderTopRightRadius: theme.borderRadius.large,
  },
  navItem: {
    padding: theme.spacing.sm,
  },
});
