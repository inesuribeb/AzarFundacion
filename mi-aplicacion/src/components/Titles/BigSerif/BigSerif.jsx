import './BigSerif.css'

function BigSerif({ children, className = '', ...props }) {
    return (
        <h1 
            className={`big-serif-title ${className}`} 
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}

export default BigSerif;