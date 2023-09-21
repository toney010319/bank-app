

const TransactionHistory = (props) => {
    const { user } = props


    const listOfTransaction = user.transaction && user.transaction.map((transaction, index) => (

        < div key={index} >

            <p>You {transaction.type} an amount of: {transaction.amount} {transaction.time} </p>

        </div >

    ))

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