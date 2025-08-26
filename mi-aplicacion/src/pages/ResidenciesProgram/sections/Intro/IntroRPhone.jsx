import MiniBlue from '../../../../components/Titles/MiniBlue/MiniBlue';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './IntroRPhone.css';

function IntroRPhone({ t }) {
    return (
        <section className='introR-phone'>
            <div className='introR-content'>
                <div className='introR-titles'>
                    <MiniBlue>{t('residenciesProgramMini')}</MiniBlue>
                    <MediumSans>{t('introTitle')}</MediumSans>
                </div>
                <div className='introR-image'>
                    {/* <img src="/Images/ResidenciesProgram/Intro/bodegon-ivan.png" alt="" /> */}
                    <img src="/Images/Publications/Publication01/Residencias-1.jpg" alt="" />
                </div>
                <div className='introR-text'>
                    <Texts>{t('introText')}</Texts>
                </div>
            </div>
            {/* <div className='introR-image'>
                <img src="/Images/ResidenciesProgram/Intro/bodegon-ivan.png" alt="" />
            </div> */}
        </section>
    );
}

export default IntroRPhone;