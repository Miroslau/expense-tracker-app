import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AUTH_STACK_SCREEN from "../../util/auth-stack-screens";
import { GlobalStyles } from "../../constants/styles";

const Stack = createNativeStackNavigator();

const Home = () => {
  const screenOptions = () => ({
    contentStyle: {
      backgroundColor: GlobalStyles.colors.primary700,
    },
  });

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {AUTH_STACK_SCREEN.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={screen.options}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Home;
