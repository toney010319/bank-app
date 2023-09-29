

import EditIcon from "./icon/EditIcon";
import RemoveIcon from "./icon/RemoveIcon";
const BudgetTracker = (props) => {
  const { user,  setUser,isSetShowAddExpense } = props;
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
    storedAccounts.map((account) => {
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
          textAlign: "right",
          border: "1px solid",
          margin: "2px",
        }}
      >
        <p>{budgetTracker.name}</p>
        <p>${budgetTracker.cost}</p>
        <div>
          <button onClick={() => onRemove(budgetTracker)}>
            <RemoveIcon className=" text-slate-500" />
          </button>
          <button onClick={onEdit}>
            <EditIcon className=" text-slate-500" />
          </button>
        </div>
      </div>
    ));
  

  return (
    <>
      <h2 className="self-center text-red-500 text-lg font-bold">
        Budget Tracker
      </h2>
      <div className="flex flex-row justify-around">
        <h3>Expense Name</h3>
        <h3>Cost</h3>
        <h3>actions</h3>
      </div>
      <div className=" text-end">{listOfExpenses}</div>
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
      <button
        className=" self-center w-64 mt-6 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-20   font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8] "
        onClick={() => isSetShowAddExpense(true)}
      >
        <p>Add Expense</p>
      </button>
    </>
  );
};
export default BudgetTracker;
