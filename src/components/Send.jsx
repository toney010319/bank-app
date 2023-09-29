import { useState } from "react";
///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value
const Send = (props) => {
  const { user, setUser,  } = props;
  const storedAccounts = JSON.parse(localStorage.getItem("Accounts"));
  const [formValue, setformValue] = useState({ amount: "", username: "" });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setformValue((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const Validate = () => {
    const balanceValidation = user.balance >= formValue.amount;
    const userNameValidation = user.username === formValue.username;
    const userValidation = storedAccounts.find(
      (account) => account.username === formValue.username
    );
    const amountValidation = formValue.amount <= 0;
    const validationErrors = {};

    if (!balanceValidation) {
      validationErrors.amount = "insuficient amount.";
    }
    // if (!formValue.amount) {validationErrors.noamount = "Please enter Amount";}
    if (amountValidation)
      validationErrors.isnumber = "Please Enter Valid Amount";
    if (!userValidation) {
      validationErrors.username = "Account number does not exist.";
    }
    if (userNameValidation) {
      validationErrors.username1 = "You can not send money to yourself";
    }

    return validationErrors;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let newAccountDetails = {};
    const validationErrors = Validate(formValue);
    if (Object.keys(validationErrors).length === 0) {
      const updatedAccounts = storedAccounts.map((account) => {
        if (account.username === formValue.username) {
          account.balance += parseFloat(formValue.amount);
          account.transaction.push({
            type: "Received",
            amount: parseFloat(formValue.amount),
            from: ` from:${user.username}`,
            time: formattedDate,
          });
          // const newBalance = account.balance += parseFloat(formValue.amount)
          // const newTransaction = { type: "Received", amount: `$${formValue.amount}.00`, from: `From: ${user.username}`, time: formattedDate }
          // account.transaction.push(newTransaction)
          // newAccountDetails = { ...account, balance: newBalance, transaction: [...(account.transaction || [])] }
        }
        if (account.username === user.username) {
          const newBalance = (account.balance -= parseFloat(formValue.amount));
          const newTransaction = account.transaction.push({
            type: "Send",
            amount: parseFloat(formValue.amount),
            to: ` to:${formValue.username}`,
            time: formattedDate,
          });
          user.transaction.push(newTransaction);
          newAccountDetails = {
            ...account,
            balance: newBalance,
            transaction: [...(account.transaction || [])],
          };
        }

        return account;
      });
      localStorage.setItem("Accounts", JSON.stringify(updatedAccounts));
      console.log(updatedAccounts);
      console.log(newAccountDetails);
      setUser(newAccountDetails);
      alert("Sent Successfully ");
    }

    setErrors(validationErrors);
  };
  return (
    <>
      <form type="submit" className="flex flex-col gap-4">
        <h1 className="text-red-800 font-extrabold text-6xl flex justify-center  items-center">Send</h1>
        <label>Enter Amount</label>
        <input className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
          type="number"
          name="amount"
          placeholder="$0.00"
          onChange={onChange}
        />
        {errors.amount && <div className="text-red-800">{errors.amount}</div>}
        {errors.isnumber && <div className="text-red-800">{errors.isnumber}</div>}
        {errors.noamount && <div className="text-red-800">{errors.noamount}</div>}
        <label>Enter username</label>
        <input className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />
        {errors.username && <div className="text-red-800">{errors.username}</div>}
        {errors.username1 && <div className="text-red-800">{errors.username1}</div>}
        <button type="submit" onClick={onSubmit} className="m-1 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-5  text-lg font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8]">
          Send
        </button>
      </form>
      
    </>
  );
};
export default Send;
