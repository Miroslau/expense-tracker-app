import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import IconButton from "../../components/ui/icons/icon-button";
import { AuthContext } from "../../store/auth-context";
import axios from "axios";

const WelcomeScreen = () => {
  const authCtx = useContext(AuthContext);
  const [fetchedMessage, setFetchedMessage] = useState("");

  const { token } = authCtx;

  useEffect(() => {
    axios
      .get(
        "https://expense-tracker-40047-default-rtdb.firebaseio.com/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View>
      <IconButton icon="exit" size={24} onPress={authCtx.logout} />
      <Text>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
};

export default WelcomeScreen;
