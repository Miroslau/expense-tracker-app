import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

const LoadingOverlayStyled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

export default LoadingOverlayStyled;
