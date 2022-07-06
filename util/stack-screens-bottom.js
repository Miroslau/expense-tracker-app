import RecentExpenses from "../screens/recent-expenses/recent-expenses";
import { Ionicons } from "@expo/vector-icons";
import AllExpenses from "../screens/all-expenses/all-expenses";

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
];

export default BOTTOM_SCREEN;
