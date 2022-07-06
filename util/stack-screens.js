import ExpensesOverview from "../screens/expenses-overview/expenses-overview";
import ManageExpense from "../screens/manage-expense/manage-expense";

const MAIN_SCREEN = [
  {
    component: ExpensesOverview,
    name: "ExpensesOverview",
    options: {
      headerShown: false,
    },
  },
  {
    component: ManageExpense,
    name: "ManageExpense",
    options: {
      presentation: "modal",
    },
  },
];

export default MAIN_SCREEN;
