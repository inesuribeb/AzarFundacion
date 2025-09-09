// esta sin blanco el header
// import { useState } from 'react';
// import MenuOptions from './components/MenuOptions';
// import './TabMenuPhone.css';

// function TabMenuPhone({ t, onTabChange, activeTab, lightHeader = {} }) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const tabs = [
// { id: 'all', label: t('all') },
//         { id: 'exhibitions', label: t('exhibitions') },
//         { id: 'collectiveArtPieces', label: t('collectiveArtPieces') },
//         { id: 'publications', label: t('publications') },
//         { id: 'collaborations', label: t('collaborations') }
//     ];

//     const handleMenuToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleOptionSelect = (tabId) => {
//         onTabChange(tabId);
//         setIsMenuOpen(false);
//     };

//     const getActiveTabLabel = () => {
//         const activeTabData = tabs.find(tab => tab.id === activeTab);
//         return activeTabData ? activeTabData.label : tabs[0].label;
//     };

//     return (
//         <div className='tabMenu-phone'>
//             <button 
//                 className='hamburger-archive'
//                 onClick={handleMenuToggle}
//             >
//                 <span className='hamburger-icon'>▼</span>
//                 <span className='archive-text'>{t('archive')}</span>
//             </button>

//             <div className='current-selection'>
//                 {getActiveTabLabel()}
//             </div>

//             {isMenuOpen && (
//                 <MenuOptions
//                     tabs={tabs}
//                     activeTab={activeTab}
//                     onOptionSelect={handleOptionSelect}
//                     onClose={() => setIsMenuOpen(false)}
//                 />
//             )}
//         </div>
//     );
// }

// export default TabMenuPhone;

// esta con header blanco
import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../contexts/HeaderContext';
import MenuOptions from './components/MenuOptions';
import './TabMenuPhone.css';

function TabMenuPhone({ t, onTabChange, activeTab, lightHeader = {} }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sectionRef = useRef(null);
    const { setUseLightLogo, setUseLightHamburger } = useHeader();
    const { logo = false, hamburger = false } = lightHeader;

    const tabs = [
        { id: 'all', label: t('all') },
        { id: 'exhibitions', label: t('exhibitions') },
        { id: 'collectiveArtPieces', label: t('collectiveArtPieces') },
        { id: 'publications', label: t('publications') },
        { id: 'collaborations', label: t('collaborations') }
    ];

    // useEffect(() => {
    //     if (!logo && !hamburger) return;

    //     const handleScroll = () => {
    //         if (!sectionRef.current) return;

    //         const section = sectionRef.current;
    //         const rect = section.getBoundingClientRect();
    //         const isInSection = rect.top <= 0 && rect.bottom > 0;

    //         if (logo) setUseLightLogo(isInSection);
    //         if (hamburger) setUseLightHamburger(isInSection);
    //     };

    //     if (logo) setUseLightLogo(true);
    //     if (hamburger) setUseLightHamburger(true);

    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         if (logo) setUseLightLogo(false);
    //         if (hamburger) setUseLightHamburger(false);
    //     };
    // }, [logo, hamburger, setUseLightLogo, setUseLightHamburger]);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleOptionSelect = (tabId) => {
        onTabChange(tabId);
        setIsMenuOpen(false);
    };

    const getActiveTabLabel = () => {
        const activeTabData = tabs.find(tab => tab.id === activeTab);
        return activeTabData ? activeTabData.label : tabs[0].label;
    };

    return (
        <div ref={sectionRef} className='tabMenu-phone'>
            <button
                className='hamburger-archive'
                onClick={handleMenuToggle}
            >
                <span className='hamburger-icon'>▼</span>
                <span className='archive-text'>{t('archive')}:</span>
            </button>

            <div className='current-selection'>
                {getActiveTabLabel()}
            </div>

            {isMenuOpen && (
                <MenuOptions
                    tabs={tabs}
                    activeTab={activeTab}
                    onOptionSelect={handleOptionSelect}
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
        </div>

    );
}

export default TabMenuPhone;