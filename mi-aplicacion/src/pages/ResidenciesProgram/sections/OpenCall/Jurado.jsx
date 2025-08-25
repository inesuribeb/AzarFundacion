import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import './Jurado.css'

function Jurado({ t }) {
    return (
        <div className='jurado-section'>
            <MediumSans>{t('juryR')}</MediumSans>

        </div>
    )
}

export default Jurado;