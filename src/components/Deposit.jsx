import { useState } from "react"


const Deposit = (props) => {
    const { user } = props
    const [formValue, setFormValue] = useState("")

    const onChange = (e) => {
        setFormValue(e.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const storedAccounts = JSON.parse(localStorage.getItem("Accounts"))
        const updatedAccounts = storedAccounts.map((account) => {
            if (account.email === user.email) {

                account.balance += parseFloat(formValue)
                user.balance = account.balance
            }

            return account

        })
        console.log(updatedAccounts)
        localStorage.setItem("Accounts", JSON.stringify(updatedAccounts))



    }

    return (
        <>
            <form type="submit" onSubmit={onSubmit}>
                <h1>Deposit</h1>
                <label>Enter Amount</label>
                <input type="number" name="balance" placeholder="$0.00" onChange={onChange} />

                <button type="submit">Send</button>
            </form>
        </>
    )
}
export default Deposit