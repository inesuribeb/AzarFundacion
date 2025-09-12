import { useEffect, useRef, useState } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import './CoverResidency.css';

function CoverResidency({ residencia, lightHeader = {} }) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const [sectionHeight, setSectionHeight] = useState('200vh');
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const { setUseLightLogo, setUseLightHamburger } = useHeader();

    const { logo = false, hamburger = false } = lightHeader;

    if (!residencia) return null;

    useEffect(() => {
        const calculateHeight = () => {
            if (imageRef.current) {
                const imageHeight = imageRef.current.scrollHeight;
                const viewportHeight = window.innerHeight;
                const availableHeight = viewportHeight;

                if (imageHeight > availableHeight) {
                    const extraHeight = imageHeight - availableHeight;
                    const totalHeight = viewportHeight + extraHeight + 20;
                    setSectionHeight(`${totalHeight}px`);
                } else {
                    setSectionHeight('100vh');
                }
            }
        };

        const timer = setTimeout(calculateHeight, 100);
        window.addEventListener('resize', calculateHeight);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateHeight);
        };
    }, [residencia]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsImageLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!logo && !hamburger) return;

        const handleScroll = () => {
            if (!sectionRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const isInSection = rect.top <= 0 && rect.bottom > 0;

            if (logo) setUseLightLogo(isInSection);
            if (hamburger) setUseLightHamburger(isInSection);
        };

        if (logo) setUseLightLogo(true);
        if (hamburger) setUseLightHamburger(true);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (logo) setUseLightLogo(false);
            if (hamburger) setUseLightHamburger(false);
        };
    }, [logo, hamburger, setUseLightLogo, setUseLightHamburger]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !imageRef.current || !containerRef.current) return;

            const section = sectionRef.current;
            const image = imageRef.current;
            const container = containerRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const imageHeight = image.scrollHeight;
            const availableHeight = windowHeight;
            const maxScroll = Math.max(0, imageHeight - availableHeight);

            if (rect.top <= 0 && rect.bottom > windowHeight) {
                container.style.display = 'grid';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';

                const scrollDistance = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);

                const translateY = -Math.min(scrollProgress * maxScroll, maxScroll);
                image.style.transform = `translateY(${translateY}px)`;

            } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
                container.style.display = 'grid';
                container.style.position = 'absolute';
                container.style.top = `${rect.height - windowHeight}px`;
                container.style.left = '0px';

                image.style.transform = `translateY(-${maxScroll}px)`;

            } else if (rect.top > 0) {
                container.style.display = 'grid';
                container.style.position = 'fixed';
                container.style.top = '0px';
                container.style.left = '0px';
                image.style.transform = 'translateY(0px)';

            } else {
                container.style.display = 'none';
            }
        };

        let ticking = false;
        const optimizedScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', optimizedScroll);
    }, [sectionHeight]);

    return (
        <section
            ref={sectionRef}
            className="cover-residency"
            style={{ height: sectionHeight }}
        >
            <div ref={containerRef} className="cover-residency-container">
                <div className="cover-residency-image">
                    <div ref={imageRef} className="image-wrapper">
                        <img 
                            src={residencia.imageR} 
                            alt={residencia.title}
                            className={isImageLoaded ? 'loaded' : ''}
                        />
                    </div>
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

// import { useEffect, useRef, useState } from 'react';
// import { useHeader } from '../../../../contexts/HeaderContext';
// import { useMobile } from '../../../../components/Hooks/useMobile'; 
// import './CoverResidency.css';

// function CoverResidency({ residencia, lightHeader = {} }) {
//     const sectionRef = useRef(null);
//     const imageRef = useRef(null);
//     const containerRef = useRef(null);
//     const imageWrapperRef = useRef(null); 
//     const [sectionHeight, setSectionHeight] = useState('200vh');
//     const [isImageLoaded, setIsImageLoaded] = useState(false);
//     const { setUseLightLogo, setUseLightHamburger, setKeepCartDark } = useHeader();
//     const isMobile = useMobile(); 

//     const { logo = false, hamburger = false } = lightHeader;

//     if (!residencia) return null;

//     useEffect(() => {
//         const calculateHeight = () => {
//             if (imageRef.current) {
//                 const imageHeight = imageRef.current.scrollHeight;
//                 const viewportHeight = window.innerHeight;
//                 const availableHeight = viewportHeight;

//                 if (imageHeight > availableHeight) {
//                     const extraHeight = imageHeight - availableHeight;
//                     const totalHeight = viewportHeight + extraHeight + 20;
//                     setSectionHeight(`${totalHeight}px`);
//                 } else {
//                     setSectionHeight('100vh');
//                 }
//             }
//         };

//         const timer = setTimeout(calculateHeight, 100);
//         window.addEventListener('resize', calculateHeight);

//         return () => {
//             clearTimeout(timer);
//             window.removeEventListener('resize', calculateHeight);
//         };
//     }, [residencia]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsImageLoaded(true);
//         }, 100);

//         return () => clearTimeout(timer);
//     }, []);

//     useEffect(() => {
//         if (!logo && !hamburger) return;

//         const handleScroll = () => {
//             if (isMobile && imageWrapperRef.current) {
//                 const imageWrapper = imageWrapperRef.current;
//                 const rect = imageWrapper.getBoundingClientRect();
//                 const windowHeight = window.innerHeight;
                
//                 const isInImageWrapper = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
                
//                 if (logo) setUseLightLogo(isInImageWrapper);
//                 if (hamburger) setUseLightHamburger(isInImageWrapper);
                
//             } 
//             else if (!isMobile && sectionRef.current && containerRef.current) {
//                 const section = sectionRef.current;
//                 const rect = section.getBoundingClientRect();
//                 const windowHeight = window.innerHeight;

//                 const isInSection = rect.top <= 0 && rect.bottom > 0;

//                 if (logo) setUseLightLogo(isInSection);
//                 if (hamburger) setUseLightHamburger(isInSection);
//             }
//         };

//         if (logo) setUseLightLogo(true);
//         if (hamburger) setUseLightHamburger(true);
//         setKeepCartDark(true); 

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             if (logo) setUseLightLogo(false);
//             if (hamburger) setUseLightHamburger(false);
//             setKeepCartDark(false); 
//         };
//     }, [logo, hamburger, setUseLightLogo, setUseLightHamburger, isMobile, setKeepCartDark]); // Solo añadir isMobile y setKeepCartDark

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!sectionRef.current || !imageRef.current || !containerRef.current) return;

