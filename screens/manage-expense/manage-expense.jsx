import React, { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../../components/ui/icons/icon-button";
import { GlobalStyles } from "../../constants/styles";
import { ExpensesContext } from "../../store/expenses-context";
import { ManageExpenseStyled } from "./manage-expense.styled";
import ManageForm from "../../components/expenses-component/expense-manage/manage-form/manage-form";
import configurationInput from "./configuration/configurationInput";
import { deleteExpense, storeExpense, updateExpense } from "../../util/http";

const ManageExpense = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    ({ id }) => id === editedExpenseId
  );

  const deleteExpenseHandler = async () => {
    await deleteExpense(editedExpenseId);
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => navigation.goBack();

  const confirmHandler = async (expense) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expense);
      await updateExpense(editedExpenseId, expense);
    } else {
      const id = await storeExpense(expense);
      expensesCtx.addExpense({ ...expense, id: id });
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
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;
