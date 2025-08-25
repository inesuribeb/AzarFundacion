// import './MediumSans.css'

// function MediumSans({ children, className = '', ...props }) {
//     return (
//         <h2 className={`medium-sans-title ${className}`} {...props}>
//             {children}
//         </h2>
//     )
// }

// export default MediumSans;

import './MediumSans.css'

function MediumSans({ children, className = '', ...props }) {
    return (
        <h2 
            className={`medium-sans-title ${className}`} 
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    )
}

export default MediumSans;