import { useState } from "react";
///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value
const Withdraw = (props) => {
  const { user, setUser } = props;
  const [formValue, setFormValue] = useState("");
  const [errors, setErrors] = useState({});
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
  const Validate = () => {
    const balanceValidation = user.balance >= formValue;
    const amountValidation = formValue <= 0;
    const validationErrors = {};

    if (!balanceValidation) {
      validationErrors.amount = "insuficient Balance.";
    }

    if (amountValidation)
      validationErrors.isnumber = "Please Enter Valid Amount";

    return validationErrors;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let newAccountDetails = {};
    const validationErrors = Validate(formValue);
    if (Object.keys(validationErrors).length === 0) {
      const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
      const updatedAccounts = storedAccounts.map((account) => {
        if (account.email === user.email) {
          const newBalance = (account.balance -= parseFloat(formValue));
          const newTransaction = {
            type: "Witdhdraw",
            amount: `$${formValue}.00`,
            time: formattedDate,
          };
          account.transaction.push(newTransaction);
          // user.balance = newBalance
          // user.transaction = account.transaction
          newAccountDetails = {
            ...account,
            balance: newBalance,
            transaction: [...(account.transaction || [])],
          };
        }

        return account;
      });
      alert(" Successfully Withdraw ");
      localStorage.setItem("Accounts", JSON.stringify(updatedAccounts));
      setUser(newAccountDetails);
    }
    setErrors(validationErrors);
  };

  return (
    <>
      <form type="submit" onSubmit={onSubmit} className="flex flex-col gap-4" >
        <h1 className="text-red-800 font-extrabold text-6xl flex justify-center  items-center">Withdraw</h1>
        <label>Enter Amount</label>
        <input className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
          type="number"
          name="amount"
          placeholder="$0.00"
          onChange={onChange}
        />
        {errors.amount && <div>{errors.amount}</div>}
        {errors.isnumber && <div>{errors.isnumber}</div>}

        <button type="submit" className="m-1 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-5  text-lg font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8]">Witdraw</button>
      </form>
    </>
  );
};
export default Withdraw;
