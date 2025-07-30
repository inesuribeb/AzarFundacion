// mockArtPiecesData.js

export const mockArtPiecesData = [
    {
        id: "artPiece-1",
        image: "/Images/ArtPieces/ArtPiece01/artpiece01-01.png",
        title: "Obra Colectiva Enero 2025",
        subtitle: "Instalación • Finca El Azahar",
        onClick: () => console.log("Click en Obra Colectiva Enero 2025"),
        className: "artpiece-card",
        // Datos adicionales
        year: 2025,
        type: "Instalación",
        location: "Finca El Azahar, Trujillo",
        description: "Obra colectiva resultado de la residencia de enero",
        residencias: ["residencia-1"], // IDs relacionados
        publicaciones: ["pub-1"],
        exposiciones: ["expo-1"]
    },
    {
        id: "artPiece-2", 
        image: "/Images/ArtPieces/ArtPiece02/artpiece02-01.png",
        title: "Intervención Urbana Madrid",
        subtitle: "Performance • Madrid Centro",
        onClick: () => console.log("Click en Intervención Urbana Madrid"),
        className: "artpiece-card",
        // Datos adicionales
        year: 2025,
        type: "Performance",
        location: "Madrid Centro",
        description: "Performance colectiva en espacio urbano",
        residencias: ["residencia-2"],
        publicaciones: ["pub-2"],
        exposiciones: ["expo-2"]
    }
]