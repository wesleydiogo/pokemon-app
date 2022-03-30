interface Props {
    className: string,
    onClick: () => void,
    disabled: boolean,
    children: any
}

export default ({ className, onClick, disabled, children }: Props) => {

    return (
        <button className={`btn ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}