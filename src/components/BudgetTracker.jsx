import AddExpense from "./Addexpense"
import './BudgetTracker.css'
const BudgetTracker = (props) => {
    const { user, setSwitchPage } = props

    const listOfExpenses = user.budgetTracker && user.budgetTracker.map((budgetTracker, index) =>
    (

        <div key={index} style={{
            display: "flex",
            justifyContent: "space-around"
        }}>
            <p style={{ width: "180.417px" }}>{budgetTracker.name}</p>
            <p>{budgetTracker.cost}</p>
            <div><button>X</button>
                <button>E</button></div>
        </div>

    ))
    const onAddExpense = () => {
        setSwitchPage('AddExpense')
    }

    return (
        <>
            <div >
                <h2>Expense Name</h2>
                <h2>Cost</h2>
                <h2>actions</h2>
            </div>
            <div>
                {listOfExpenses}
            </div>

            <button onClick={onAddExpense}>Add Expense</button>
        </>
    )
}
export default BudgetTracker



