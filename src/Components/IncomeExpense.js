import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const onlyAmount = transactions.map((item) => item.amount);

  const income = onlyAmount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    onlyAmount
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="d-flex flex-row card shadow-sm py-1 ">
      <div className="card-body px-5">
        <h5 className="card-title">Income</h5>
        <p className="card-text text-success">₹{income.toFixed(2)}</p>
      </div>

      <div className="vr"></div>

      <div className="card-body px-5">
        <h5 className="card-title">Expense</h5>
        <p className="card-text text-danger">₹{expense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
