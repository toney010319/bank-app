
import AddExpense from "./Addexpense"
import BudgetTracker from "./BudgetTracker"
import TransactionHistory from "./TransactionHistory"


const Home = (props) => {
    const { user, setSwitchPage } = props

    return (
        <>
            {user && (
                <>
                    <div>
                        <h1>Home</h1>
                        <div>
                            <p>Firstname: <b>{user.firstname}</b>  </p>
                            <p>LASTNAME: <b>{user.lastname}</b></p>
                            <p>EMAIL:<b>{user.email}</b></p>


                            <p>Balance: <b>${user.balance}.00</b> </p>
                        </div>
                    </div>
                    <TransactionHistory user={user} />

                    <div>

                        <BudgetTracker user={user} setSwitchPage={setSwitchPage} />
                    </div>



                </>
            )}
        </>
    )
}
export default Home

