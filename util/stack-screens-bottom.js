import RecentExpenses from "../screens/recent-expenses/recent-expenses";
import { Ionicons } from "@expo/vector-icons";
import AllExpenses from "../screens/all-expenses/all-expenses";
import WelcomeScreen from "../screens/welcome-screen/welcome-screen";

const BOTTOM_SCREEN = [
  {
    component: RecentExpenses,
    name: "RecentExpenses",
    options: {
      title: "Recent Expenses",
      tabBarLabel: "Recent",
      tabBarIcon: ({ color, size }) => (
        <Ionicons size={size} color={color} name="hourglass" />
      ),
    },
  },
  {
    component: AllExpenses,
    name: "AllExpenses",
    options: {
      title: "All Expenses",
      tabBarLabel: "All Expenses",
      tabBarIcon: ({ color, size }) => (
        <Ionicons size={size} color={color} name="calendar" />
      ),
    },
  },
  {
    component: WelcomeScreen,
    name: "WelcomeScreen",
    options: {
      title: "Home",
      tabBarLabel: "Home",
      tabBarIcon: ({ color, size }) => (
        <Ionicons size={size} color={color} name="home" />
      ),
    },
  },
];

export default BOTTOM_SCREEN;
