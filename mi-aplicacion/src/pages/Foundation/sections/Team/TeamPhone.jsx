import { useState } from 'react';
import Carrusel from './components/Carrusel';
import Texts from '../../../../components/Texts/Texts';
import './TeamPhone.css';

function TeamPhone({ t }) {
    const [selectedMember, setSelectedMember] = useState(null);

    if (!t || typeof t !== 'function') {
        return <div>Cargando información del equipo...</div>;
    }

    const teamMembers = [
        {
            id: 'nathalie',
            image: '/Images/Team/Nathalie.jpeg',
            name: t('nathalieName'),
            role: t('nathalieRole'),
            bio: t('nathalieBio'),
            quote: t('nathalieQuote'),
        },
        {
            id: 'denis',
            image: '/Images/Team/Dennis.jpeg',
            name: t('denisName'),
            role: t('denisRole'),
            bio: t('denisBio'),
            quote: t('denisQuote'),
        },
        {
            id: 'paula',
            image: '/Images/Team/Paula.jpg',
            name: t('paulaName'),
            role: t('paulaRole'),
            bio: t('paulaBio'),
            quote: t('paulaQuote'),
        }
    ];

    const handleMemberClick = (member) => {
        setSelectedMember(selectedMember?.id === member.id ? null : member);
    };

    return (
        <div className="team-phone">
            <div className="team-phone-intro">
                <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
            </div>

            <Carrusel
                items={teamMembers}
                onItemClick={handleMemberClick}
                selectedItem={selectedMember}
            />

            {selectedMember && (
                <div className="team-phone-bio">
                    {selectedMember.quote &&
                        selectedMember.quote.trim() !== '' &&
                        !selectedMember.quote.endsWith('Quote') && (
                            <blockquote dangerouslySetInnerHTML={{ __html: selectedMember.quote }}></blockquote>
                        )}

                    <Texts size="medium">
                        {selectedMember.bio}
                    </Texts>

                    <cite dangerouslySetInnerHTML={{ __html: selectedMember.name }}></cite>
                </div>
            )}
        </div>
    );
}

export default TeamPhone;