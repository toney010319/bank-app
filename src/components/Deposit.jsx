import { useState } from "react"
///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value

const Deposit = (props) => {
    const { user } = props
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
        const storedAccounts = JSON.parse(localStorage.getItem("Accounts"))
        const updatedAccounts = storedAccounts.map((account) => {
            if (account.email === user.email) {

                account.balance += parseFloat(formValue)
                user.balance = account.balance
                user.transaction = account.transaction.push({ type: "Deposit", amount: `$${formValue}.00`, time: formattedDate })

            }

            return account

        })

        localStorage.setItem("Accounts", JSON.stringify(updatedAccounts))



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