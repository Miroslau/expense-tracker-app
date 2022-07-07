import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../../components/expenses-component/expenses-output/expenses-output";
import { ExpensesContext } from "../../store/expenses-context";
import { getDateMinusDays } from "../../util/date";
import expensesText from "./constants/expenses-text";
import { fetchExpenses } from "../../util/http";
import LoadingOverlay from "../../components/ui/loading-overlay/loading-overlay";
import ErrorOverlay from "../../components/ui/error-overlay/error-overlay";

const RecentExpenses = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const expensesCtx = useContext(ExpensesContext);

  const getExpenses = async () => {
    setLoading(true);
    try {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    } catch (error) {
      setError("Could not fetch expenses!");
    }
    setLoading(false);
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const nowDay = new Date();
    const dateSevenDaysAgo = getDateMinusDays(nowDay, 7);

    return expense.date >= dateSevenDaysAgo && expense.date <= nowDay;
  });

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />;
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={expensesText.expensesPeriod}
      fallBackText={expensesText.fallBackText}
    />
  );
};

export default RecentExpenses;
