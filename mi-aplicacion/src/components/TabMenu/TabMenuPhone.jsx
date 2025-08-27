import { useState } from 'react';
import MenuOptions from './components/MenuOptions';
import './TabMenuPhone.css';

function TabMenuPhone({ t, onTabChange, activeTab }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tabs = [
        { id: 'exhibitions', label: t('exhibitions') },
        { id: 'collectiveArtPieces', label: t('collectiveArtPieces') },
        { id: 'publications', label: t('publications') },
        { id: 'collaborations', label: t('collaborations') }
    ];

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
        <div className='tabMenu-phone'>
            <button 
                className='hamburger-archive'
                onClick={handleMenuToggle}
            >
                <span className='hamburger-icon'>▼</span>
                <span className='archive-text'>{t('archive')}</span>
                {/* <span className='archive-text'>{t('otherActivities')}</span> */}

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