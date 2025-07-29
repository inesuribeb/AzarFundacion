import './MediumSans.css'

function MediumSans({ children, className = '', ...props }) {
    return (
        <h1 className={`medium-sans-title ${className}`} {...props}>
            {children}
        </h1>
    )
}

export default MediumSans;