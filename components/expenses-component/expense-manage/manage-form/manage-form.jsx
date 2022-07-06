import React, { useCallback, useState } from "react";
import { Text, View, Alert } from "react-native";
import { ManageFormStyled } from "./manage-form.styled";
import Input from "../../../ui/input/input";
import Button from "../../../ui/button/button";
import { getFormattedDate } from "../../../../util/date";

const ManageForm = ({
  configurationInput,
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValue,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true,
    },
  });

  const inputChangedHandler = useCallback(
    (name, value) => {
      setInputs((prevState) => {
        return { ...prevState, [name]: { value: value, isValid: true } };
      });
    },
    [inputs]
  );

  const submitHandler = useCallback(() => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prevState) => {
        return {
          amount: {
            value: prevState.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: prevState.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: prevState.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }, [inputs]);

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={ManageFormStyled.from}>
      <Text style={ManageFormStyled.title}>Your Expense</Text>
      <View style={ManageFormStyled.inputsRow}>
        {configurationInput
          .filter(({ textInputConfig }) => !textInputConfig.multiline)
          .map((input) => (
            <Input
              style={ManageFormStyled.rowInput}
              key={input.label}
              label={input.label}
              textInputConfig={input.textInputConfig}
              onChangeText={inputChangedHandler.bind(this, input.name)}
              value={inputs[`${input.name}`]?.value}
              invalid={!inputs[`${input.name}`]?.isValid}
            />
          ))}
      </View>
      {configurationInput
        .filter(({ textInputConfig }) => textInputConfig.multiline)
        .map((input) => (
          <Input
            key={input.label}
            label={input.label}
            textInputConfig={input.textInputConfig}
            onChangeText={inputChangedHandler.bind(this, input.name)}
            value={inputs[`${input.name}`]?.value}
            invalid={!inputs[`${input.name}`]?.isValid}
          />
        ))}
      {formIsInvalid && (
        <Text style={ManageFormStyled.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={ManageFormStyled.buttons}>
        <Button mode="flat" onPress={onCancel} style={ManageFormStyled.button}>
          Cancel
        </Button>
        <Button style={ManageFormStyled.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ManageForm;
