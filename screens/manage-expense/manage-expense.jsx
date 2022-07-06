import React, { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../../components/ui/icons/icon-button";
import { GlobalStyles } from "../../constants/styles";
import Button from "../../components/ui/button/button";
import { ExpensesContext } from "../../store/expenses-context";
import { ManageExpenseStyled } from "./manage-expense.styled";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const deleteExpense = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => navigation.goBack();

  const confirmHandler = () => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Test",
        amount: 19.99,
        date: new Date("2022-05-19"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2022-05-19"),
      });
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={ManageExpenseStyled.container}>
      <View style={ManageExpenseStyled.buttons}>
        <Button
          mode="flat"
          onPress={cancelHandler}
          style={ManageExpenseStyled.button}
        >
          Cancel
        </Button>
        <Button style={ManageExpenseStyled.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={ManageExpenseStyled.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;
