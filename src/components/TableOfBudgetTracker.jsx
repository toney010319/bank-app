import RemoveIcon from "./icon/RemoveIcon";
import EditIcon from "./icon/EditIcon";
import { createPortal } from "react-dom";
import { useState } from "react";
import Modal from "./Modal";
import AddExpense from "./Addexpense";
const TableOfBudgetTracker = (props) => {
  const { user, setUser, isSetShowAddExpense, isShowAddExpense, formValue} = props;
  const [rowToEdit, setRowToEdit] = useState(null)

   
  const onEditToTheList = (editExpense) => {
    setRowToEdit(editExpense)
    isSetShowAddExpense(true)
    console.log("editExpense",editExpense)
    console.log(rowToEdit)
     
  }
  const onRemoveToTheList = (targetIndex) => {
    let newBudgetTracker = user.budgetTracker.filter(
      (budgetTracker) => budgetTracker !== targetIndex
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
    console.log("newBudgetTracker", newBudgetTracker);
    console.log("updatedAccounts", updatedAccounts);
  };
  let totalCost = 0;
  const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
  storedAccounts.map((account) => {
    if (account.email === user.email) {
      let listofCost = user.budgetTracker.map((a) => a.cost);

      listofCost.forEach((num) => {
        totalCost += parseFloat(num);
      });
    }
  });
  const remainingBalance = user.balance - totalCost;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Expense name</th>
            <th> Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.budgetTracker.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.name}</td>
                <td>${row.cost}.00</td>
                <td>
                  <span>
                    <button onClick={() => onRemoveToTheList(row)}>
                      <RemoveIcon className="  text-slate-500 w-6 h-6 hover:text-red-600" />
                    </button>
                    <button onClick={() => onEditToTheList(row)}  >
                      <EditIcon className="  text-slate-500 w-5 h-6 hover:text-red-600" />
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col justify-center text-center">
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
      <button
        className="mb-5 self-center w-64 mt-6 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-20   font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8] "
        onClick={() => isSetShowAddExpense(true)}
      >
        <p>Add Expense</p>
      </button>
      <div>
        {isShowAddExpense &&
          createPortal(
            <Modal
              user={user}
              setUser={setUser}
              onClose={() => isSetShowAddExpense(false)}
            >
              <AddExpense user={user} setUser={setUser} rowToEdit={rowToEdit} setRowToEdit={setRowToEdit} defaultValue={rowToEdit !== null && row[rowToEdit]}/>
            </Modal>,
            document.getElementById("dashboard")
          )}
      </div>
    </>
  );
};
export default TableOfBudgetTracker;
