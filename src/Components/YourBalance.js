import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function YourBalance() {
  const { transactions } = useContext(GlobalContext);

  const allTransactions = transactions.map((item) => item.amount);

  const balance = allTransactions.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h5>Your Balance : ₹{balance.toFixed(2)}</h5>
    </div>
  );
}

export default YourBalance;
