import React from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconButtonStyled } from "./icon-button.styled";

const IconButton = ({ icon, color, size, onPress }) => {
  const pressedItem = ({ pressed }) => pressed && IconButtonStyled.pressed;

  return (
    <Pressable onPress={onPress} style={pressedItem}>
      <View style={IconButtonStyled.buttonContainer}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default IconButton;
