import React, { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../../components/ui/icons/icon-button";
import { GlobalStyles } from "../../constants/styles";
import { ExpensesContext } from "../../store/expenses-context";
import { ManageExpenseStyled } from "./manage-expense.styled";
import ManageForm from "../../components/expenses-component/expense-manage/manage-form/manage-form";
import configurationInput from "./configuration/configurationInput";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    ({ id }) => id === editedExpenseId
  );

  const deleteExpense = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => navigation.goBack();

  const confirmHandler = (expense) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expense);
    } else {
      expensesCtx.addExpense(expense);
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
      <ManageForm
        configurationInput={configurationInput}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValue={selectedExpense}
      />
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
