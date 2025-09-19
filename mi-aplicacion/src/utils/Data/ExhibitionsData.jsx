export const mockExhibitionsData = [
    {
        id: "expo-1",
        // image: "/Images/Exhibitions/Exhibition01/HeaderArchivo.png",
        imageRef: "/Images/Residencies/Residency01/Expo1.jpg",
        image: "/Images/Exhibitions/Exhibition01/Cover-expo1.jpg",
        imageDetail: "/Images/Exhibitions/Exhibition01/expo2025-4.jpg",
        imageDetail2: "/Images/Exhibitions/Exhibition01/expo2025-1.jpg",
        bgImage: "/Images/Exhibitions/Exhibition01/bgExpo2025.jpg",
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
            es: "Muestra de la Residencia2025 en Madrid",
            en: "Sample of Residencia2025 in Madrid",
            pt: "Exposição da Residência2025 em Madrid"
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
            es: 'Con motivo de recoger todo lo ocurrido durante la residencia y dar a conocer el trabajo de Fundación Azar y de sus residentes, en junio de 2025 se celebró en Madrid la Expo Residencia2025, que reunió a más de 400 visitantes. <br/><br/>Durante dos jornadas, una antigua cristalería de 300 m² en el centro de Madrid acogió un programa que incluyó lecturas, presentaciones de investigaciones y obras individuales, la muestra de la obra colectiva y la preventa del libro <em>Una residencia narrada por Ivan Floro.</em> ',
            en: 'In order to showcase everything that took place during the residency and to present the work of Fundación Azar and its residents, the Expo Residencia2025 was held in Madrid in June 2025, bringing together more than 400 visitors. <br/><br/>Over the course of two days, a former 300 m² glass factory in the center of Madrid hosted a program that included readings, research presentations, individual works, the exhibition of the collective piece, and the pre-sale of the book <em>A residency narrated by Ivan Floro.</em>',
            pt: 'Com o objetivo de reunir tudo o que aconteceu durante a residência e divulgar o trabalho da Fundação Azar e dos seus residentes, em junho de 2025 realizou-se em Madrid a Expo Residencia2025, que reuniu mais de 400 visitantes. <br/><br/>Ao longo de dois dias, uma antiga cristaleira de 300 m² no centro de Madrid acolheu um programa que incluiu leituras, apresentações de pesquisas e obras individuais, a exposição da obra coletiva e a pré-venda do livro <em>Uma residência narrada por Ivan Floro.</em>',
        },

        intro2: {
            es: "Durante la Expo Residencia2025 organizamos una sesión de lecturas muy especial. Los escritores residentes Florencia del Campo («autorrelato»), Mireya Hernández (prosa) y Gonzalo Quincoces (guion cinematográfico), tomaron la palabra para compartir fragmentos de los textos que desarrollaron durante su estancia en la residencia.",
            en: "During Expo Residencia2025 we organized a very special reading session. The resident writers Florencia del Campo (autobiographical writing), Mireya Hernández (prose), and Gonzalo Quincoces (screenplay) took the floor to share excerpts from the texts they developed during their stay at the residency.",
            pt: "Durante a Expo Residência2025 organizámos uma sessão de leituras muito especial. Os escritores residentes Florencia del Campo («autorrelato»), Mireya Hernández (prosa) e Gonzalo Quincoces (roteiro cinematográfico) tomaram a palavra para compartilhar trechos dos textos que desenvolveram durante a sua estadia na residência.",
        },

        presentations: [
            {
                id: 1,
                artist: 'Florencia del Campo',
                title: {
                    es: 'Lectura por Florencia del Campo',
                    en: 'Reading by Florencia del Campo',
                    pt: 'Leitura de Florencia del Campo'
                },
                text: {
                    es: 'Florencia del Campo compartió un fragmento cargado de fuerza y crudeza de <em>El nombre impropio</em>, una de las cinco partes que conforman su proyecto de no ficción <em>Diarios colaterales</em>. ',
                    en: 'Florencia del Campo shared a fragment full of strength and rawness from <em>El nombre impropio</em>, one of the five parts that make up her non-fiction project <em>Diarios colaterales</em>.',
                    pt: 'Florencia del Campo compartilhou um fragmento carregado de força e crueza de <em>El nombre improprio</em>, uma das cinco partes que compõem seu projeto de não ficção <em>Diarios colaterales</em>.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-Florencia-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Florencia-2.jpg",
                ]
            },
            {
                id: 2,
                artist: 'Mireya Hernández',
                title: {
                    es: 'Lectura por Mireya Hernández',
                    en: 'Reading by Mireya Hernández',
                    pt: 'Leitura de Mireya Hernández'
                },
                text: {
                    // es: 'Durante la Residencia 2025, Mireya Hernández continuó trabajando en el proyecto <em>El lenguaje de las moscas</em>, en el que ya venía desarrollando trabajo previo a su estadía. <br/><br/>Lo pulió, lo desbrozó y encontró la puerta que le quedaba por abrir para concluirlo. Aún es un proyecto en proceso, pero en Finca El Azahar estuvo más cerca de convertirse en el <em>collage</em> que se intuía desde el principio: una obra heterogénea que parte de la observación, defiende lo imperfecto y lo incompleto, fomenta combinaciones inesperadas y hace del desvío su piedra angular.<br/><br/>Mireya nos deleitó con dos prosas que recogían inspiración y memorias de dentro y fuera de la residencia.',
                    // en: 'During the 2025 Residency, Mireya Hernández continued working on the project <em>The Language of Flies</em>, which she had already begun developing prior to her stay. <br/><br/>She refined it, cleared it, and found the door that remained to be opened in order to conclude it. It is still a work in progress, but at Finca El Azahar it came closer to becoming the <em>collage</em> that had been intuited from the beginning: a heterogeneous piece that stems from observation, embraces the imperfect and the incomplete, encourages unexpected combinations, and makes deviation its cornerstone.<br/><br/>Mireya delighted us with two prose texts that captured inspiration and memories from both inside and outside the residency.',
                    // pt: 'Durante a Residência 2025, Mireya Hernández continuou a trabalhar no projeto <em>A Linguagem das Moscas</em>, no qual já vinha desenvolvendo trabalho antes da sua estadia. <br/><br/>Poliu-o, desbastou-o e encontrou a porta que ainda faltava abrir para concluí-lo. Continua a ser um projeto em processo, mas na Finca El Azahar esteve mais perto de se transformar no <em>collage</em> que se intuía desde o início: uma obra heterogênea que parte da observação, defende o imperfeito e o incompleto, promove combinações inesperadas e faz do desvio a sua pedra angular.<br/><br/>Mireya encantou-nos com duas prosas que recolhiam inspirações e memórias de dentro e de fora da residência.',

                    es: 'Mireya Hernández escogió para su lectura dos prosas de su proyecto en curso <em>El lenguaje de las moscas</em>. Estos textos recogían inspiración y memorias tanto de dentro como de fuera de la residencia, asociando y entrelazando los pequeños detalles que conforman su forma de ver el mundo.',
                    en: 'Mireya Hernández chose for her reading two prose pieces from her ongoing project <em>El lenguaje de las moscas</em>. These texts drew on inspiration and memories both from within and outside the residency, associating and intertwining the small details that shape her way of seeing the world.',
                    pt: 'Mireya Hernández escolheu para a sua leitura duas prosas de seu projeto em andamento <em>El lenguaje de las moscas</em>. Esses textos recolhiam inspiração e memórias tanto de dentro quanto de fora da residência, associando e entrelaçando os pequenos detalhes que formam sua maneira de ver o mundo.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-Mireya-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Mireya-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Mireya-3.jpg",
                ]
            },
            {
                id: 3,
                artist: 'Gonzalo Quincoces',
                title: {
                    es: 'Lectura por Gonzalo Quincoces',
                    en: 'Reading by Gonzalo Quincoces',
                    pt: 'Leitura de Gonzalo Quincoces'
                },
                text: {
                    // es: 'Gonzalo Quincoces presentó el inicio del guión de <em>La noche del coche rojo</em>, su próximo largometraje aún en desarrollo.<br/><br/>Este proyecto tiene como escenario una turbia y grisácea Bizkaia, marcada por los conflictos sociales y el terrorismo de los años 80, un contexto que ya exploró en su anterior cortometraje <em>La caída del vencejo</em>. La residencia le permitió profundizar en la dirección de este guión y afianzar la propuesta de dirección del proyecto.',
                    // en: 'Gonzalo Quincoces presented the beginning of the script for <em>The Night of the Red Car</em>, his upcoming feature film still in development.<br/><br/>This project is set in a murky, grayish Bizkaia, marked by the social conflicts and terrorism of the 1980s, a context he had already explored in his previous short film <em>The Fall of the Swift</em>. The residency allowed him to delve deeper into the direction of this script and to strengthen the directorial approach of the project.',
                    // pt: 'Gonzalo Quincoces apresentou o início do guião de <em>A Noite do Carro Vermelho</em>, a sua próxima longa-metragem ainda em desenvolvimento.<br/><br/>Este projeto tem como cenário uma Bizkaia turva e acinzentada, marcada pelos conflitos sociais e pelo terrorismo dos anos 80, um contexto que já havia explorado na sua curta-metragem anterior <em>A Queda do Andorinhão</em>. A residência permitiu-lhe aprofundar a direção deste guião e consolidar a proposta de realização do projeto.',

                    es: 'Gonzalo Quincoces leyó con brío las primeras secuencias de su guión <em>La noche del coche rojo</em>, su primer largometraje en desarrollo, transportando a los oyentes a una turbia y grisácea Vizcaya de los años 80.',
                    en: 'Gonzalo Quincoces read with vigor the opening sequences of his script <em>La noche del coche rojo</em>, his first feature film in development, transporting the audience to a murky and grayish Biscay of the 1980s.',
                    pt: 'Gonzalo Quincoces leu com ímpeto as primeiras sequências de seu roteiro <em>La noche del coche rojo</em>, seu primeiro longa-metragem em desenvolvimento, transportando os ouvintes para uma turva e acinzentada Biscaia dos anos 80.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-Quincoces-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Quincoces-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Quincoces-3.jpg",
                ]
            },
            {
                id: 4,
                artist: 'Maria Gallemí',
                title: {
                    es: 'Presentación con María Gallemí',
                    en: 'Presentation with María Gallemí',
                    pt: 'Apresentação com María Gallemí'
                },
                text: {
                    // es: 'Nuestra residente Maria Gallemí presentó el proceso de su proyecto «Escorça». Su investigación gira en torno a la repostería como herramienta de búsqueda y exploración.<br/><br/>Gallemí tomó fotografías del entorno de Finca El Azahar —como líquenes, reflejos de luz o las crestas de los gallos— que le sirvieron como punto de partida visual para lo que luego desarrollaría en la cocina: una repostería innovadora donde no priman ingredientes como la harina o el azúcar, sino la experiencia de la novedad en el paladar y el ritual del postre compartido.<br/><br/>Para la Expo, creó un rincón que reunía las fotografías de sus referencias y los postres desarrollados, ademas de una pequeña instalación comestible que difuminaba los límites entre la naturaleza y lo culinario.',
                    // en: 'Our resident Maria Gallemí presented the process behind her project «Escorça». Her research revolves around pastry as a tool for inquiry and exploration.<br/><br/>Gallemí took photographs of the surroundings of Finca El Azahar —such as lichens, light reflections, or rooster crests— which served as a visual starting point for what she would later develop in the kitchen: an innovative pastry where ingredients like flour or sugar are not the main focus, but rather the experience of novelty on the palate and the ritual of sharing dessert.<br/><br/>For the Expo, she created a corner that brought together the photographs of her references and the pastries she developed, along with a small edible installation that blurred the boundaries between nature and the culinary.',
                    // pt: 'Nossa residente Maria Gallemí apresentou o processo do seu projeto «Escorça». Sua pesquisa gira em torno da confeitaria como ferramenta de busca e exploração.<br/><br/>Gallemí tirou fotografias do entorno da Finca El Azahar —como líquenes, reflexos de luz ou as cristas dos galos— que lhe serviram de ponto de partida visual para o que depois desenvolveria na cozinha: uma confeitaria inovadora em que ingredientes como a farinha ou o açúcar não são o principal, mas sim a experiência da novidade no paladar e o ritual da sobremesa compartilhada.<br/><br/>Para a Expo, criou um espaço que reunia as fotografias de suas referências e as sobremesas desenvolvidas, além de uma pequena instalação comestível que desfocava os limites entre a natureza e o culinário.'

                    es: 'Maria Gallemí sorprendió con un espacio en el que la repostería se convirtió en herramienta conceptual de búsqueda y exploración. Su instalación incluía fotografías de sus referencias y los postres desarrollados durante la residencia, además de una deliciosa instalación comestible que difuminaba los límites entre la naturaleza y lo culinario.',
                    en: 'Maria Gallemí surprised with a space where pastry became a conceptual tool for research and exploration. Her installation included photographs of her references and the desserts developed during the residency, as well as a delicious edible installation that blurred the boundaries between nature and the culinary.',
                    pt: 'Maria Gallemí surpreendeu com um espaço em que a confeitaria se tornou uma ferramenta conceitual de busca e exploração. Sua instalação incluía fotografias de suas referências e as sobremesas desenvolvidas durante a residência, além de uma deliciosa instalação comestível que desfocava os limites entre a natureza e o culinário.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-7.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-3.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-4.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-5.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-6.jpg",
                ]
            },
            {
                id: 5,
                artist: 'María Esteve',
                title: {
                    es: 'Presentación con María Esteve',
                    en: 'Presentation with María Esteve',
                    pt: 'Apresentação com María Esteve'
                },
                text: {
                    // es: 'María Esteve presentó <em>Donde la tierra habla</em>, un conjunto de obras sobre papel y tela, acompañado de un vídeo que documentaba su proceso.<br/><br/>Para María, un nuevo territorio despierta estímulos y sensaciones inéditas. La primera mirada, la sorpresa y la exploración de lo desconocido resultan esenciales en esta experiencia. Diversas expediciones y paseos le permitieron conocer y sentir el entorno, adoptando el caminar como una práctica artística guiada por la intuición y la confianza.<br/><br/>A través de la técnica del <em>frottage</em>, María registró las texturas del paisaje que rodea Finca El Azahar y las minas a cielo abierto en Las Villuercas. Su trabajo parte del contacto directo con la tierra, donde el papel y las telas se transforman en cartografías y memoria de esa naturaleza.',
                    // en: 'María Esteve presented <em>Where the Earth Speaks</em>, a series of works on paper and fabric, accompanied by a video documenting her process.<br/><br/>For María, a new territory awakens stimuli and unprecedented sensations. The first gaze, surprise, and the exploration of the unknown are essential to this experience. Various expeditions and walks allowed her to get to know and feel the environment, adopting walking as an artistic practice guided by intuition and trust.<br/><br/>Through the technique of <em>frottage</em>, María captured the textures of the landscape surrounding Finca El Azahar and the open-pit mines in Las Villuercas. Her work stems from direct contact with the earth, where paper and fabrics are transformed into cartographies and memory of that nature.',
                    // pt: 'María Esteve apresentou <em>Onde a Terra Fala</em>, um conjunto de obras sobre papel e tecido, acompanhado de um vídeo que documentava o seu processo.<br/><br/>Para María, um novo território desperta estímulos e sensações inéditas. O primeiro olhar, a surpresa e a exploração do desconhecido são essenciais nesta experiência. Diversas expedições e passeios permitiram-lhe conhecer e sentir o ambiente, adotando a caminhada como prática artística guiada pela intuição e pela confiança.<br/><br/>Através da técnica do <em>frottage</em>, María registou as texturas da paisagem que rodeia a Finca El Azahar e as minas a céu aberto em Las Villuercas. O seu trabalho parte do contacto direto com a terra, onde o papel e os tecidos se transformam em cartografias e memória dessa natureza.',

                    es: 'María Esteve transformó una sala en un nuevo territorio titulado <em>Donde la tierra habla</em>, a partir de un registro de texturas del paisaje y un video que mostraba sus procesos en los parajes que rodean Finca El Azahar y en las minas a cielo abierto de Las Villuercas. A través de la técnica del <em>frottage</em> y el contacto directo con la tierra, el papel y las telas se convirtieron en cartografías y memoria de esa naturaleza.',
                    en: 'María Esteve transformed a room into a new territory entitled <em>Donde la tierra habla</em>, based on a record of landscape textures and a video showing her processes in the surroundings of Finca El Azahar and in the open-pit mines of Las Villuercas. Through the technique of <em>frottage</em> and direct contact with the earth, paper and fabrics became cartographies and memory of that nature.',
                    pt: 'María Esteve transformou uma sala em um novo território intitulado <em>Donde la tierra habla</em>, a partir de um registro de texturas da paisagem e de um vídeo que mostrava seus processos nos arredores da Finca El Azahar e nas minas a céu aberto de Las Villuercas. Através da técnica do <em>frottage</em> e do contato direto com a terra, o papel e os tecidos se transformaram em cartografias e memória dessa natureza.',

                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-7.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-3.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-4.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-5.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-6.jpg",
                ]
            },
        ],

        preSaleTitle: {
            es: 'Preventa <em>Una residencia narrada por: Iván Floro</em>',
            en: 'Pre-sale <em>A Residency Narrated by: Iván Floro</em>',
            pt: 'Pré-venda <em>Uma Residência Narrada por: Iván Floro</em>',
        },

        preSaleImage: "/Images/Exhibitions/Exhibition01/Gallery/Gallery-1.jpg",

        preSaleImage2: "/Images/Publications/Publication01/Pub-Cuadros.jpg",

        preSaleText: {
            es: 'También se llevó a cabo la preventa de <em>Una residencia narrada por Ivan Floro</em>, la primera publicación de Fundación Azar, que reúne los óleos y dibujos realizados por el artista como cronista visual de la residencia. Durante la exposición, Ivan dedicó cada ejemplar vendido con dibujos únicos, convirtiendo cada libro en una pieza irrepetible.',
            en: 'The pre-sale of <em>A Residency Narrated by Ivan Floro</em> also took place, marking the first publication of Fundación Azar. The book brings together the oil paintings and drawings created by the artist as the visual chronicler of the residency. During the exhibition, Ivan personalized each copy sold with unique drawings, turning every book into a one-of-a-kind piece.',
            pt: 'Também ocorreu a pré-venda de <em>Uma Residência Narrada por Ivan Floro</em>, a primeira publicação da Fundação Azar, que reúne as pinturas a óleo e os desenhos realizados pelo artista como cronista visual da residência. Durante a exposição, Ivan dedicou cada exemplar vendido com desenhos únicos, transformando cada livro numa peça irrepetível.',
        },
        publicaciones: ["pub-1"],
        gallery: [
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-3.jpg",

            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-2.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-9.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-10.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-4.jpg",
            "/Images/Exhibitions/Exhibition01/expo2025-2.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-6.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-7.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-8.jpg",
            // "/Images/Exhibitions/Exhibition01/Gallery/Gallery-9.jpg",
            // "/Images/Exhibitions/Exhibition01/Gallery/Gallery-10.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-5.jpg",
        ],
        byeByeText: {
            es: '<br/>El éxito de Expo Residencia2025 no habría sido posible sin vuestra presencia y apoyo.<br/>¡Gracias y nos vemos en la próxima edición!',
            en: '<br/>The success of Expo Residencia2025 would not have been possible without your presence and support.<br/>Thank you, and see you at the next edition!',
            pt: '<br/>O sucesso da Expo Residencia2025 não teria sido possível sem a vossa presença e apoio.<br/>Obrigado e até à próxima edição!',
        }
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