
import AddExpense from "./Addexpense"
import BudgetTracker from "./BudgetTracker"
import TransactionHistory from "./TransactionHistory"


const Home = (props) => {
    const { user, setUser } = props

    return (
        <>
            {user && (
                <>

                    <h1>Home</h1>
                    <div>
                        <p>Firstname: <b>{user.firstname}</b>  </p>
                        <p>LASTNAME: <b>{user.lastname}</b></p>
                        <p>EMAIL:<b>{user.email}</b></p>
                    </div>
                    <div>
                        <p>Balance: <b>{user.balance}</b> </p>

                        <TransactionHistory user={user} />
                    </div>
                    <div>

                        <BudgetTracker user={user} />
                    </div>

                    <AddExpense user={user} setUser={setUser} />

                </>
            )}
        </>
    )
}
export default Home

