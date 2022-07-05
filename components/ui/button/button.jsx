import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

const Button = ({ children, onPress, mode, style }) => {
  const pressedItem = ({ pressed }) => pressed && styles.pressed;

  return (
    <View style={style}>
      <Pressable onPress={onPress} style={pressedItem}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
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
