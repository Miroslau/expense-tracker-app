import React from "react";
import { FlatList, Text } from "react-native";
import ExpenseItem from "../expense-item/expense-item";

const renderExpenseItem = ({ item }) => {
  return <ExpenseItem {...item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={({ id }) => id}
    />
  );
};

export default ExpensesList;
