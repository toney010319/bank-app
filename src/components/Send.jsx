import { useState } from "react"
import TransactionHistory from "./TransactionHistory"
///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value
const Send = (props) => {
    const { user, setUser } = props
    const storedAccounts = JSON.parse(localStorage.getItem("Accounts"))
    const [formValue, setformValue] = useState({ amount: "", username: "" })
    const [errors, setErrors] = useState({});


    const onChange = (e) => {
        const { name, value } = e.target;
        setformValue((prevValues) => ({ ...prevValues, [name]: value }));
    }
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const Validate = () => {
        const balanceValidation = user.balance >= formValue.amount
        const userNameValidation = user.username === formValue.username
        const userValidation = storedAccounts.find((account) => account.username === formValue.username)
        const validationErrors = {};

        if (!balanceValidation) {
            validationErrors.amount = "insuficient amount.";
        }
        if (!formValue.amount)
            validationErrors.noamount = "Please enter Amount"

        if (!userValidation) {
            validationErrors.username = "Account number does not exist.";
        }
        if (userNameValidation) {
            validationErrors.username1 = "You can not send money to yourself"
        }


        return validationErrors;
    };
    const onSubmit = (event) => {

        event.preventDefault()
        let newAccountDetails = {}
        const validationErrors = Validate(formValue);
        if (Object.keys(validationErrors).length === 0) {
            const updatedAccounts = storedAccounts.map((account) => {
                if (account.username === formValue.username) {
                    account.balance += parseFloat(formValue.amount)
                    account.transaction.push({ type: "Received", amount: `$${formValue.amount}.00`, from: `From: ${user.username}`, time: formattedDate })
                    // const newBalance = account.balance += parseFloat(formValue.amount)
                    // const newTransaction = { type: "Received", amount: `$${formValue.amount}.00`, from: `From: ${user.username}`, time: formattedDate }
                    // account.transaction.push(newTransaction)
                    // newAccountDetails = { ...account, balance: newBalance, transaction: [...(account.transaction || [])] }
                }
                if (account.username === user.username) {

                    const newBalance = user.balance -= parseFloat(formValue.amount)
                    const newTransaction = account.transaction.push({ type: "Send", amount: `$${formValue.amount}.00`, to: `To: ${formValue.username}`, time: formattedDate })
                    user.transaction.push(newTransaction)
                    newAccountDetails = { ...account, balance: newBalance, transaction: [...(account.transaction || [])] }
                }


                return account
            })
            localStorage.setItem("Accounts", JSON.stringify(updatedAccounts))
            setUser(newAccountDetails)
        }

        setErrors(validationErrors);

    }
    return (
        <>
            <form type="submit" >

                <h1>Send</h1>
                <label>Enter Amount</label>
                <input type="number" name="amount" placeholder="$0.00" onChange={onChange} />
                {errors.amount && <div>{errors.amount}</div>}
                {errors.noamount && <div>{errors.noamount}</div>}
                <label>Enter username</label>
                <input type="text" name="username" placeholder="Username" onChange={onChange} />
                {errors.username && <div>{errors.username}</div>}
                {errors.username1 && <div>{errors.username1}</div>}
                <button type="submit" onClick={onSubmit} >Send</button>
            </form>
        </>
    )
}
export default Send