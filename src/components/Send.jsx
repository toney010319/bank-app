import { useState } from "react";
///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value
const Send = (props) => {
  const { user, setUser } = props;
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
    const accountnumberValidation =
      user.accountnumber === formValue.accountnumber;
    const userValidation = storedAccounts.find(
      (account) => account.accountnumber === formValue.accountnumber
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
      validationErrors.accountnumber = "Account number does not exist.";
    }
    if (accountnumberValidation) {
      validationErrors.accountnumber1 = "You can not send money to yourself";
    }

    return validationErrors;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let newAccountDetails = {};
    const validationErrors = Validate(formValue);
    if (Object.keys(validationErrors).length === 0) {
      const updatedAccounts = storedAccounts.map((account) => {
        if (account.accountnumber === formValue.accountnumber) {
          account.balance += parseFloat(formValue.amount);

          account.transaction.push({
            transactionnumber: Math.floor(Math.random() * 100000000),
            type: "Received",
            amount: `$${parseFloat(formValue.amount)}.00`,
            from: ` from: ${user.accountnumber}`,
            time: formattedDate,
          });
          // const newBalance = account.balance += parseFloat(formValue.amount)
          // const newTransaction = { type: "Received", amount: `$${formValue.amount}.00`, from: `From: ${user.accountnumber}`, time: formattedDate }
          // account.transaction.push(newTransaction)
          // newAccountDetails = { ...account, balance: newBalance, transaction: [...(account.transaction || [])] }
        }
        if (account.accountnumber === user.accountnumber) {
          const newBalance = (account.balance -= parseFloat(formValue.amount));
          const newTransaction = account.transaction.push({
            transactionnumber: Math.floor(Math.random() * 100000000),
            type: "Send",
            amount: `$${parseFloat(formValue.amount)}.00`,
            to: ` to: ${formValue.accountnumber}`,
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
        <h1 className="text-red-800 font-extrabold text-6xl flex justify-center  items-center">
          Send
        </h1>
        <label>Enter Amount</label>
        <input
          className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
          type="number"
          name="amount"
          placeholder="$0.00"
          onChange={onChange}
        />
        {errors.amount && <div className="text-red-800">{errors.amount}</div>}
        {errors.isnumber && (
          <div className="text-red-800">{errors.isnumber}</div>
        )}
        {errors.noamount && (
          <div className="text-red-800">{errors.noamount}</div>
        )}
        <label>Enter Account Number</label>
        <input
          className="py-1 text-center  font-medium rounded-full shadow-slate-500 shadow-md  focus:outline-none focus:ring focus:ring-slate-500"
          type="text"
          name="accountnumber"
          placeholder="Account Number"
          onChange={onChange}
        />
        {errors.accountnumber && (
          <div className="text-red-800">{errors.accountnumber}</div>
        )}
        {errors.accountnumber1 && (
          <div className="text-red-800">{errors.accountnumber1}</div>
        )}
        <button
          type="submit"
          onClick={onSubmit}
          className="m-1 bg-gradient-to-r from-[#e78372] to-[#c44f3c] px-5  text-lg font-semibold text-slate-100 py-1 rounded-full shadow-slate-500 shadow-md hover:from-[#ff5b3e] hover:to-[#640d00f8]"
        >
          Send
        </button>
      </form>
    </>
  );
};
export default Send;
