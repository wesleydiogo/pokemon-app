interface Props {
    className: string,
    onClick: () => void,
    disabled?: boolean,
    children: React.ReactNode
}

export default ({ className, onClick, disabled, children }: Props) => {

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