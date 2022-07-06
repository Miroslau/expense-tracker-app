import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpensesSummary from "../expenses-summary/expenses-summary";
import ExpensesList from "../expenses-list/expenses-list";
import { GlobalStyles } from "../../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod, fallBackText }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.infoText}>{fallBackText}</Text>
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: GlobalStyles.colors.white,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
