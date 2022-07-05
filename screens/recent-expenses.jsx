import React from "react";
import ExpensesOutput from "../components/expenses-component/expenses-output/expenses-output";

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
};

export default RecentExpenses;
