import React from "react";
import { Pressable, View, Text } from "react-native";
import { getFormattedDate } from "../../../util/date";
import { useNavigation } from "@react-navigation/native";
import { ExpenseItemStyled } from "./expense-item.styled";

const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const expensePressHandler = () =>
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });

  const onPressed = ({ pressed }) => pressed && ExpenseItemStyled.pressed;

  return (
    <Pressable onPress={expensePressHandler} style={onPressed}>
      <View style={ExpenseItemStyled.expenseItem}>
        <View>
          <Text
            style={[ExpenseItemStyled.textBase, ExpenseItemStyled.description]}
          >
            {description}
          </Text>
          <Text style={ExpenseItemStyled.textBase}>
            {getFormattedDate(date)}
          </Text>
        </View>
        <View style={ExpenseItemStyled.amountContainer}>
          <Text style={ExpenseItemStyled.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
