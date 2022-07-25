import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import AuthFormStyled from "./auth-form.styled";
import Button from "../../ui/button/button";
import authConfiguration from "../../../util/configurations/auth-configuration";
import Input from "../../ui/input/input";
import { useIsFocused } from "@react-navigation/native";

const AuthForm = ({ isLogin, onSubmit, credentialsInvalid }) => {
  const isFocused = useIsFocused();

  const [authData, setAuth] = useState({
    enteredEmail: "",
    enteredConfirmEmail: "",
    enteredPassword: "",
    enteredConfirmPassword: "",
  });

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const inputInvalid = {
    emailIsInvalid,
    emailsDontMatch,
    passwordIsInvalid,
    passwordsDontMatch,
  };

  useEffect(() => {
    setAuth({
      enteredEmail: "",
      enteredConfirmEmail: "",
      enteredPassword: "",
      enteredConfirmPassword: "",
    });
  }, [isFocused]);

  const inputChangedHandler = useCallback(
    (name, value) => {
      setAuth((prevState) => {
        return { ...prevState, [name]: value };
      });
    },
    [authData]
  );

  const submitHandler = () => {
    onSubmit({
      email: authData.enteredEmail,
      confirmEmail: authData.enteredConfirmEmail,
      password: authData.enteredPassword,
      confirmPassword: authData.enteredConfirmPassword,
    });
  };

  return (
    <View>
      <View>
        {authConfiguration
          .filter((input) => (isLogin ? input.isLogin : input.isRegister))
          .map((input) => (
            <Input
              key={input.name}
              label={input.label}
              invalid={inputInvalid[`${input.isInvalid}`]}
              textInputConfig={input.textInputConfig}
              value={authData[`${input.value}`]}
              onChangeText={inputChangedHandler.bind(this, input.value)}
            />
          ))}
      </View>
      <View style={AuthFormStyled.buttons}>
        <Button onPress={submitHandler}>
          {isLogin ? "Log In" : "Sign Up"}
        </Button>
      </View>
    </View>
  );
};

export default AuthForm;
