import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: theme.spacing.md,
    },
    header: {
      padding: theme.spacing.md,
    },
    title: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.large,
      fontWeight: theme.typography.fontWeight.bold,
      textAlign: "center",
    },
    restaurantsGrid: {
      padding: theme.spacing.md,
    },
    restaurantCard: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.large,
      marginBottom: theme.spacing.md,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: theme.colors.secondary,
      ...theme.shadows.medium,
    },
    restaurantImage: {
      width: theme.layout.size100,
      height: theme.layout.imageHeight.medium,
      resizeMode: "cover",
    },
    restaurantInfo: {
      padding: theme.spacing.md,
    },
    restaurantName: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.regular,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: theme.spacing.sm,
    },
    stat: {
      flexDirection: "row",
      marginRight: theme.spacing.md,
      alignItems: "center",
      marginBottom: theme.spacing.sm,
    },
    statText: {
      color: theme.colors.text,
      marginLeft: theme.spacing.sm,
      fontSize: theme.typography.fontSize.small,
    },
    phoneNumber: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSize.regular,
      fontWeight: theme.typography.fontWeight.bold,
    },
    heartButton: {
      position: "absolute",
      top: theme.spacing.sm,
      right: theme.spacing.sm,
      zIndex: 1,
      padding: theme.spacing.sm,
      backgroundColor: "#666666",
      borderRadius: theme.borderRadius.circle,
    },
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
    backButton: {
      position: "absolute",
      top: theme.spacing.z,
      left: theme.spacing.md,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.circle,
      padding: theme.spacing.sm,
    },
    info: {
      padding: theme.spacing.md,
    },
    name: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.large,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: theme.spacing.sm,
    },
    number: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSize.regular,
      fontWeight: theme.typography.fontWeight.bold,
    },
    image: {
      width: theme.layout.size100,
      height: theme.layout.imageHeight.medium,
      resizeMode: "cover",
    },
  });
  