// import './CoverResidency.css';

// function CoverResidency({ residencia }) {
//     return (
//         <section className="cover-residency">
//             <div className="cover-residency-container">
//                 <div className="cover-residency-image">
//                     <img 
//                         src={residencia.image} 
//                         alt={residencia.title}
//                     />
//                 </div>

//                 <div className="cover-residency-content">
                  

//                     <div className="cover-residency-title">
//                         <h1 dangerouslySetInnerHTML={{ 
//                             __html: residencia.title 
//                         }} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CoverResidency;

import './CoverResidency.css';

function CoverResidency({ residencia }) {
    if (!residencia) return null;

    return (
        <section className="cover-residency">
            <div className="cover-residency-container">
                <div className="cover-residency-image">
                    <img 
                        src={residencia.image} 
                        alt={residencia.title}
                    />
                </div>

                <div className="cover-residency-content">
                    <div className="cover-residency-title">
                        <h1 dangerouslySetInnerHTML={{ 
                            __html: residencia.title 
                        }} />
                        {residencia.title2 && (
                            <h2 dangerouslySetInnerHTML={{ 
                                __html: residencia.title2 
                            }} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoverResidency;