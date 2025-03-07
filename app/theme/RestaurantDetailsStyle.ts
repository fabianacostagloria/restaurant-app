import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: theme.layout.containerPadding,
      position: "absolute", 
      top: theme.spacing.md,
      left: theme.spacing.z,
      right: theme.spacing.z,
      zIndex: 2,
    },
    backButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.circle,
      padding: theme.spacing.sm,
      shadowColor: theme.colors.border,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    heartButton: {
      backgroundColor: theme.colors.secondary,
      borderRadius: theme.borderRadius.circle,
      padding: theme.spacing.sm,
      shadowColor: theme.colors.border,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    imageContainer: {
      height: theme.layout.imageHeight.large,
      width: theme.layout.size100,
      borderBottomLeftRadius: theme.spacing.md,
      borderBottomRightRadius: theme.spacing.md,
      overflow: "hidden",
    },
    image: {
      width: theme.layout.size100,
      height: theme.layout.size100,
    },
    detailsContainer: {
      paddingHorizontal: theme.layout.containerPadding,
      paddingTop: theme.spacing.lg,
    },
    title: {
      fontSize: theme.typography.fontSize.xxlarge,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.sm,
    },
    address: {
      fontSize: theme.typography.fontSize.medium,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.md,
    },
    sectionTitle: {
      fontSize: theme.typography.fontSize.large,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      borderBottomWidth: 2,
      borderBottomColor: theme.colors.primary,
      paddingBottom: theme.spacing.xs,
      marginBottom: theme.spacing.sm,
    },
    infoContainer: {
      marginTop: theme.spacing.md,
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.medium,
      shadowColor: theme.colors.border,
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    infoRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: theme.spacing.sm,
    },
    infoIcon: {
      marginRight: theme.spacing.sm,
    },
    infoText: {
      fontSize: theme.typography.fontSize.medium,
      color: theme.colors.textSecondary,
    },
    tagsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: theme.spacing.sm,
    },
    tag: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.medium,
      paddingVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.md,
      marginRight: theme.spacing.xs,
      marginBottom: theme.spacing.xs,
    },
    tagText: {
      color: theme.colors.background,
      fontSize: theme.typography.fontSize.small,
      fontWeight: theme.typography.fontWeight.bold,
    },
    mapContainer: {
      height: theme.layout.imageHeight.medium,
      margin: theme.spacing.md,
      borderRadius: theme.spacing.md,
      overflow: "hidden",
      shadowColor: theme.colors.border,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    map: {
      width: theme.layout.size100,
      height: theme.layout.size100,
    },
    callout: {
      backgroundColor: "transparent",
      borderRadius: theme.spacing.md,
    },
    calloutContainer: {
      backgroundColor: theme.colors.background,
      padding: theme.spacing.sm,
      borderRadius: theme.spacing.md,
      shadowColor: theme.colors.border,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    calloutText: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.medium,
    },
  });
  