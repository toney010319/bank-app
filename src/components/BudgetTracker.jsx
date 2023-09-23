import { useState } from "react";
import AddExpense from "./Addexpense";
import "./BudgetTracker.css";
const BudgetTracker = (props) => {
  const { user, setSwitchPage, setUser } = props;

  const onRemove = (deleteBudgetTracker) => {
    const newBudgetTracker = user.budgetTracker.filter(
      (budgetTracker) => budgetTracker !== deleteBudgetTracker
    );
    let newAccountDetails = {};
    const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
    const updatedAccounts = storedAccounts.map((account) => {
      if (account.email === user.email) {
        account.budgetTracker = newBudgetTracker;
        newAccountDetails = {
          ...account,
          budgetTracker: [...(account.budgetTracker || [])],
        };
      }

      return account;
    });
    localStorage.setItem("Accounts", JSON.stringify(updatedAccounts));
    setUser(newAccountDetails);
  };

  let totalCost = 0;
  const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
  const updatedAccounts = storedAccounts.map((account) => {
    if (account.email === user.email) {
      let listofCost = user.budgetTracker.map((a) => a.cost);
      console.log(listofCost);
      listofCost.forEach((num) => {
        totalCost += parseFloat(num);
        console.log(totalCost);
      });
    }
  });
  const remainingBalance = user.balance - totalCost;
  const onEdit = () => {
    console.log("edit");
  };
  const listOfExpenses =
    user.budgetTracker &&
    user.budgetTracker.map((budgetTracker, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid",
          margin: "2px",
        }}
      >
        <p style={{ width: "180.417px" }}>{budgetTracker.name}</p>
        <p>${budgetTracker.cost}</p>
        <div>
          <button onClick={() => onRemove(budgetTracker)}>X</button>
          <button onClick={onEdit}>E</button>
        </div>
      </div>
    ));
  const onAddExpense = () => {
    setSwitchPage("AddExpense");
  };

  return (
    <>
      <h2>Budget Tracker</h2>
      <div>
        <h3>Expense Name</h3>
        <h3>Cost</h3>
        <h3>actions</h3>
      </div>
      <div>{listOfExpenses}</div>
      <div>
        <p>
          <b>Balance: </b>${user.balance}
        </p>
        <p>
          <b>Total Cost: </b>${totalCost}
        </p>
        <p>
          <b>Remaining Balance: </b>${remainingBalance}
        </p>
      </div>
      <button onClick={onAddExpense}>Add Expense</button>
    </>
  );
};
export default BudgetTracker;
