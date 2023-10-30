const Input = (props) => {
  const { label, type, pattern, onChange, required, value, name, className } =
    props;

  return (
    <>
      <label>{label}</label>
      <input
        className={className}
        name={name}
        type={type}
        pattern={pattern}
        onChange={onChange}
        required={required}
        value={value}
      />
    </>
  );
};
export default Input;
