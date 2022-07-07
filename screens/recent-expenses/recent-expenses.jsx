import React, { useContext, useEffect } from "react";
import ExpensesOutput from "../../components/expenses-component/expenses-output/expenses-output";
import { ExpensesContext } from "../../store/expenses-context";
import { getDateMinusDays } from "../../util/date";
import expensesText from "./constants/expenses-text";
import { fetchExpenses } from "../../util/http";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    };
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const nowDay = new Date();
    const dateSevenDaysAgo = getDateMinusDays(nowDay, 7);

    return expense.date >= dateSevenDaysAgo && expense.date <= nowDay;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={expensesText.expensesPeriod}
      fallBackText={expensesText.fallBackText}
    />
  );
};

export default RecentExpenses;
