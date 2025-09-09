// import { useState } from 'react';
// import { usePresentationModal } from '../../../../contexts/PresentationModalContext';
// import Carrusel from './components/Carrusel';
// import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
// import Texts from '../../../../components/Texts/Texts';
// import './TeamPhone.css';

// function TeamPhone({ t }) {
//     const [selectedMember, setSelectedMember] = useState(null);

//     if (!t || typeof t !== 'function') {
//         return <div>Cargando información del equipo...</div>;
//     }

//     const teamMembers = [
//         {
//             id: 'nathalie',
//             image: '/Images/Team/Nathalie.jpeg',
//             name: t('nathalieName'),
//             role: t('nathalieRole'),
//             bio: t('nathalieBio'),
//             quote: t('nathalieQuote'),
//         },
//         {
//             id: 'denis',
//             image: '/Images/Team/Dennis.jpeg',
//             name: t('denisName'),
//             role: t('denisRole'),
//             bio: t('denisBio'),
//             quote: t('denisQuote'),
//         },
//         {
//             id: 'paula',
//             image: '/Images/Team/Paula.jpg',
//             name: t('paulaName'),
//             role: t('paulaRole'),
//             bio: t('paulaBio'),
//             quote: t('paulaQuote'),
//         }
//     ];

//     const handleMemberClick = (member) => {
//         setSelectedMember(selectedMember?.id === member.id ? null : member);
//     };

//     return (
//         <div className="team-phone">
//             <div className="team-phone-intro">
//                 <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
//             </div>

//             <Carrusel
//                 items={teamMembers}
//                 onItemClick={handleMemberClick}
//                 selectedItem={selectedMember}
//             />

//             {selectedMember && (
//                 <div className="team-phone-bio">
//                     {selectedMember.quote &&
//                         selectedMember.quote.trim() !== '' &&
//                         !selectedMember.quote.endsWith('Quote') && (
//                             <blockquote dangerouslySetInnerHTML={{ __html: selectedMember.quote }}></blockquote>
//                         )}

//                     <Texts size="medium">
//                         {selectedMember.bio}
//                     </Texts>

//                     <cite dangerouslySetInnerHTML={{ __html: selectedMember.name }}></cite>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default TeamPhone;

import { useState } from 'react';
import { usePresentationModal } from '../../../../contexts/PresentationModalContext';
import './TeamPhone.css';

function TeamPhone({ t }) {
    const { openModal } = usePresentationModal();

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
        const memberForModal = {
            id: member.id,
            images: [member.image],
            title: {
                es: member.name,
                en: member.name,
                pt: member.name
            },
            text: {
                es: `<span class="modal-member-role">${member.role}</span><br><br>${member.quote && member.quote.trim() !== '' && !member.quote.endsWith('Quote') ? `<span class="modal-member-quote">"${member.quote}"</span><br><br>` : ''}${member.bio}`,
                en: `<span class="modal-member-role">${member.role}</span><br><br>${member.quote && member.quote.trim() !== '' && !member.quote.endsWith('Quote') ? `<span class="modal-member-quote">"${member.quote}"</span><br><br>` : ''}${member.bio}`,
                pt: `<span class="modal-member-role">${member.role}</span><br><br>${member.quote && member.quote.trim() !== '' && !member.quote.endsWith('Quote') ? `<span class="modal-member-quote">"${member.quote}"</span><br><br>` : ''}${member.bio}`
            }
        };

        openModal(memberForModal);
    };

    return (
        <div className="team-phone">
            <div className="team-phone-intro">
                <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
            </div>

            <div className="team-cards-container">
                {teamMembers.map((member, index) => (
                    <div 
                        key={member.id}
                        className={`team-member-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
                        onClick={() => handleMemberClick(member)}
                    >
                        <div className="card-content-phone">
                            <div className="text-section">
                                <div className="member-role-phone">
                                    {member.role}
                                </div>
                                <div className="member-name-phone">
                                    {member.name}
                                </div>
                            </div>

                            <div className="image-section">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="member-image-phone"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamPhone;