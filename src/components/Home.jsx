import AddExpense from "./Addexpense";
import BudgetTracker from "./BudgetTracker";
import TransactionHistory from "./TransactionHistory";

const Home = (props) => {
  const { user } = props;

  return (
    <>
      {user && (
        <>
          <div className=" w-4/12  justify-center text-center flex flex-col  shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
            <p className="text-red-600">
              <b>${user.balance}.00</b>
            </p>
            <div>
              <p>
                Name: <b>{user.firstname} {user.lastname.slice(0, 1).toUpperCase()}</b>
              </p>
              <p>
                Email: <b>{user.email}</b>
              </p>
              <p>
                Account Number: <b>{user.accountnumber}</b>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Home;
