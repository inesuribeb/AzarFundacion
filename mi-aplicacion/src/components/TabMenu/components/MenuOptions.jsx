import './MenuOptions.css';

function MenuOptions({ tabs, activeTab, onOptionSelect, onClose }) {
    return (
        <>
            <div className="menu-overlay" onClick={onClose}></div>
            
            <div className="menu-options">
                {/* <div className="menu-header">
                    <button className="close-button" onClick={onClose}>
                        ✕
                    </button>
                </div> */}
                
                <div className="options-list">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`menu-option ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => onOptionSelect(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenuOptions;