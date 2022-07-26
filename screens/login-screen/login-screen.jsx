import React, { useState, useContext } from "react";
import AuthContent from "../../components/auth/auth-content/auth-content";
import { login } from "../../util/auth";
import LoadingOverlay from "../../components/ui/loading-overlay/loading-overlay";
import { Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const signInHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Authentication has failed!",
        "Could not log you in. Please, check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) return <LoadingOverlay />;

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
};

export default LoginScreen;
