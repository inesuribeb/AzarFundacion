// mockResidencias.js

export const mockResidencias = [
    {
        id: "residencia-1",
        image: "/Images/Residencies/Residency01/residency01-01.png",
        title: "Residencia Enero 2025",
        subtitle: "Trujillo, Extremadura • Enero 2025",
        onClick: () => console.log("Click en Residencia Finca El Azahar"),
        className: "residencia-card",
        // Datos adicionales para futuras relaciones
        year: 2025,
        location: "Trujillo, Extremadura",
        description: "Programa de residencia en agricultura regenerativa y permacultura",
        publicaciones: ["pub-1"], // IDs relacionados
        exposiciones: ["expo-1"],
        collectiveArtPiece: ["artPiece-1"],
    },
    {
        id: "residencia-2", 
        image: "/Images/Residencies/Residency01/residency01-02.png",
        title: "Residencia Urbana Madrid",
        subtitle: "Madrid, España • 2025",
        onClick: () => console.log("Click en Residencia Madrid"),
        className: "residencia-card",
        // Datos adicionales
        year: 2025,
        location: "Madrid, España", 
        description: "Residencia artística en contexto urbano",
        publicaciones: ["pub-2"],
        exposiciones: ["expo-2"],
        collectiveArtPiece: ["artPiece-2"],
    }
]