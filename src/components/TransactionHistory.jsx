

const TransactionHistory = (props) => {
    const { user } = props


    const listOfTransaction = user.transaction && user.transaction.map((transaction, index) =>
    (
        < div key={index} >

            <p>You {transaction.type} an amount of: {transaction.amount} {transaction.to} {transaction.from} {transaction.time} </p>

        </div >

    ))

    return (
        <>
            <div>
                <h2>Transaction History</h2>
                {listOfTransaction}


            </div>
        </>
    )
}
export default TransactionHistory