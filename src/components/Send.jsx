import { useState } from "react"

const Send = (props) => {
    const { accounts } = props
    const storedAccounts = JSON.parse(localStorage.getItem("Accounts"))
    const [formValue, setformValue] = useState({ amount: "", username: "" })
    const [errors, setErrors] = useState({});


    const onChange = (e) => {
        const { name, value } = e.target;
        setformValue((prevValues) => ({ ...prevValues, [name]: value }));
    }
    const Validate = () => {
        const balanceValidation = accounts.balance < formValue.amount
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


        return validationErrors;
    };
    const onSubmit = (event) => {
        event.preventDefault()
        const validationErrors = Validate(formValue);
        if (Object.keys(validationErrors).length === 0) {

            console.log(accounts.balance)
            console.log(formValue.amount)
            accounts.balance - formValue.amount
            // i dont know the logic behind the hood ahahahaha ! 
            //babalikan nalang kita pag buo na yong utak ko ! hahah

        }

        setErrors(validationErrors);

    }
    return (
        <>
            <form type="submit" onClick={onSubmit}>
                <h1>Send</h1>
                <label>Enter Amount</label>
                <input type="text" name="amount" placeholder="$0.00" onChange={onChange}></input>
                {errors.amount && <div>{errors.amount}</div>}
                {errors.noamount && <div>{errors.noamount}</div>}
                <label>Enter username</label>
                <input type="text" name="username" placeholder="Username" onChange={onChange}></input>
                {errors.username && <div>{errors.username}</div>}
                <button type="submit" >Send</button>
            </form>
        </>
    )
}
export default Send