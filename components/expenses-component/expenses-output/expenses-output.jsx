import React from "react";
import { View, Text } from "react-native";
import ExpensesSummary from "../expenses-summary/expenses-summary";
import ExpensesList from "../expenses-list/expenses-list";
import { ExpensesOutputStyled } from "./expenses-output.styled";

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {
  return (
    <View style={ExpensesOutputStyled.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={ExpensesOutputStyled.infoText}>{fallBackText}</Text>
      )}
    </View>
  );
};

export default ExpensesOutput;
