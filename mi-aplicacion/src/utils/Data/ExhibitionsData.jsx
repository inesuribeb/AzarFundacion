// export const mockExhibitionsData = [
//     {
//         id: "expo-1",
//         image: "/Images/Exhibitions/Exhibition01/HeaderArchivo.png",
//         title: "Raíces Regenerativas",
//         subtitle: "Exposición • Marzo 2025",
//         onClick: () => console.log("Click en Raíces Regenerativas"),
//         className: "exhibition-card",
//         year: 2025,
//         startDate: "2025-03-15",
//         endDate: "2025-05-15",
//         venue: "Galería Contemporánea, Madrid",
//         curator: "Ana García",
//         description: "Muestra resultado de la residencia en Finca El Azahar",
//         residencias: ["residencia-1"], 
//         publicaciones: ["pub-1"],
//         collectiveArtPiece: ["artPiece-1"]
//     },
//     {
//         id: "expo-2", 
//         image: "/Images/Exhibitions/Exhibition02/exhibition02-01.png",
//         title: "Territorios Urbanos",
//         subtitle: "Exposición • Abril 2025",
//         onClick: () => console.log("Click en Territorios Urbanos"),
//         className: "exhibition-card",
//         year: 2025,
//         startDate: "2025-04-10",
//         endDate: "2025-06-10",
//         venue: "Centro de Arte Moderno, Madrid",
//         curator: "Luis Martínez",
//         description: "Exposición sobre intervenciones artísticas en contexto urbano",
//         residencias: ["residencia-2"],
//         publicaciones: ["pub-2"],
//         collectiveArtPiece: ["artPiece-2"]
//     }
// ]

// mockExhibitionsData.js

export const mockExhibitionsData = [
    {
        id: "expo-1",
        image: "/Images/Exhibitions/Exhibition01/HeaderArchivo.png",
        
        // Contenido traducible
        title: {
            es: "Raíces Regenerativas",
            en: "Regenerative Roots",
            pt: "Raízes Regenerativas"
        },
        subtitle: {
            es: "Exposición • Marzo 2025",
            en: "Exhibition • March 2025",
            pt: "Exposição • Março 2025"
        },
        venue: {
            es: "Galería Contemporánea, Madrid",
            en: "Contemporary Gallery, Madrid",
            pt: "Galeria Contemporânea, Madrid"
        },
        curator: {
            es: "Ana García",
            en: "Ana García",
            pt: "Ana García"
        },
        description: {
            es: "Muestra resultado de la residencia en Finca El Azahar",
            en: "Exhibition showcasing the results of the residency at Finca El Azahar",
            pt: "Mostra dos resultados da residência na Finca El Azahar"
        },
        
        // Datos no traducibles
        onClick: () => console.log("Click en Raíces Regenerativas"),
        className: "exhibition-card",
        year: 2025,
        startDate: "2025-03-15",
        endDate: "2025-05-15",
        residencias: ["residencia-1"], 
        publicaciones: ["pub-1"],
        collectiveArtPiece: ["artPiece-1"]
    },
    {
        id: "expo-2", 
        image: "/Images/Residencies/Residency02/prueba4.PNG",
        
        title: {
            es: "Territorios Urbanos",
            en: "Urban Territories",
            pt: "Territórios Urbanos"
        },
        subtitle: {
            es: "Exposición • Abril 2025",
            en: "Exhibition • April 2025",
            pt: "Exposição • Abril 2025"
        },
        venue: {
            es: "Centro de Arte Moderno, Madrid",
            en: "Modern Art Center, Madrid",
            pt: "Centro de Arte Moderno, Madrid"
        },
        curator: {
            es: "Luis Martínez",
            en: "Luis Martínez",
            pt: "Luis Martínez"
        },
        description: {
            es: "Exposición sobre intervenciones artísticas en contexto urbano",
            en: "Exhibition about artistic interventions in urban context",
            pt: "Exposição sobre intervenções artísticas em contexto urbano"
        },
        
        onClick: () => console.log("Click en Territorios Urbanos"),
        className: "exhibition-card",
        year: 2025,
        startDate: "2025-04-10",
        endDate: "2025-06-10",
        residencias: ["residencia-2"],
        publicaciones: ["pub-2"],
        collectiveArtPiece: ["artPiece-2"]
    },
    {
        id: "expo-3", 
        image: "/Images/Residencies/Residency02/prueba5.PNG",
        
        title: {
            es: "Territorios Urbanos",
            en: "Urban Territories",
            pt: "Territórios Urbanos"
        },
        subtitle: {
            es: "Exposición • Abril 2025",
            en: "Exhibition • April 2025",
            pt: "Exposição • Abril 2025"
        },
        venue: {
            es: "Centro de Arte Moderno, Madrid",
            en: "Modern Art Center, Madrid",
            pt: "Centro de Arte Moderno, Madrid"
        },
        curator: {
            es: "Luis Martínez",
            en: "Luis Martínez",
            pt: "Luis Martínez"
        },
        description: {
            es: "Exposición sobre intervenciones artísticas en contexto urbano",
            en: "Exhibition about artistic interventions in urban context",
            pt: "Exposição sobre intervenções artísticas em contexto urbano"
        },
        
        onClick: () => console.log("Click en Territorios Urbanos"),
        className: "exhibition-card",
        year: 2025,
        startDate: "2025-04-10",
        endDate: "2025-06-10",
        residencias: ["residencia-2"],
        publicaciones: ["pub-2"],
        collectiveArtPiece: ["artPiece-2"]
    },
    {
        id: "expo-4", 
        image: "/Images/Residencies/Residency02/prueba6.PNG",
        
        title: {
            es: "Territorios Urbanos",
            en: "Urban Territories",
            pt: "Territórios Urbanos"
        },
        subtitle: {
            es: "Exposición • Abril 2025",
            en: "Exhibition • April 2025",
            pt: "Exposição • Abril 2025"
        },
        venue: {
            es: "Centro de Arte Moderno, Madrid",
            en: "Modern Art Center, Madrid",
            pt: "Centro de Arte Moderno, Madrid"
        },
        curator: {
            es: "Luis Martínez",
            en: "Luis Martínez",
            pt: "Luis Martínez"
        },
        description: {
            es: "Exposición sobre intervenciones artísticas en contexto urbano",
            en: "Exhibition about artistic interventions in urban context",
            pt: "Exposição sobre intervenções artísticas em contexto urbano"
        },
        
        onClick: () => console.log("Click en Territorios Urbanos"),
        className: "exhibition-card",
        year: 2025,
        startDate: "2025-04-10",
        endDate: "2025-06-10",
        residencias: ["residencia-2"],
        publicaciones: ["pub-2"],
        collectiveArtPiece: ["artPiece-2"]
    }
]