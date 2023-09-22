import { useState } from "react"
import TransactionHistory from "./TransactionHistory"
///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value

const Deposit = (props) => {
    const { user, setUser } = props
    const [formValue, setFormValue] = useState("")

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });


    const onChange = (e) => {
        setFormValue(e.target.value)

    }

    const onSubmit = (event) => {
        event.preventDefault()
        let newAccountDetails = {}
        const storedAccounts = JSON.parse(localStorage.getItem("Accounts"))
        const updatedAccounts = storedAccounts.map((account) => {
            if (account.email === user.email) {

                const newBalance = account.balance += parseFloat(formValue)
                const newTransaction = { type: "Deposit", amount: `$${formValue}.00`, time: formattedDate }
                account.transaction.push(newTransaction)
                // user.balance = newBalance
                // user.transaction = account.transaction
                newAccountDetails = { ...account, balance: newBalance, transaction: [...(account.transaction || []),] }
            }

            return account

        })

        localStorage.setItem("Accounts", JSON.stringify(updatedAccounts))
        setUser(newAccountDetails)



    }

    return (
        <>

            <form type="submit" onSubmit={onSubmit}>
                <h1>Deposit</h1>
                <label>Enter Amount</label>
                <input type="number" name="balance" placeholder="$0.00" onChange={onChange} />

                <button type="submit">Deposit</button>
            </form>
        </>
    )
}
export default Deposit