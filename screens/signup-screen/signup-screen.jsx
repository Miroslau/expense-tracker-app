import React, { useState } from "react";
import AuthContent from "../../components/auth/auth-content/auth-content";
import { createUser } from "../../util/auth";
import LoadingOverlay from "../../components/ui/loading-overlay/loading-overlay";
import { Alert } from "react-native";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication has failed!",
        "Could not create user. Please, check your credentials or try again later!"
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) return <LoadingOverlay />;

  return <AuthContent onAuthenticate={signUpHandler} />;
};

export default SignupScreen;
