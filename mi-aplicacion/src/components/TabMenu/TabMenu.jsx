import { useState } from 'react';
import './TabMenu.css';

function TabMenu({ t, onTabChange, activeTab }) {
    const tabs = [
        { id: 'exhibitions', label: t('exhibitions') },
        { id: 'collectiveArtPieces', label: t('collectiveArtPieces') },
        { id: 'publications', label: t('publications') },
        { id: 'collaborations', label: t('collaborations') }
    ];

    return (
        <div className="tab-menu">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onTabChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export default TabMenu;