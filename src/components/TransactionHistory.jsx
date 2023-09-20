import { useState } from "react"
///TODO: may problema pa dito balikan mo  wag kang bobo!!
const TransactionHistory = (props) => {
    const { user } = props
    if (!Array.isArray(user.transaction)) {
        return (
            <div>
                <h1>Transaction History</h1>
                <p>No transaction data available.</p>
            </div>
        );
    }
    const listOfTransaction = user.transaction.map((transaction, index) => (
        <div key={index}>

            <p>You {transaction.type} an amount of: {transaction.amount} {transaction.time} </p>

        </div>
    ));
    console.log(listOfTransaction)
    return (
        <>
            <div>
                <h1>Transaction History</h1>
                {listOfTransaction}


            </div>
        </>
    )
}
export default TransactionHistory