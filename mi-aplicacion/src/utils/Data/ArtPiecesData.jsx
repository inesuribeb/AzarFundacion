// mockArtPiecesData.js

// export const mockArtPiecesData = [
//     {
//         id: "artPiece-1",
//         image: "/Images/ArtPieces/ArtPiece01/artpiece01-01.png",
//         title: "Obra Colectiva Enero 2025",
//         subtitle: "Instalación • Finca El Azahar",
//         onClick: () => console.log("Click en Obra Colectiva Enero 2025"),
//         className: "artpiece-card",
//         year: 2025,
//         type: "Instalación",
//         location: "Finca El Azahar, Trujillo",
//         description: "Obra colectiva resultado de la residencia de enero",
//         residencias: ["residencia-1"], 
//         publicaciones: ["pub-1"],
//         exposiciones: ["expo-1"]
//     },
//     {
//         id: "artPiece-2", 
//         image: "/Images/ArtPieces/ArtPiece02/artpiece02-01.png",
//         title: "Intervención Urbana Madrid",
//         subtitle: "Performance • Madrid Centro",
//         onClick: () => console.log("Click en Intervención Urbana Madrid"),
//         className: "artpiece-card",
//         year: 2025,
//         type: "Performance",
//         location: "Madrid Centro",
//         description: "Performance colectiva en espacio urbano",
//         residencias: ["residencia-2"],
//         publicaciones: ["pub-2"],
//         exposiciones: ["expo-2"]
//     }
// ]

// mockArtPiecesData.js

export const mockArtPiecesData = [
    {
        id: "artPiece-1",
        image: "/Images/ArtPieces/ArtPiece01/artpiece01-01.png",
        
        // Contenido traducible
        title: {
            es: "Obra Colectiva Enero 2025",
            en: "January 2025 Collective Work",
            pt: "Obra Coletiva Janeiro 2025"
        },
        subtitle: {
            es: "Instalación • Finca El Azahar",
            en: "Installation • Finca El Azahar",
            pt: "Instalação • Finca El Azahar"
        },
        type: {
            es: "Instalación",
            en: "Installation",
            pt: "Instalação"
        },
        location: {
            es: "Finca El Azahar, Trujillo",
            en: "Finca El Azahar, Trujillo",
            pt: "Finca El Azahar, Trujillo"
        },
        description: {
            es: "Obra colectiva resultado de la residencia de enero",
            en: "Collective work resulting from the January residency",
            pt: "Obra coletiva resultante da residência de janeiro"
        },
        
        // Datos no traducibles
        onClick: () => console.log("Click en Obra Colectiva Enero 2025"),
        className: "artpiece-card",
        year: 2025,
        residencias: ["residencia-1"], 
        publicaciones: ["pub-1"],
        exposiciones: ["expo-1"]
    },
    {
        id: "artPiece-2", 
        image: "/Images/ArtPieces/ArtPiece02/artpiece02-01.png",
        
        title: {
            es: "Intervención Urbana Madrid",
            en: "Madrid Urban Intervention",
            pt: "Intervenção Urbana Madrid"
        },
        subtitle: {
            es: "Performance • Madrid Centro",
            en: "Performance • Madrid Center",
            pt: "Performance • Madrid Centro"
        },
        type: {
            es: "Performance",
            en: "Performance",
            pt: "Performance"
        },
        location: {
            es: "Madrid Centro",
            en: "Madrid Center",
            pt: "Madrid Centro"
        },
        description: {
            es: "Performance colectiva en espacio urbano",
            en: "Collective performance in urban space",
            pt: "Performance coletiva em espaço urbano"
        },
        
        onClick: () => console.log("Click en Intervención Urbana Madrid"),
        className: "artpiece-card",
        year: 2025,
        residencias: ["residencia-2"],
        publicaciones: ["pub-2"],
        exposiciones: ["expo-2"]
    }
]