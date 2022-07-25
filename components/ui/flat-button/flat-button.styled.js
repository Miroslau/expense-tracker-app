import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
const FlatButtonStyled = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: GlobalStyles.colors.primary900,
  },
});

export default FlatButtonStyled;
