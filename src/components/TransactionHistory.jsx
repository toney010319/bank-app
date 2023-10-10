

const TransactionHistory = (props) => {
  const { user } = props;
  //TODO: babalikan kita may kulang kapa sakin ! .
  const listOfTransaction =
    user.transaction &&
    user.transaction.map((transaction, index) => (
      <div
        key={index}
        className=" w-96   flex flex-col p-2  m-2 border-2 shadow-slate-500 shadow-md drop-shadow-2xl rounded-lg"
      >
        <div className="flex flex-row gap-1">
          <p>Transaction #: </p> {transaction.transactionnumber}
        </div>
        <div className="flex flex-row gap-1">
          <p>Type: </p> {transaction.type}
        </div>

        <div className="flex flex-row gap-1">
          <p>Amount: </p> {transaction.amount}
        </div>
        <div className="flex flex-row gap-1">
          {transaction.to}
          {transaction.from}
        </div>
        <div className="flex flex-row gap-1">
          <p>Date: </p> {transaction.time}
        </div>
      </div>
    ));
  return (
    <>
      <div>
        <h2 className="text-red-800 font-extrabold text-2xl flex justify-center  items-center">
          Transaction History
        </h2>
        <div className="overflow-y-scroll  h-80">{listOfTransaction}</div>
      </div>
    </>
  );
};
export default TransactionHistory;
