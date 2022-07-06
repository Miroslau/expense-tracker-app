import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

export const ButtonStyled = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: GlobalStyles.colors.transparent,
  },
  buttonText: {
    color: GlobalStyles.colors.white,
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
