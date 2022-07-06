import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/manage-expense";
import RecentExpenses from "./screens/recent-expenses";
import AllExpenses from "./screens/all-expenses";
import { GlobalStyles } from "./constants/styles";

import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/ui/icons/icon-button";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  const navigateToManageExpense = (navigation) =>
    navigation.navigate("ManageExpense");

  const screenOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: GlobalStyles.colors.primary500,
    },
    headerTintColor: GlobalStyles.colors.white,
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary500,
    },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({ tintColor }) => (
      <IconButton
        icon="add"
        size={24}
        color={tintColor}
        onPress={navigateToManageExpense.bind(this, navigation)}
      />
    ),
  });

  return (
    <BottomTabs.Navigator screenOptions={screenOptions}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="hourglass" />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="calendar" />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
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
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
