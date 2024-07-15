const Input = ({ value, onChange, type, name, placeholder }) => {
    return (
        <input value={value} onChange={onChange} type={type} name={name} placeholder={placeholder}/>
    );
}

export default Input 