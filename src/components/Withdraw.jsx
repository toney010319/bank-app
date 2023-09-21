import { useState } from "react"

///TODO: mag lagay ka ng alert kung succesful na yong pag send paano malalaman ni user???  tsaka reset mo yong form  value
const Withdraw = (props) => {
    const { user, setLoginAccount } = props
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

                account.balance -= parseFloat(formValue)
                user.balance = account.balance
                account.transaction.push({ type: "Witdhdraw", amount: formValue, time: formattedDate })
                user.transaction = account.transaction

            }

            return account

        })

        localStorage.setItem("Accounts", JSON.stringify(updatedAccounts))
        setLoginAccount(user)


    }

    return (
        <>
            <form type="submit" onSubmit={onSubmit}>
                <h1>Withdraw</h1>
                <label>Enter Amount</label>
                <input type="number" name="balance" placeholder="$0.00" onChange={onChange} />

                <button type="submit">Witdraw</button>
            </form>
        </>
    )
}
export default Withdraw