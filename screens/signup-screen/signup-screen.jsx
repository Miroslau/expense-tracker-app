import React, { useContext, useState } from "react";
import AuthContent from "../../components/auth/auth-content/auth-content";
import { createUser } from "../../util/auth";
import LoadingOverlay from "../../components/ui/loading-overlay/loading-overlay";
import { Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Authentication has failed!",
        "Could not create user. Please, check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) return <LoadingOverlay />;

  return <AuthContent onAuthenticate={signUpHandler} />;
};

export default SignupScreen;
