import React, { useContext } from "react";
import ExpensesOutput from "../components/expenses-component/expenses-output/expenses-output";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const nowDay = new Date();
    const dateSevenDaysAgo = getDateMinusDays(nowDay, 7);

    return expense.date >= dateSevenDaysAgo && expense.date <= nowDay;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};

export default RecentExpenses;
