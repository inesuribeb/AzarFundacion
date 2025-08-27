import PhoneSlider from '../../../../components/PhoneSlider/PhoneSlider';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './FincaPhone.css';

function FincaPhone({t}) {
    const fincaImages = [
        {
            id: '01',
            image: '/Images/Finca/Nuevas/fincaNew-2.jpg',
        },
        {
            id: '02',
            image: '/Images/Finca/Nuevas/fincaNew-1.jpg',
        },
        // {
        //     id: '02',
        //     image: '/Images/Finca/Nuevas/fincaNew-2.jpg',
        // },
        {
            id: '03',
            image: '/Images/Finca/Nuevas/fincaNew-3.jpg',
        },
        {
            id: '04',
            image: '/Images/Finca/Nuevas/fincaNew-4.jpg',
        },
        {
            id: '05',
            image: '/Images/Finca/Nuevas/fincaNew-5.jpg',
        },
        {
            id: '06',
            image: '/Images/Finca/Nuevas/fincaNew-6.jpg',
        },
    ];
    return (
        <section className='section-Finca-Phone'>
            <MediumSans>{t('finca')}</MediumSans>

            <PhoneSlider images={fincaImages} />
            <Texts  className='finca-text-phone'>{t('fincaText')}</Texts>

        </section>
    );
}

export default FincaPhone;