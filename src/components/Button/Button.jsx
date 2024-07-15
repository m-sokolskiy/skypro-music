const Button = ({ value, onClick, dataTestId, disabled, type }) => {
    return (
        <button onClick={onClick} data-testid={dataTestId} disabled={disabled} type={type}>
            {value}
        </button>
    );
}

export default Button 