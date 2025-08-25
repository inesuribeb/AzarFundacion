import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import './Requirements.css'

function Requirements({ t }) {
    return (
        <div className='requirements-section'>
            {/* <MediumSans className='finca-section-title'>{t('requirements')}</MediumSans> */}
            <MediumSans>{t('requirements')}</MediumSans>
        </div>
    )
}

export default Requirements;