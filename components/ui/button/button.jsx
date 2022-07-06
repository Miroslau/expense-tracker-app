import React from "react";
import { Pressable, View, Text } from "react-native";
import { ButtonStyled } from "./button.styled";

const Button = ({ children, onPress, mode, style }) => {
  const pressedItem = ({ pressed }) => pressed && ButtonStyled.pressed;

  return (
    <View style={style}>
      <Pressable onPress={onPress} style={pressedItem}>
        <View
          style={[ButtonStyled.button, mode === "flat" && ButtonStyled.flat]}
        >
          <Text
            style={[
              ButtonStyled.buttonText,
              mode === "flat" && ButtonStyled.flatText,
            ]}
          >
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
