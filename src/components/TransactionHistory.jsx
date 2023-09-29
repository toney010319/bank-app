const TransactionHistory = (props) => {
  const { user } = props;
//TODO: babalikan kita may kulang kapa sakin ! .
  const listOfTransaction =
    user.transaction &&
    user.transaction.map((transaction, index) => (
      <div key={index} className="w-full flex flex-row gap-5">
       
        <div>
          {transaction.type}
        </div>
       
        <div>
          {transaction.amount}
        </div>
        <div>
          {transaction.to}
          {transaction.from}
        </div>
        <div>
         
          {transaction.time}
        </div>
      </div>
    ));

  return (
    <>
      <div>
        <h2 className="text-red-800 font-extrabold text-4xl flex justify-center  items-center">
          Transaction History
        </h2>
        {listOfTransaction}
      </div>
    </>
  );
};
export default TransactionHistory;
