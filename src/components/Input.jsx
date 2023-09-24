const Input = (props) => {
  const { label, type, onChange, required, value, name, className } = props;

  return (
    <>
      <label>{label}</label>
      <input
        className={className}
        name={name}
        type={type}
        onChange={onChange}
        required={required}
        value={value}
      />
    </>
  );
};
export default Input;
