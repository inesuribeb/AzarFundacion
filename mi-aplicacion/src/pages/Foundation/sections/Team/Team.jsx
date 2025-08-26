// import { useState } from 'react';
// import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
// import Texts from '../../../../components/Texts/Texts';
// import './Team.css';

// function Team({ t }) {
//     const [selectedMember, setSelectedMember] = useState(null);
//     const [hoveredMember, setHoveredMember] = useState(null);

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

//     const handleMouseEnter = (member) => {
//         setHoveredMember(member);
//     };

//     const handleMouseLeave = () => {
//         setHoveredMember(null);
//     };

//     const activeMember = hoveredMember || selectedMember;

//     return (
//         <section className='section-team'>
//             <MediumSans
//                 className="team-title">
//                 {t('teamTitle')}
//             </MediumSans>

//             <div className='team-pictures'>
//                 {teamMembers.map((member) => (
//                     <img
//                         key={member.id}
//                         src={member.image}
//                         alt={member.name}
//                         onClick={() => handleMemberClick(member)}
//                         onMouseEnter={() => handleMouseEnter(member)}
//                         onMouseLeave={handleMouseLeave}
//                         className={`team-member ${activeMember
//                             ? activeMember.id === member.id
//                                 ? 'selected'
//                                 : 'not-selected'
//                             : ''
//                             }`}
//                     />
//                 ))}
//             </div>

//             {!activeMember && (
//                 <div className='team-intro'>
//                     <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
//                 </div>
//             )}

//             {activeMember && (
//                 <div className='team-bio'>
//                     <MediumSans
//                         className="member-name"
//                         dangerouslySetInnerHTML={{ __html: activeMember.name }}
//                     />
//                     <MediumSans
//                         className="member-role"
//                         dangerouslySetInnerHTML={{ __html: activeMember.role }}
//                     />

//                     {activeMember.quote &&
//                         activeMember.quote.trim() !== '' &&
//                         !activeMember.quote.endsWith('Quote') && (
//                             <blockquote dangerouslySetInnerHTML={{ __html: activeMember.quote }}></blockquote>
//                         )}

//                     <Texts size="medium" className='member-bio'>
//                         {activeMember.bio}
//                     </Texts>

//                     <cite dangerouslySetInnerHTML={{ __html: activeMember.name }}></cite>
//                 </div>
//             )}
//         </section>
//     );
// }

// export default Team;

import { useState } from 'react';
import MediumSans from '../../../../components/Titles/MediumSans/MediumSans';
import Texts from '../../../../components/Texts/Texts';
import './Team.css';

function Team({ t }) {
    const [selectedMember, setSelectedMember] = useState(null);
    const [hoveredMember, setHoveredMember] = useState(null);

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

    const handleMouseEnter = (member) => {
        // Solo permitir hover si ya hay un miembro seleccionado
        if (selectedMember) {
            setHoveredMember(member);
        }
    };

    const handleMouseLeave = () => {
        setHoveredMember(null);
    };

    // Si hay hover y ya hay selección, mostrar hover. Si no, mostrar selección
    const activeMember = (selectedMember && hoveredMember) ? hoveredMember : selectedMember;

    return (
        <section className='section-team'>
            <MediumSans
                className="team-title">
                {t('teamTitle')}
            </MediumSans>

            <div className='team-pictures'>
                {teamMembers.map((member) => (
                    <img
                        key={member.id}
                        src={member.image}
                        alt={member.name}
                        onClick={() => handleMemberClick(member)}
                        onMouseEnter={() => handleMouseEnter(member)}
                        onMouseLeave={handleMouseLeave}
                        className={`team-member ${activeMember
                            ? activeMember.id === member.id
                                ? 'selected'
                                : 'not-selected'
                            : ''
                            }`}
                    />
                ))}
            </div>

            {!activeMember && (
                <div className='team-intro'>
                    <p dangerouslySetInnerHTML={{ __html: t('knowUs') }}></p>
                </div>
            )}

            {activeMember && (
                <div className='team-bio'>
                    <MediumSans
                        className="member-name"
                        dangerouslySetInnerHTML={{ __html: activeMember.name }}
                    />
                    <MediumSans
                        className="member-role"
                        dangerouslySetInnerHTML={{ __html: activeMember.role }}
                    />

                    {activeMember.quote &&
                        activeMember.quote.trim() !== '' &&
                        !activeMember.quote.endsWith('Quote') && (
                            <blockquote dangerouslySetInnerHTML={{ __html: activeMember.quote }}></blockquote>
                        )}

                    <Texts size="medium" className='member-bio'>
                        {activeMember.bio}
                    </Texts>

                    <cite dangerouslySetInnerHTML={{ __html: activeMember.name }}></cite>
                </div>
            )}
        </section>
    );
}

export default Team;