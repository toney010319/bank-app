const Input = (props) => {
    const { label, type, } = props

    return (
        <>
            <label>{label}</label>
            <input
                name={label}
                type={type}
            />
        </>
    )
}
export default Input