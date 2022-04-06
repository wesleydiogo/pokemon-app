interface IButtonProps {
    className: string,
    onClick: () => void,
    disabled?: boolean,
    children: React.ReactNode
}

const Button = ({ className, onClick, disabled, children }: IButtonProps) => {

    return (
        <button
            className={`btn ${className}`}
            style={{
                transition: "all ease .1s",
            }}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
    );
}
export default Button;