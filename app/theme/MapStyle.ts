import { StyleSheet, Dimensions } from "react-native";
import { theme } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: theme.spacing.lg,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  calloutText: {
    color: theme.colors.text,
    fontSize: theme.typography.fontSize.regular,
    padding: theme.spacing.xs,
  },
  backButton: {
    position: "absolute",
    top: theme.spacing.xxl,
    left: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.circle,
    padding: theme.spacing.sm,
    zIndex: 1000,
  },
  bottomNav: {
    position: "absolute",
    bottom: theme.spacing.z,
    width: theme.layout.size100,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  navItem: {
    padding: theme.spacing.md,
  },
});
