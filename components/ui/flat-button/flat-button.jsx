import React from "react";
import { Pressable, Text, View } from "react-native";
import FlatButtonStyled from "./flat-button.styled";

const FlatButton = ({ children, onPress }) => {
  const pressedItem = ({ pressed }) => [
    FlatButtonStyled.button,
    pressed && FlatButtonStyled.pressed,
  ];

  return (
    <Pressable onPress={onPress} style={pressedItem}>
      <View>
        <Text style={FlatButtonStyled.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default FlatButton;
