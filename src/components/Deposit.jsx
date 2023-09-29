import { useState } from "react";

///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value

const Deposit = (props) => {
  const { user, setUser } = props;
  const [formValue, setFormValue] = useState("");
  const [error, setError] = useState("");

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const onChange = (e) => {
    setFormValue(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newAccountDetails = {};
    if (formValue <= 0) {
      setError("Please Enter Valid Amount");
    } else {
      const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
      const updatedAccounts = storedAccounts.map((account) => {
        if (account.email === user.email) {
          const newBalance = (account.balance += parseFloat(formValue));
          const newTransaction = {
            type: "Deposit",
            amount: `$${formValue}.00`,
            time: formattedDate,
          };
          account.transaction.push(newTransaction);
          // user.balance = newBalance
          user.transaction = account.transaction;
          newAccountDetails = {
            ...account,
            balance: newBalance,
            transaction: [...(account.transaction || [])],
          };
        }

        return account;
      });
      alert(" Successfully Deposit ");
      localStorage.setItem("Accounts", JSON.stringify(updatedAccounts));
      setUser(newAccountDetails);
    }
   
  };

  return (
    <>
      <form type="submit" onSubmit={onSubmit} className="flex flex-col gap-4" >
        <h1 className="text-red-800 font-extrabold text-6xl flex justify-center  items-center">Deposit</h1>
        <label>Enter Amount</label>
        <input 
       className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
          type="number"
          name="balance"
          placeholder="$0.00"
          onChange={onChange}
        />
        {error && <div>{error}</div>}

        <button type="submit" className="m-1 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-5  text-lg font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8]">Deposit</button>
      </form>
    </>
  );
};
export default Deposit;
