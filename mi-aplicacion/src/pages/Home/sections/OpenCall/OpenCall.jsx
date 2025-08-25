import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import './OpenCall.css'

function OpenCall({ t }) {
    return (
        <section className='OpenCall-section'>
            {/* <h1>OpenCall</h1> */}
            <MediumSans>{t('openCall')}</MediumSans>

        </section>
    )
}

export default OpenCall;