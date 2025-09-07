export const mockExhibitionsData = [
    {
        id: "expo-1",
        // image: "/Images/Exhibitions/Exhibition01/HeaderArchivo.png",
        imageRef: "/Images/Residencies/Residency01/Expo1.jpg",
        image: "/Images/Exhibitions/Exhibition01/Cover-expo1.jpg",
        imageDetail: "/Images/Exhibitions/Exhibition01/expo2025-4.jpg",
        imageDetail2: "/Images/Exhibitions/Exhibition01/expo2025-1.jpg",
        imagesAuthor: "Nerea Moreno",
        title: {
            es: "Expo Residencia2025",
            en: "Residency2025 Expo",
            pt: "Expo Residência2025"
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

        className: "exhibition-card",
        year: 2025,
        startDate: "2025-03-15",
        endDate: "2025-05-15",
        residencias: ["residencia-1"],
        publicaciones: ["pub-1"],
        collectiveArtPiece: ["artPiece-1"],

        introTitle: {
            es: '',
            en: '',
            pt: '',
        },

        intro: {
            es: "Durante la Expo Residencia2025 organizamos una sesión de lecturas muy especial. Los escritores residentes Florencia del Campo («autorrelato»), Mireya Hernández (prosa) y Gonzalo Quincoces (guion cinematográfico), tomaron la palabra para compartir fragmentos de los textos que desarrollaron durante su estancia en la residencia.",
            en: "During Expo Residencia2025 we organized a very special reading session. The resident writers Florencia del Campo (autobiographical writing), Mireya Hernández (prose), and Gonzalo Quincoces (screenplay) took the floor to share excerpts from the texts they developed during their stay at the residency.",
            pt: "Durante a Expo Residência2025 organizámos uma sessão de leituras muito especial. Os escritores residentes Florencia del Campo («autorrelato»), Mireya Hernández (prosa) e Gonzalo Quincoces (roteiro cinematográfico) tomaram a palavra para compartilhar trechos dos textos que desenvolveram durante a sua estadia na residência.",
        },

        presentations: [
            {
                id: 1,
                artist: 'María Gallemí',
                title: {
                    es: 'Presentación con María Gallemí',
                    en: 'Presentation with María Gallemí',
                    pt: 'Apresentação com María Gallemí'
                },
                text: {
                    es: 'Nuestra residente Maria Gallemí presentó el proceso de su proyecto «Escorça». Su investigación gira en torno a la repostería como herramienta de búsqueda y exploración.<br/><br/>Gallemí tomó fotografías del entorno de Finca El Azahar —como líquenes, reflejos de luz o las crestas de los gallos— que le sirvieron como punto de partida visual para lo que luego desarrollaría en la cocina: una repostería innovadora donde no priman ingredientes como la harina o el azúcar, sino la experiencia de la novedad en el paladar y el ritual del postre compartido.<br/><br/>Para la Expo, creó un rincón que reunía las fotografías de sus referencias y los postres desarrollados, ademas de una pequeña instalación comestible que difuminaba los límites entre la naturaleza y lo culinario.',
                    en: 'Our resident Maria Gallemí presented the process behind her project «Escorça». Her research revolves around pastry as a tool for inquiry and exploration.<br/><br/>Gallemí took photographs of the surroundings of Finca El Azahar —such as lichens, light reflections, or rooster crests— which served as a visual starting point for what she would later develop in the kitchen: an innovative pastry where ingredients like flour or sugar are not the main focus, but rather the experience of novelty on the palate and the ritual of sharing dessert.<br/><br/>For the Expo, she created a corner that brought together the photographs of her references and the pastries she developed, along with a small edible installation that blurred the boundaries between nature and the culinary.',
                    pt: 'Nossa residente Maria Gallemí apresentou o processo do seu projeto «Escorça». Sua pesquisa gira em torno da confeitaria como ferramenta de busca e exploração.<br/><br/>Gallemí tirou fotografias do entorno da Finca El Azahar —como líquenes, reflexos de luz ou as cristas dos galos— que lhe serviram de ponto de partida visual para o que depois desenvolveria na cozinha: uma confeitaria inovadora em que ingredientes como a farinha ou o açúcar não são o principal, mas sim a experiência da novidade no paladar e o ritual da sobremesa compartilhada.<br/><br/>Para a Expo, criou um espaço que reunia as fotografias de suas referências e as sobremesas desenvolvidas, além de uma pequena instalação comestível que desfocava os limites entre a natureza e o culinário.'
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-3.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-4.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-5.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-6.jpg",
                ]
            },
            {
                id: 2,
                artist: 'María Esteve',
                title: {
                    es: 'Presentación con María Esteve',
                    en: 'Presentation with María Esteve',
                    pt: 'Apresentação com María Esteve'
                },
                text: {
                    es: 'María Esteve presentó «Donde la tierra habla», un conjunto de obras sobre papel y tela, acompañado de un vídeo que documentaba su proceso.<br/><br/>A través de la técnica del frottage, María registró las texturas del paisaje que rodea Finca El Azahar y las minas a cielo abierto en Las Villuercas.<br/><br/>Su trabajo parte del contacto directo con la tierra, donde el papel y las telas se transforman en cartografías y memoria de esa naturaleza.',
                    en: 'María Esteve presented «Where the Earth Speaks», a series of works on paper and fabric, accompanied by a video documenting her process.<br/><br/>Through the frottage technique, María captured the textures of the landscape surrounding Finca El Azahar and the open-pit mines in Las Villuercas.<br/><br/>Her work stems from direct contact with the earth, where paper and fabrics are transformed into cartographies and memories of that nature.',
                    pt: 'María Esteve apresentou «Onde a Terra Fala», um conjunto de obras sobre papel e tecido, acompanhado por um vídeo que documentava o seu processo.<br/><br/>Através da técnica do frottage, María registou as texturas da paisagem que rodeia a Finca El Azahar e as minas a céu aberto em Las Villuercas.<br/><br/>O seu trabalho parte do contacto direto com a terra, onde o papel e os tecidos se transformam em cartografias e memórias dessa natureza.'
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-3.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-4.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-5.jpg",
                ]
            },
        ],

        preSaleTitle: {
            es: 'Preventa <em>Una residencia narrada por: Iván Floro</em>',
            en: 'Pre-sale <em>A Residency Narrated by: Iván Floro</em>',
            pt: 'Pré-venda <em>Uma Residência Narrada por: Iván Floro</em>',
        },

        preSaleText: {
            es: 'También se expuso «Una residencia narrada por Ivan Floro» inaugura nuestra serie editorial, en la que cada año invitamos a un artista a convertirse en testigo y cronista de la residencia. En este libro encontraréis todos los óleos realizados por Ivan durante su estancia, cada uno pintado del natural: desde retratos y bodegones, hasta atmósferas y paisajes. Disponible para su compra online a partir de septiembre.',
            en: 'Also presented, «A Residency Narrated by Ivan Floro» inaugurates our editorial series, in which each year we invite an artist to become both witness and chronicler of the residency. In this book you will find all the oil paintings created by Ivan during his stay, each painted from life: from portraits and still lifes to atmospheres and landscapes. Available for online purchase starting in September.',
            pt: 'Também foi apresentado «Uma Residência Narrada por Ivan Floro», que inaugura a nossa série editorial, na qual todos os anos convidamos um artista a tornar-se testemunha e cronista da residência. Neste livro encontram-se todas as pinturas a óleo realizadas por Ivan durante a sua estadia, cada uma pintada ao natural: desde retratos e naturezas-mortas até atmosferas e paisagens. Disponível para compra online a partir de setembro.'
        },
    },
    // {
    //     id: "expo-2", 
    //     image: "/Images/Residencies/Residency02/prueba4.PNG",

    //     title: {
    //         es: "Territorios Urbanos",
    //         en: "Urban Territories",
    //         pt: "Territórios Urbanos"
    //     },
    //     subtitle: {
    //         es: "Exposición • Abril 2025",
    //         en: "Exhibition • April 2025",
    //         pt: "Exposição • Abril 2025"
    //     },
    //     venue: {
    //         es: "Centro de Arte Moderno, Madrid",
    //         en: "Modern Art Center, Madrid",
    //         pt: "Centro de Arte Moderno, Madrid"
    //     },
    //     curator: {
    //         es: "Luis Martínez",
    //         en: "Luis Martínez",
    //         pt: "Luis Martínez"
    //     },
    //     description: {
    //         es: "Exposición sobre intervenciones artísticas en contexto urbano",
    //         en: "Exhibition about artistic interventions in urban context",
    //         pt: "Exposição sobre intervenções artísticas em contexto urbano"
    //     },

    //     className: "exhibition-card",
    //     year: 2025,
    //     startDate: "2025-04-10",
    //     endDate: "2025-06-10",
    //     residencias: ["residencia-2"],
    //     publicaciones: ["pub-2"],
    //     collectiveArtPiece: ["artPiece-2"]
    // },
    // {
    //     id: "expo-3", 
    //     image: "/Images/Residencies/Residency02/prueba5.PNG",

    //     title: {
    //         es: "Territorios Urbanos",
    //         en: "Urban Territories",
    //         pt: "Territórios Urbanos"
    //     },
    //     subtitle: {
    //         es: "Exposición • Abril 2025",
    //         en: "Exhibition • April 2025",
    //         pt: "Exposição • Abril 2025"
    //     },
    //     venue: {
    //         es: "Centro de Arte Moderno, Madrid",
    //         en: "Modern Art Center, Madrid",
    //         pt: "Centro de Arte Moderno, Madrid"
    //     },
    //     curator: {
    //         es: "Luis Martínez",
    //         en: "Luis Martínez",
    //         pt: "Luis Martínez"
    //     },
    //     description: {
    //         es: "Exposición sobre intervenciones artísticas en contexto urbano",
    //         en: "Exhibition about artistic interventions in urban context",
    //         pt: "Exposição sobre intervenções artísticas em contexto urbano"
    //     },

    //     className: "exhibition-card",
    //     year: 2025,
    //     startDate: "2025-04-10",
    //     endDate: "2025-06-10",
    //     residencias: ["residencia-2"],
    //     publicaciones: ["pub-2"],
    //     collectiveArtPiece: ["artPiece-2"]
    // },
    // {
    //     id: "expo-4", 
    //     image: "/Images/Residencies/Residency02/prueba6.PNG",

    //     title: {
    //         es: "Territorios Urbanos",
    //         en: "Urban Territories",
    //         pt: "Territórios Urbanos"
    //     },
    //     subtitle: {
    //         es: "Exposición • Abril 2025",
    //         en: "Exhibition • April 2025",
    //         pt: "Exposição • Abril 2025"
    //     },
    //     venue: {
    //         es: "Centro de Arte Moderno, Madrid",
    //         en: "Modern Art Center, Madrid",
    //         pt: "Centro de Arte Moderno, Madrid"
    //     },
    //     curator: {
    //         es: "Luis Martínez",
    //         en: "Luis Martínez",
    //         pt: "Luis Martínez"
    //     },
    //     description: {
    //         es: "Exposición sobre intervenciones artísticas en contexto urbano",
    //         en: "Exhibition about artistic interventions in urban context",
    //         pt: "Exposição sobre intervenções artísticas em contexto urbano"
    //     },

    //     className: "exhibition-card",
    //     year: 2025,
    //     startDate: "2025-04-10",
    //     endDate: "2025-06-10",
    //     residencias: ["residencia-2"],
    //     publicaciones: ["pub-2"],
    //     collectiveArtPiece: ["artPiece-2"]
    // }
]