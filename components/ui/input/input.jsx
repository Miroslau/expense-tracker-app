import React from "react";
import { Text, TextInput, View } from "react-native";
import { InputStyled } from "./input.styled";

const Input = ({
  label,
  style,
  textInputConfig,
  onChangeText,
  value,
  invalid,
}) => {
  const inputStyles = [InputStyled.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(InputStyled.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(InputStyled.invalidInput);
  }

  return (
    <View style={[InputStyled.inputContainer, style]}>
      <Text style={[InputStyled.label, invalid && InputStyled.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        {...textInputConfig}
        style={inputStyles}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
