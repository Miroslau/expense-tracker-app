import React from "react";
import { View, ActivityIndicator } from "react-native";
import LoadingOverlayStyled from "./loading-overlay.styled";

const LoadingOverlay = () => {
  return (
    <View style={LoadingOverlayStyled.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;
