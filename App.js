import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalStyles } from "./constants/styles";

import ExpensesContextProvider from "./store/expenses-context";
import MAIN_SCREEN from "./util/stack-screens";
import AuthContextProvider from "./store/auth-context";
import LoginScreen from "./screens/login-screen/login-screen";
import SignupScreen from "./screens/signup-screen/signup-screen";
import { useContext } from "react";
import { AuthContext } from "./store/auth-context";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary1100,
        },
        headerTintColor: GlobalStyles.colors.white,
        contentStyle: {
          backgroundColor: GlobalStyles.colors.primary900,
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
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
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && (
        <ExpensesContextProvider>
          <AuthenticatedStack />
        </ExpensesContextProvider>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
        {/*<NavigationContainer>*/}
        {/*  <Stack.Navigator*/}
        {/*    screenOptions={{*/}
        {/*      headerStyle: {*/}
        {/*        backgroundColor: GlobalStyles.colors.primary500,*/}
        {/*      },*/}
        {/*      headerTintColor: GlobalStyles.colors.white,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {MAIN_SCREEN.map((screen) => (*/}
        {/*      <Stack.Screen*/}
        {/*        key={screen.name}*/}
        {/*        name={screen.name}*/}
        {/*        options={screen.options}*/}
        {/*        component={screen.component}*/}
        {/*      />*/}
        {/*    ))}*/}
        {/*  </Stack.Navigator>*/}
        {/*</NavigationContainer>*/}
      </AuthContextProvider>
    </>
  );
}
