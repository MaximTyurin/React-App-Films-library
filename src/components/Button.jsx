export const Button = (props) => {

    const {onClick, children, disabled, className, type} = props;

    return (
        <button
            onClick={ onClick }
            disabled={ disabled }
            className={ className }
            type ={ type }
        > { children } </button>
    )
}

export default Button;