//             const section = sectionRef.current;
//             const image = imageRef.current;
//             const container = containerRef.current;
//             const rect = section.getBoundingClientRect();
//             const windowHeight = window.innerHeight;

//             const imageHeight = image.scrollHeight;
//             const availableHeight = windowHeight;
//             const maxScroll = Math.max(0, imageHeight - availableHeight);

//             if (rect.top <= 0 && rect.bottom > windowHeight) {
//                 container.style.display = 'grid';
//                 container.style.position = 'fixed';
//                 container.style.top = '0px';
//                 container.style.left = '0px';

//                 const scrollDistance = rect.height - windowHeight;
//                 const scrollProgress = Math.abs(rect.top) / Math.max(scrollDistance, 1);

//                 const translateY = -Math.min(scrollProgress * maxScroll, maxScroll);
//                 image.style.transform = `translateY(${translateY}px)`;

//             } else if (rect.bottom <= windowHeight && rect.bottom > 0) {
//                 container.style.display = 'grid';
//                 container.style.position = 'absolute';
//                 container.style.top = `${rect.height - windowHeight}px`;
//                 container.style.left = '0px';

//                 image.style.transform = `translateY(-${maxScroll}px)`;

//             } else if (rect.top > 0) {
//                 container.style.display = 'grid';
//                 container.style.position = 'fixed';
//                 container.style.top = '0px';
//                 container.style.left = '0px';
//                 image.style.transform = 'translateY(0px)';

//             } else {
//                 container.style.display = 'none';
//             }
//         };

//         let ticking = false;
//         const optimizedScroll = () => {
//             if (!ticking) {
//                 requestAnimationFrame(() => {
//                     handleScroll();
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         };

//         window.addEventListener('scroll', optimizedScroll, { passive: true });
//         handleScroll();

//         return () => window.removeEventListener('scroll', optimizedScroll);
//     }, [sectionHeight]);

//     return (
//         <section
//             ref={sectionRef}
//             className="cover-residency"
//             style={{ height: sectionHeight }}
//         >
//             <div ref={containerRef} className="cover-residency-container">
//                 <div className="cover-residency-image">
//                     <div ref={imageWrapperRef} className="image-wrapper"> {/* Solo añadir ref={imageWrapperRef} */}
//                         <img 
//                             src={residencia.imageR} 
//                             alt={residencia.title}
//                             className={isImageLoaded ? 'loaded' : ''}
//                         />
//                     </div>
//                 </div>

//                 <div className="cover-residency-content">
//                     <div className="cover-residency-title">
//                         <h1 dangerouslySetInnerHTML={{ 
//                             __html: residencia.title 
//                         }} />
//                         {residencia.title2 && (
//                             <h2 dangerouslySetInnerHTML={{ 
//                                 __html: residencia.title2 
//                             }} />
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default CoverResidency;