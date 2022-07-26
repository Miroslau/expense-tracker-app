import axios from "axios";
import { BACKEND_URL } from "@env";

export const storeExpense = async (expenseData, token) => {
  const { data } = await axios.post(
    `${BACKEND_URL}/expenses.json?auth=${token}`,
    expenseData
  );
  const id = data.name;
  return id;
};

export const fetchExpenses = async (token) => {
  const { data } = await axios.get(
    `${BACKEND_URL}/expenses.json?auth=${token}`
  );

  const expenses = [];

  for (const key in data) {
    const expenseObj = {
      id: key,
      amount: data[key].amount,
      date: new Date(data[key].date),
      description: data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpense = (id, expenseData, token) => {
  return axios.put(
    `${BACKEND_URL}/expenses/${id}.json?auth=${token}`,
    expenseData
  );
};

export const deleteExpense = (id, token) => {
  return axios.delete(`${BACKEND_URL}/expenses/${id}.json?auth=${token}`);
};
