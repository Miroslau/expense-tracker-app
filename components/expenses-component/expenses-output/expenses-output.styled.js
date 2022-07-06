import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

export const ExpensesOutputStyled = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: GlobalStyles.colors.white,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
