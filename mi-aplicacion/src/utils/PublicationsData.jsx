// mockPublicationsData.js

export const mockPublicationsData = [
    {
        id: "pub-1",
        image: "/Images/Publications/Publication01/pub01-01.jpg",
        title: "Catálogo Residencia Enero 2025",
        subtitle: "Publicación • 64 páginas",
        onClick: () => console.log("Click en Catálogo Residencia Enero 2025"),
        className: "publication-card",
        // Datos adicionales
        year: 2025,
        type: "Catálogo",
        pages: 64,
        format: "21x29.7 cm",
        description: "Documentación completa de la residencia de enero en Finca El Azahar",
        residencias: ["residencia-1"], // IDs relacionados
        exposiciones: ["expo-1"],
        collectiveArtPiece: ["artPiece-1"]
    },
    {
        id: "pub-2", 
        image: "/Images/Publications/Publication02/pub02-01.png",
        title: "Zine Urbano Madrid",
        subtitle: "Fanzine • 32 páginas",
        onClick: () => console.log("Click en Zine Urbano Madrid"),
        className: "publication-card",
        // Datos adicionales
        year: 2025,
        type: "Fanzine",
        pages: 32,
        format: "A5",
        description: "Publicación experimental sobre la intervención urbana",
        residencias: ["residencia-2"],
        exposiciones: ["expo-2"],
        collectiveArtPiece: ["artPiece-2"]
    }
]