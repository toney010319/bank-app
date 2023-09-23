const Navbar = (props) => {
  const { accounts, loginAccount, setCurrentPage, setSwitchPage } = props;

  const onLogout = () => {
    setCurrentPage("login");
  };
  const onSend = () => {
    setSwitchPage("Send");
  };
  const onDeposit = () => {
    setSwitchPage("Deposit");
  };
  const onWithdraw = () => {
    setSwitchPage("Withdraw");
  };
  const onHome = () => {
    setSwitchPage("home");
  };

  return (
    <>
      <nav>
        <button onClick={onHome}>Home</button>
        <ul>
          <li>
            <button onClick={onSend}>Send</button>
          </li>
          <li>
            <button onClick={onDeposit}>Deposit</button>
          </li>
          <li>
            <button onClick={onWithdraw}>Withdraw</button>
          </li>
        </ul>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </>
  );
};
export default Navbar;
