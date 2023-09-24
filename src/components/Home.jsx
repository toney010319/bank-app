import AddExpense from "./Addexpense";
import BudgetTracker from "./BudgetTracker";
import TransactionHistory from "./TransactionHistory";

const Home = (props) => {
  const { user, setSwitchPage, setUser } = props;

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
                Firstname: <b>{user.firstname}</b> 
              </p>
              <p>
                LASTNAME: <b>{user.lastname}</b>
              </p>
              <p>
                EMAIL:<b>{user.email}</b>
              </p>
            </div>
          </div>
          
        </>
      )}
    </>
  );
};
export default Home;
