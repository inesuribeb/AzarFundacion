import './Texts.css';

function Texts({ children, size = 'medium', className = '', ...props }) {
    return (
        <p 
            className={`text-paragraph ${size} ${className}`}
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}

export default Texts;