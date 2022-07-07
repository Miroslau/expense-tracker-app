import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

const ErrorOverlayStyled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: GlobalStyles.colors.white,
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ErrorOverlayStyled;
