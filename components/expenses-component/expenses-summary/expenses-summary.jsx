import React from "react";
import { Text, View } from "react-native";
import { ExpensesSummaryStyled } from "./expenses-summary.styled";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={ExpensesSummaryStyled.container}>
      <Text style={ExpensesSummaryStyled.period}>{periodName}</Text>
      <Text style={ExpensesSummaryStyled.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
