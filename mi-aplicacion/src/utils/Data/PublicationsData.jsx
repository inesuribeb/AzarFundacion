// mockPublicationsData.js

// export const mockPublicationsData = [
//     {
//         id: "pub-1",
//         image: "/Images/Publications/Publication01/pub01-01.jpg",
//         title: "Catálogo Residencia Enero 2025",
//         subtitle: "Publicación • 64 páginas",
//         onClick: () => console.log("Click en Catálogo Residencia Enero 2025"),
//         className: "publication-card",
//         year: 2025,
//         type: "Catálogo",
//         pages: 64,
//         format: "21x29.7 cm",
//         description: "Documentación completa de la residencia de enero en Finca El Azahar",
//         residencias: ["residencia-1"],
//         exposiciones: ["expo-1"],
//         collectiveArtPiece: ["artPiece-1"]
//     },
//     {
//         id: "pub-2", 
//         image: "/Images/Publications/Publication02/pub02-01.png",
//         title: "Zine Urbano Madrid",
//         subtitle: "Fanzine • 32 páginas",
//         onClick: () => console.log("Click en Zine Urbano Madrid"),
//         className: "publication-card",
//         year: 2025,
//         type: "Fanzine",
//         pages: 32,
//         format: "A5",
//         description: "Publicación experimental sobre la intervención urbana",
//         residencias: ["residencia-2"],
//         exposiciones: ["expo-2"],
//         collectiveArtPiece: ["artPiece-2"]
//     }
// ]

// mockPublicationsData.js

export const mockPublicationsData = [
    {
        id: "pub-1",
        image: "/Images/Publications/Publication01/pub01-01.jpg",
        
        // Contenido traducible
        title: {
            es: "Catálogo Residencia Enero 2025",
            en: "January 2025 Residency Catalog",
            pt: "Catálogo Residência Janeiro 2025"
        },
        subtitle: {
            es: "Publicación • 64 páginas",
            en: "Publication • 64 pages",
            pt: "Publicação • 64 páginas"
        },
        type: {
            es: "Catálogo",
            en: "Catalog",
            pt: "Catálogo"
        },
        description: {
            es: "Documentación completa de la residencia de enero en Finca El Azahar",
            en: "Complete documentation of the January residency at Finca El Azahar",
            pt: "Documentação completa da residência de janeiro na Finca El Azahar"
        },
        
        // Datos no traducibles
        onClick: () => console.log("Click en Catálogo Residencia Enero 2025"),
        className: "publication-card",
        year: 2025,
        pages: 64,
        format: "21x29.7 cm",
        residencias: ["residencia-1"],
        exposiciones: ["expo-1"],
        collectiveArtPiece: ["artPiece-1"]
    },
    {
        id: "pub-2", 
        image: "/Images/Publications/Publication02/pub02-01.png",
        
        title: {
            es: "Zine Urbano Madrid",
            en: "Madrid Urban Zine",
            pt: "Zine Urbano Madrid"
        },
        subtitle: {
            es: "Fanzine • 32 páginas",
            en: "Fanzine • 32 pages",
            pt: "Fanzine • 32 páginas"
        },
        type: {
            es: "Fanzine",
            en: "Fanzine",
            pt: "Fanzine"
        },
        description: {
            es: "Publicación experimental sobre la intervención urbana",
            en: "Experimental publication about urban intervention",
            pt: "Publicação experimental sobre intervenção urbana"
        },
        
        onClick: () => console.log("Click en Zine Urbano Madrid"),
        className: "publication-card",
        year: 2025,
        pages: 32,
        format: "A5",
        residencias: ["residencia-2"],
        exposiciones: ["expo-2"],
        collectiveArtPiece: ["artPiece-2"]
    }
]