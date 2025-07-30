import { mockResidencias } from '../../../../utils/Data/ResidenciesData';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Grid from '../../../../components/Grid/Grid';
import './PastResidencies.css'

function PastResidencies({ t }) {
    return (
        <section className='past-residencies-section'>
            <MediumSans>{t('previousResidencies')}</MediumSans>

            <Grid cards={mockResidencias} className="past-residencies-grid" />
        </section>
    )
}

export default PastResidencies;