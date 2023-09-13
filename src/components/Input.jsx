const Input = (props) => {
    const { label, type, onChange, required, value, name } = props

    return (
        <>
            <label>{label}</label>
            <input
                name={name}
                type={type}
                onChange={onChange}
                required={required}
                value={value}
            />
        </>
    )
}
export default Input