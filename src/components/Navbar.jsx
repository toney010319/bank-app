import DepositIcon from "./icon/DepositIcon";
import HistoryIcon from "./icon/HistoryIcon";
import MoneyIcon from "./icon/MoneyIcon";
import SendIcon from "./icon/SendIcon";

const Navbar = (props) => {
  const { accounts, loginAccount, setCurrentPage, setSwitchPage } = props;

  const onSend = () => {
    setSwitchPage("Send");
  };
  const onDeposit = () => {
    setSwitchPage("Deposit");
  };
  const onWithdraw = () => {
    setSwitchPage("Withdraw");
  };
  const onHistory = () => {
    setSwitchPage("History");
  };

  return (
    <>
     
      <div className="  grid grid-cols-2 w-80  gap-3">
        <div className="  hover:text-red-600 flex flex-col items-center justify-center text-justify shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
          <button
            className="  flex flex-col items-center  hover:text-red-600"
            onClick={onSend}
          >
            <div className="hover:text-red-600 flex items-center">
              <MoneyIcon className="  hover:text-red-600 w-10 h-10 text-slate-500 " />
              <SendIcon className="hover:text-red-600 text-slate-500" />
            </div>
            Send
          </button>
        </div>
        <div className="flex flex-col  shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
          <button className="flex flex-col items-center" onClick={onDeposit}>
            <div className="flex items-center">
              <MoneyIcon className="w-10 h-10 text-slate-500" />
              <DepositIcon className="text-slate-500" />
            </div>
            Deposit
          </button>
        </div>
        <div className="flex flex-col    shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
          <button className="flex flex-col items-center" onClick={onWithdraw}>
            <MoneyIcon className="w-10 h-10 text-slate-500" />
            Withdraw
          </button>
        </div>
        <div>
          <div className="flex flex-col    shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
            <button className="flex flex-col items-center" onClick={onHistory}>
              <HistoryIcon className="w-10 h-10 text-slate-500" />
              History
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
