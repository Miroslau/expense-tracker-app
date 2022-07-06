import React, { useContext } from "react";
import ExpensesOutput from "../../components/expenses-component/expenses-output/expenses-output";
import { ExpensesContext } from "../../store/expenses-context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallBackText="No expenses found!"
    />
  );
};

export default AllExpenses;
