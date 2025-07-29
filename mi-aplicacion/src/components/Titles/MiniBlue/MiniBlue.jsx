import './MiniBlue.css'

function MiniBlue({ children, className = '', ...props }) {
    return (
        <h3 className={`miniblue-title ${className}`} {...props}>
            {children}
        </h3>
    )
}

export default MiniBlue;