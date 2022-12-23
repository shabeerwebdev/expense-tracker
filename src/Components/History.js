import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function History() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  const list =
    transactions.length === 0 ? (
      <div>No Transactions yet</div>
    ) : (
      transactions.map((item) => {
        return (
          <div
            key={item.id}
            className={`d-flex justify-content-between flex-grow-1 bg-light border rounded px-3 p-2 gap-3 ${
              item.amount > 0 ? "border-success" : "border-danger"
            } `}
          >
            <div
              style={{ cursor: "pointer" }}
              className={`d-flex justify-content-between bg-light flex-grow-1 align-items-center }`}
            >
              <p className="mb-0">{item.text}</p>
              <p className="mb-0">{item.amount.toFixed(2)}</p>
            </div>
            <div onClick={() => deleteTransaction(item.id)}>
              <i
                style={{ cursor: "pointer" }}
                className="bi bi-trash3-fill text-danger cursor-pointer"
              ></i>
            </div>
          </div>
        );
      })
    );

  return (
    <div style={{ maxHeight: "15rem" }}>
      <h5 className="pb-3">Transactions History</h5>
      <div className="d-flex flex-column gap-3">{list}</div>
    </div>
  );
}

export default History;
