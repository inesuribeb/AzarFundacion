import Requirements from './Requirements';
import Jurado from './Jurado';
import './OpenCallR.css'

function OpenCallR({ t }) {
    return (
        <section className='open-call-section'>
            <Requirements t={t} />
            <Jurado t={t} />
        </section>
    )
}

export default OpenCallR;