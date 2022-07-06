import React, { useContext } from "react";
import ExpensesOutput from "../../components/expenses-component/expenses-output/expenses-output";
import { ExpensesContext } from "../../store/expenses-context";
import expensesText from "./constants/expenses-text";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod={expensesText.expensesPeriod}
      fallBackText={expensesText.fallBackText}
    />
  );
};

export default AllExpenses;
