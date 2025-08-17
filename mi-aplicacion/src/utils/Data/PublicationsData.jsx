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

// mockPublicationsData.js

export const mockPublicationsData = [
    {
        id: "pub-1",
        number: "01", // ✅ Número de publicación
        images: [
            "/Images/Publications/Publication01/pub01-01.jpg",
            "/Images/Publications/Publication02/pub02-01.png",
        ],
        price: "€45.00", // ✅ Precio añadido
        
        // Contenido traducible
        title: {
            es: "Una residencia narrada por: Ivan Floro",
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
        info: {
            es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat turpis sit amet lacus facilisis, et fermentum risus pretium. Curabitur accumsan felis vel mauris malesuada, at sodales nunc facilisis. Sed ultricies sapien ut dui luctus, nec dictum mi viverra. Integer at libero vitae justo convallis blandit. Suspendisse potenti, vitae feugiat sapien fringilla ut.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ligula sit amet risus laoreet ultricies. Sed in porta elit. Quisque et feugiat libero. Integer aliquet, mi sed fermentum luctus, neque lacus venenatis magna, ac pharetra eros felis sed lectus. Suspendisse sagittis nunc eu justo hendrerit tempus vitae.',
            en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat turpis sit amet lacus facilisis, et fermentum risus pretium. Curabitur accumsan felis vel mauris malesuada, at sodales nunc facilisis. Sed ultricies sapien ut dui luctus, nec dictum mi viverra. Integer at libero vitae justo convallis blandit. Suspendisse potenti, vitae feugiat sapien fringilla ut.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ligula sit amet risus laoreet ultricies. Sed in porta elit. Quisque et feugiat libero. Integer aliquet, mi sed fermentum luctus, neque lacus venenatis magna, ac pharetra eros felis sed lectus. Suspendisse sagittis nunc eu justo hendrerit tempus vitae.',
            pt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat turpis sit amet lacus facilisis, et fermentum risus pretium. Curabitur accumsan felis vel mauris malesuada, at sodales nunc facilisis. Sed ultricies sapien ut dui luctus, nec dictum mi viverra. Integer at libero vitae justo convallis blandit. Suspendisse potenti, vitae feugiat sapien fringilla ut.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ligula sit amet risus laoreet ultricies. Sed in porta elit. Quisque et feugiat libero. Integer aliquet, mi sed fermentum luctus, neque lacus venenatis magna, ac pharetra eros felis sed lectus. Suspendisse sagittis nunc eu justo hendrerit tempus vitae.'
        },
        
        // Datos no traducibles
        // onClick: () => console.log("Click en Catálogo Residencia Enero 2025"),
        className: "publication-card",
        year: 2025,
        pages: 64,
        format: "21x29.7 cm",
        residencias: ["residencia-1"],
        exposiciones: ["expo-1"],
        collectiveArtPiece: ["artPiece-1"],
        detailImages: [
            "/Images/Publications/Publication01/pub01-01.jpg",
            "/Images/Publications/Publication02/pub02-01.png",
            "/Images/Publications/Publication02/pub02-01.png",
        ],
    },
    {
        id: "pub-2", 
        number: "02", // ✅ Número de publicación
        images: [
            "/Images/Publications/Publication02/pub02-01.png",
            "/Images/Publications/Publication01/pub01-01.jpg",
        ],
        price: "€25.00", // ✅ Precio añadido
        
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
    },
    // {
    //     id: "pub-3", 
    //     number: "03", 
    //     images: [
    //         "/Images/Publications/Publication03/pub03-01.png",
    //         "/Images/Publications/Publication03/pub03-02.png"
    //     ],
    //     price: "€35.00", 
        
    //     title: {
    //         es: "Memorias Rurales",
    //         en: "Rural Memories",
    //         pt: "Memórias Rurais"
    //     },
    //     subtitle: {
    //         es: "Libro de artista • 48 páginas",
    //         en: "Artist book • 48 pages",
    //         pt: "Livro de artista • 48 páginas"
    //     },
    //     type: {
    //         es: "Libro de artista",
    //         en: "Artist book",
    //         pt: "Livro de artista"
    //     },
    //     description: {
    //         es: "Reflexiones sobre la conexión entre arte y naturaleza",
    //         en: "Reflections on the connection between art and nature",
    //         pt: "Reflexões sobre a conexão entre arte e natureza"
    //     },
        
    //     onClick: () => console.log("Click en Memorias Rurales"),
    //     className: "publication-card",
    //     year: 2025,
    //     pages: 48,
    //     format: "17x24 cm",
    //     residencias: ["residencia-3"],
    //     exposiciones: ["expo-3"],
    //     collectiveArtPiece: ["artPiece-3"]
    // }
]