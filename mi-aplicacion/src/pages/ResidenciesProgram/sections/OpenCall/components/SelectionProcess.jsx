import MediumSans from '../../../../../components/Titles/MediumSans/MediumSans';
import './SelectionProcess.css';

function SelectionProcess({ t }) {
    return (
        <div className="selection-process-content">
            <h2>{t('selectionProcessTitle')}</h2>
            
            <div className="requirements-section">
                <div className="requirements-title">{t('requirements')}</div>
                <ul className="requirements-list">
                    <li>{t('ageRequirement')}</li>
                    <li>{t('residencyRequirement')}</li>
                </ul>
            </div>
            
            <div className="documentation-section">
                <div className="documentation-title">{t('documentation')}</div>
                <ul className="documentation-list">
                    <li>{t('portfolioRequirement')}</li>
                    <li>{t('applicationLetter')}</li>
                </ul>
            </div>
            
            <div className="jury-section">
                <div className="jury-title">{t('juryAndSelection')}</div>
                <p className="jury-description">
                    {t('juryEvaluation')}
                </p>
                <p className="jury-description">
                    {t('selectedArtists')}
                </p>
            </div>
        </div>
    );
}

export default SelectionProcess;