// mockExhibitionsData.js

export const mockExhibitionsData = [
    {
        id: "expo-1",
        image: "/Images/Exhibitions/Exhibition01/HeaderArchivo.png",
        title: "Raíces Regenerativas",
        subtitle: "Exposición • Marzo 2025",
        onClick: () => console.log("Click en Raíces Regenerativas"),
        className: "exhibition-card",
        // Datos adicionales
        year: 2025,
        startDate: "2025-03-15",
        endDate: "2025-05-15",
        venue: "Galería Contemporánea, Madrid",
        curator: "Ana García",
        description: "Muestra resultado de la residencia en Finca El Azahar",
        residencias: ["residencia-1"], // IDs relacionados
        publicaciones: ["pub-1"],
        collectiveArtPiece: ["artPiece-1"]
    },
    {
        id: "expo-2", 
        image: "/Images/Exhibitions/Exhibition02/exhibition02-01.png",
        title: "Territorios Urbanos",
        subtitle: "Exposición • Abril 2025",
        onClick: () => console.log("Click en Territorios Urbanos"),
        className: "exhibition-card",
        // Datos adicionales
        year: 2025,
        startDate: "2025-04-10",
        endDate: "2025-06-10",
        venue: "Centro de Arte Moderno, Madrid",
        curator: "Luis Martínez",
        description: "Exposición sobre intervenciones artísticas en contexto urbano",
        residencias: ["residencia-2"],
        publicaciones: ["pub-2"],
        collectiveArtPiece: ["artPiece-2"]
    }
]