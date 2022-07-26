import React, { useContext, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import IconButton from "../../components/ui/icons/icon-button";
import { GlobalStyles } from "../../constants/styles";
import { ExpensesContext } from "../../store/expenses-context";
import { ManageExpenseStyled } from "./manage-expense.styled";
import ManageForm from "../../components/expenses-component/expense-manage/manage-form/manage-form";
import configurationInput from "./configuration/configurationInput";
import { deleteExpense, storeExpense, updateExpense } from "../../util/http";
import LoadingOverlay from "../../components/ui/loading-overlay/loading-overlay";
import ErrorOverlay from "../../components/ui/error-overlay/error-overlay";
import { AuthContext } from "../../store/auth-context";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const expensesCtx = useContext(ExpensesContext);
  const authCtx = useContext(AuthContext);

  const { token } = authCtx;

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    ({ id }) => id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId, token);
      expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (error) {
      setError("could not delete expense - please try again later!");
      setIsSubmitting(false);
    }
  };

  const cancelHandler = () => navigation.goBack();

  const confirmHandler = async (expense) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expense);
        await updateExpense(editedExpenseId, expense, token);
      } else {
        const id = await storeExpense(expense, token);
        expensesCtx.addExpense({ ...expense, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("could not save expense - please try again later!");
      setIsSubmitting(false);
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

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
