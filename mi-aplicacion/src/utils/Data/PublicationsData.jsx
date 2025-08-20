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
        cover: "/Images/Publications/Publication01/portada.png",
        images: [
            "/Images/Publications/Publication01/pub01-01.jpg",
            "/Images/Publications/Publication02/pub02-01.png",
        ],
        price: "€45.00", // ✅ Precio añadido

        // Contenido traducible
        title: {
            es: "Una residencia narrada por: Ivan Floro",
            en: "A Residency Narrated by: Ivan Floro",
            pt: "Uma residência narrada por: Ivan Floro"
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
            es: 'Con el comienzo del programa de residencias de Fundación Azar, surge también el deseo de contarlas desde dentro. Para ello, Fundación Azar lanza la serie editorial Una residencia narrada por, en la que cada año, un artista es invitado a convivir con los residentes y convertir su mirada en relato. <br/><br/>Ivan Floro fue elegido para ser testigo y cronista visual de esta primera edición. Durante tres semanas, se confundió con los residentes, adentrándose en sus días y procesos creativos, compartiendo sobremesas y silencios, observando los rincones y paisajes. Con sus bártulos siempre a cuestas, se propuso pintar todo del natural: “sin recurrir a la fotografía como punto de partida y, así, devolverle al óleo su antiguo cometido: capturar el momento”. <br/><br/>Las obras que conforman esta serie, ahora también recogidas en el libro Una residencia narrada por Ivan Floro, son el testimonio pictórico de esta convivencia. <br/><br/> Pintor autodidacta y de talento polivalente, Ivan Floro (1993, Mataró) revitaliza el uso del óleo como medio expresivo para construir una visión tan personal como generacional. Su obra ha sido presentada en espacios expositivos tanto a nivel nacional como internacional. Entre sus proyectos más recientes destacan la muestra permanente en Flamenco de Leones (2023, Madrid) y su participación en Nouvelle Scène Impressionniste Espagnole en el Spacejunk Art Center en 2023 (Grenoble y Lyon, Francia) y en Realism Now en el Museo Europeo de Arte Moderno en 2024 (Barcelona). Su práctica se extiende también al muralismo, con intervenciones en el paisaje urbano de España, Estados Unidos, Italia y Egipto. Las obras de Ivan Floro también han protagonizado la dirección visual de El Madrileño, álbum y serie de lanzamientos de C. Tangana en colaboración con Sony en 2021.',
            en: 'With the start of Fundación Azar’s residency program, the desire also arises to tell its story from within. To this end, Fundación Azar launches the editorial series A Residency Narrated by, in which each year an artist is invited to live with the residents and turn their gaze into a narrative. <br/><br/>Ivan Floro was chosen to be the witness and visual chronicler of this first edition. For three weeks, he blended in with the residents, immersing himself in their days and creative processes, sharing meals and silences, observing corners and landscapes. Always carrying his tools with him, he set out to paint everything from life: “without resorting to photography as a starting point and thus returning oil painting to its original purpose: to capture the moment.” <br/><br/>The works that make up this series, now also collected in the book A Residency Narrated by Ivan Floro, are the pictorial testimony of this coexistence. <br/><br/> A self-taught painter with versatile talent, Ivan Floro (1993, Mataró) revitalizes the use of oil paint as an expressive medium to build a vision that is both personal and generational. His work has been presented in exhibition spaces both nationally and internationally. Among his most recent projects are the permanent exhibition at Flamenco de Leones (2023, Madrid) and his participation in Nouvelle Scène Impressionniste Espagnole at the Spacejunk Art Center in 2023 (Grenoble and Lyon, France), as well as in Realism Now at the European Museum of Modern Art in 2024 (Barcelona). His practice also extends to muralism, with interventions in the urban landscape of Spain, the United States, Italy, and Egypt. Ivan Floro’s works also played a leading role in the visual direction of El Madrileño, the album and series of releases by C. Tangana in collaboration with Sony in 2021.',
            pt: 'Com o início do programa de residências da Fundação Azar, surge também o desejo de contá-las desde dentro. Para isso, a Fundação Azar lança a série editorial Uma residência narrada por, na qual, a cada ano, um artista é convidado a conviver com os residentes e transformar seu olhar em relato. <br/><br/>Ivan Floro foi escolhido para ser o testemunho e cronista visual desta primeira edição. Durante três semanas, confundiu-se com os residentes, mergulhando em seus dias e processos criativos, compartilhando refeições e silêncios, observando cantos e paisagens. Sempre com seus materiais à mão, propôs-se a pintar tudo do natural: “sem recorrer à fotografia como ponto de partida e, assim, devolver à pintura a óleo sua antiga missão: capturar o momento”. <br/><br/>As obras que compõem esta série, agora também reunidas no livro Uma residência narrada por Ivan Floro, são o testemunho pictórico desta convivência. <br/><br/> Pintor autodidata e de talento polivalente, Ivan Floro (1993, Mataró) revitaliza o uso do óleo como meio expressivo para construir uma visão tão pessoal quanto geracional. Sua obra foi apresentada em espaços expositivos tanto a nível nacional quanto internacional. Entre seus projetos mais recentes destacam-se a mostra permanente no Flamenco de Leones (2023, Madri) e sua participação em Nouvelle Scène Impressionniste Espagnole no Spacejunk Art Center em 2023 (Grenoble e Lyon, França) e em Realism Now no Museu Europeu de Arte Moderna em 2024 (Barcelona). Sua prática também se estende ao muralismo, com intervenções na paisagem urbana da Espanha, Estados Unidos, Itália e Egito. As obras de Ivan Floro também protagonizaram a direção visual de El Madrileño, álbum e série de lançamentos de C. Tangana em colaboração com a Sony em 2021.'
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
            "/Images/Publications/Publication01/Publicaciones-1.jpg",
            "/Images/Publications/Publication02/pub02-01.png",
            "/Images/Publications/Publication01/Residencias-1.jpg",
        ],
    },
    {
        id: "pub-2",
        number: "02", // ✅ Número de publicación
        cover: "/Images/Publications/Publication02/pub02-01.png",
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