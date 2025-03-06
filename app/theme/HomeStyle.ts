import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
    offlineText: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.regular,
      textAlign: "center",
      marginTop: theme.spacing.md,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: theme.spacing.lg,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
    categoriesSection: {
      marginBottom: theme.spacing.md,
    },
    sectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.sm,
    },
    sectionTitle: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.regular,
      fontWeight: theme.typography.fontWeight.bold,
    },
    categoryItem: {
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.medium,
      marginLeft: theme.spacing.md,
      flexDirection: "row",
      alignItems: "center",
    },
    categoryIcon: {
      fontSize: theme.typography.fontSize.large,
      marginRight: theme.spacing.sm,
    },
    categoryName: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.small,
    },
    restaurantSection: {
      flex: 1,
    },
    grid: {
      paddingHorizontal: theme.spacing.md,
    },
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.large,
      marginBottom: theme.spacing.md,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: theme.colors.secondary,
      ...theme.shadows.medium,
    },
    image: {
      width: "100%",
      height: theme.layout.imageHeight.medium,
      resizeMode: "cover",
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
    stat: {
      flexDirection: "row",
      marginRight: theme.spacing.md,
      marginBottom: theme.spacing.sm,
    },
    statText: {
      color: theme.colors.secondary,
      marginLeft: theme.spacing.sm,
      fontSize: theme.typography.fontSize.small,
    },
    number: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSize.regular,
      fontWeight: theme.typography.fontWeight.bold,
    },
    heartButton: {
      padding: theme.spacing.sm,
      position: "absolute",
      top: theme.spacing.sm,
      right: theme.spacing.sm,
      zIndex: 3,
      backgroundColor: "#666666",
      borderRadius: theme.borderRadius.circle,
    },
  });