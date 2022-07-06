import { GlobalStyles } from "../../constants/styles";
import IconButton from "../../components/ui/icons/icon-button";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BOTTOM_SCREEN from "../../util/stack-screens-bottom";

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
      {BOTTOM_SCREEN.map((screen) => (
        <BottomTabs.Screen
          key={screen.name}
          name={screen.name}
          options={screen.options}
          component={screen.component}
        />
      ))}
    </BottomTabs.Navigator>
  );
};

export default ExpensesOverview;
