import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function NewTransaction() {
  const [transaction, setTransaction] = useState({
    text: "",
    amount: "",
  });

  const { addTransaction } = useContext(GlobalContext);

  const onChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const latestTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: transaction.text,
      amount: +transaction.amount,
    };

    addTransaction(latestTransaction);

    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];

    storedTransactions.push(latestTransaction);

    localStorage.setItem("transactions", JSON.stringify(storedTransactions));

    transaction.text = "";
    transaction.amount = "";
  };

  return (
    <div>
      <h5>Add new transaction</h5>
      <form className="d-flex flex-column gap-2" onSubmit={onSubmit}>
        <div className="form-floating ">
          <input
            value={transaction.text}
            onChange={onChange}
            type="text"
            className="form-control "
            id="floatingInput"
            placeholder="Text"
            name="text"
            minLength="5"
            maxLength="20"
            required
          />
          <label htmlFor="floatingInput">Enter Text</label>
        </div>
        <div className="form-floating">
          <input
            value={transaction.amount}
            onChange={onChange}
            type="number"
            className="form-control "
            id="floatingNumber"
            placeholder="Amount"
            name="amount"
            required
          />
          <label htmlFor="floatingNumber">Amount</label>
        </div>
        <button className="btn btn-primary">Add Transaction</button>
      </form>
    </div>
  );
}

export default NewTransaction;
