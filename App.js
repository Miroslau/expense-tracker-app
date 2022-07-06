import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "./constants/styles";

import ExpensesContextProvider from "./store/expenses-context";
import MAIN_SCREEN from "./util/stack-screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: GlobalStyles.colors.white,
            }}
          >
            {MAIN_SCREEN.map((screen) => (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                options={screen.options}
                component={screen.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
