import DepositIcon from "./icon/DepositIcon";
import HistoryIcon from "./icon/HistoryIcon";
import MoneyIcon from "./icon/MoneyIcon";
import SendIcon from "./icon/SendIcon";
import { createPortal } from "react-dom";
import Send from "./Send";
import { useState } from "react";
import Modal from "./Modal";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import TransactionHistory from "./TransactionHistory";

const Navbar = (props) => {
  const { setUser, user,  } = props;
  const [isShowSend, isSetShowSend] = useState(false);
  const [isShowDeposit, isSetShowDeposit] = useState(false);
  const [isShowWithdraw, isSetShowWithdraw] = useState(false);
  const [isShowHistory, isSetShowHistory] = useState(false);

 

  return (
    <>
      <div className="  grid grid-cols-2 w-80  gap-3">
        <div className="  hover:text-red-600 flex flex-col items-center justify-center text-center   shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
          <button
            className="  flex flex-col items-center  hover:text-red-600"
            onClick={() => isSetShowSend(true)}
          >
            <div className="hover:text-red-600 flex items-center text-center justify-center  ml-3">
              <MoneyIcon className="  hover:text-red-600 w-10 h-10 text-slate-500 " />
              <SendIcon className="hover:text-red-600 text-slate-500" />
            </div>
            Send
          </button>
          {isShowSend &&
            createPortal(
              <Modal
                user={user}
                setUser={setUser}
                onClose={() => isSetShowSend(false)}
              >
                <Send user={user} setUser={setUser} />
              </Modal>,
              document.getElementById("dashboard")
            )}
        </div>
        <div className="  hover:text-red-600 flex flex-col  shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
          <button
            className="flex flex-col items-center  hover:text-red-600"
            onClick={() => isSetShowDeposit(true)}
          >
            <div className="flex items-center">
              <MoneyIcon  className=" hover:text-red-600 w-10 h-10 text-slate-500" />
              <DepositIcon className= " hover:text-red-600  text-slate-500" />
            </div>
            Deposit
          </button>
          {isShowDeposit &&
            createPortal(
              <Modal
                user={user}
                setUser={setUser}
                onClose={() => isSetShowDeposit(false)}
              >
                <Deposit user={user} setUser={setUser} />
              </Modal>,
              document.getElementById("dashboard")
            )}
        </div>
        <div className="flex flex-col  hover:text-red-600  shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
          <button
            className="flex flex-col items-center"
            onClick={() => isSetShowWithdraw(true)}
          >
            <MoneyIcon className="w-10 h-10 text-slate-500 hover:text-red-600" />
            Withdraw
          </button>
          {isShowWithdraw &&
            createPortal(
              <Modal
                user={user}
                setUser={setUser}
                onClose={() => isSetShowWithdraw(false)}
              >
                <Withdraw user={user} setUser={setUser} />
              </Modal>,
              document.getElementById("dashboard")
            )}
        </div>
        <div>
          <div className="flex flex-col   hover:text-red-600  shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg">
            <button className="flex flex-col items-center"  onClick={() => isSetShowHistory(true)}>
              <HistoryIcon className="  hover:text-red-600 w-10 h-10 text-slate-500" />
              History
            </button>
            {isShowHistory &&
            createPortal(
              <Modal
                user={user}
                setUser={setUser}
                onClose={() => isSetShowHistory(false)}
              >
                <TransactionHistory user={user} setUser={setUser} />
              </Modal>,
              document.getElementById("dashboard")
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
