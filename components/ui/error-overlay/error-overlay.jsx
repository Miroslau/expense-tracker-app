import React from "react";
import { Text, View } from "react-native";
import ErrorOverlayStyled from "./error-overlay.styled";

const ErrorOverlay = ({ message }) => {
  return (
    <View style={ErrorOverlayStyled.container}>
      <Text style={[ErrorOverlayStyled.text, ErrorOverlayStyled.title]}>
        An error occurred!
      </Text>
      <Text style={ErrorOverlayStyled.text}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;
