import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "expense",
  initialState: {
    balance: 0,
    transactionHistory: [],
    income: 0,
    expense: 0,
  },
  reducers: {
    addTransaction: (state, action) => {
      const { amount } = action.payload;
      state.balance += parseInt(amount);
      if (parseInt(amount) < 0) {
        state.expense += Math.abs(amount);
        console.log(state.expense, "Expense");
      } else {
        state.income += Math.abs(amount);
        console.log(state.income, "Income");
      }
      state.transactionHistory.unshift(action.payload);
    },
    removeTransaction: (state, action) => {
      console.log(action.payload.itemNumber, "number");

      const arr = state.transactionHistory.filter(
        (val, index) => index !== action.payload.itemNumber
      );
      state.transactionHistory = arr;
    },
  },
});
export const { addTransaction, removeTransaction } = slice.actions;
export default slice.reducer;
