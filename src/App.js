import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Components/Header";
import History from "./Components/History";
import YourBalance from "./Components/YourBalance";
import NewTransaction from "./Components/NewTransaction";
import IncomeExpense from "./Components/IncomeExpense";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div
        style={{ maxWidth: "fit-content" }}
        className="d-flex flex-column mx-auto px-3 mt-3 gap-4"
      >
        <Header />
        <YourBalance />
        <IncomeExpense />
        <NewTransaction />
        <History />
      </div>
    </GlobalProvider>
  );
}

export default App;
