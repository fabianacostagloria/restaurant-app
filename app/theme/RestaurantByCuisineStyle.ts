import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: theme.spacing.md,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
    backButton: {
      marginRight: theme.spacing.md,
    },
    title: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.large,
      fontWeight: 'bold',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    restaurantsGrid: {
      padding: theme.spacing.md,
    },
    restaurantCard: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.spacing.md,
      marginBottom: theme.spacing.md,
      overflow: 'hidden',
    },
    restaurantImage: {
      width: theme.layout.size100,
      height: theme.layout.imageHeight.large,
      resizeMode: 'cover',
    },
    heartButton: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.spacing.xs,
      zIndex: 1,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.spacing.md,
      padding: theme.spacing.xs,
    },
    restaurantInfo: {
      padding: theme.spacing.md,
    },
    restaurantName: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.large,
      fontWeight: theme.typography.fontWeight.bold,
      marginBottom: theme.spacing.xs,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    infoText: {
      color: theme.colors.text,
      marginLeft: theme.spacing.xs,
      fontSize: theme.typography.fontSize.regular,
    },
  }); 