const products = [
    {
        id: 1,
        title: 'PS5 Versión Lectora',
        category: 'consolas',
        price: '1.500.000',
        shortDesc: 'Consola PS5 con lectora + Control Dualsense',
        description: 'La PlayStation 5 (PS5) es la consola de nueva generación de Sony, diseñada para ofrecer gráficos en 4K, una velocidad de carga ultrarrápida gracias a su SSD y compatibilidad con juegos en formato físico. Disfruta de una experiencia inmersiva con el control DualSense y la potencia de su hardware. ¡Vive el futuro del gaming!',
        image: 'https://i5.walmartimages.com/seo/Sony-PlayStation-5-Video-Game-Console-Ps5-Disc-Console-Japanese-Edition-New_1536c1c9-0c26-4ce6-a5e1-1825ca064d05.1434e86832a815bb366d12b0a854390d.jpeg'
    },
    {
        id: 2,
        title: 'PS5 Versión Digital',
        category: 'consolas',
        price: '1300000',
        shortDesc: 'Consola PS5 Digital + Control Dualsense',
        description: 'La PlayStation 5 (PS5) es la consola de nueva generación de Sony, diseñada para ofrecer gráficos en 4K, una velocidad de carga ultrarrápida gracias a su SSD, diseñada para el nuevo mundo digital. Disfruta de una experiencia inmersiva con el control DualSense y la potencia de su hardware. ¡Vive el futuro del gaming!',
        image: 'https://hiperaudio.com.ar/wp-content/uploads/2022/08/play-5.png'
    },
    {
        id: 3,
        title: 'PS5 Slim con Lectora',
        category: 'consolas',
        price: '1400000',
        shortDesc: 'Consola PS5 Slim con Lectora + Control Dualsense',
        description: 'La PlayStation 5 (PS5) Slim ofrece la misma potencia y rendimiento que la consola original, pero en un diseño más compacto y elegante. Disfruta de gráficos en 4K, cargas rápidas con su SSD, y compatibilidad con juegos en formato físico. Perfecta para quienes buscan alta performance en un formato reducido. ¡Sumérgete en la nueva generación de videojuegos!',
        image: 'https://image.coolblue.be/max/500x500/products/1994458'
    },
    {
        id: 4,
        title: 'PS5 Slim Versión Digital',
        category: 'consolas',
        price: '1200000',
        shortDesc: 'Consola PS5 Slim Digital + Control Dualsense',
        description: 'La PlayStation 5 (PS5) Slim ofrece la misma potencia y rendimiento que la consola original, pero en un diseño más compacto y elegante. Disfruta de gráficos en 4K, cargas rápidas con su SSD, y una mayor capacidad de memoria para almacenamiento digital. Perfecta para quienes buscan alta performance en un formato reducido. ¡Sumérgete en la nueva generación de videojuegos!',
        image: 'https://nextgames.com.ar/img/Public/1040/producto-ps5-slim-digital-770.jpg'
    },
    {
        id: 5,
        title: 'Xbox Series X',
        category: 'consolas',
        price: '1500000',
        shortDesc: 'Consola Xbox Series X + Control',
        description: 'La Xbox Series X es la consola más potente de Microsoft, diseñada para ofrecer una experiencia de juego de última generación con gráficos 4K y hasta 120 fps. Equipado con un SSD ultrarrápido, permite tiempos de carga mínimos y rendimiento fluido. Compatible con juegos físicos y digitales, es ideal para quienes buscan máximo rendimiento. ¡Lleva tus juegos al siguiente nivel!',
        image: 'https://http2.mlstatic.com/D_NQ_NP_942133-MLA74651936102_022024-O.webp'
    },
    {
        id: 6,
        title: 'Xbox Series S',
        category: 'consolas',
        price: '1000000',
        shortDesc: 'Consola Xbox Series S + Control',
        description: 'La Xbox Series S es la consola más compacta de Microsoft, diseñada para ofrecer la experiencia de nueva generación en formato digital. Con gráficos mejorados hasta 1440p y tiempos de carga rápidos gracias a su SSD, es perfecta para jugadores que prefieren descargar sus títulos. Disfruta de la calidad de la nueva era del gaming en un diseño compacto y asequible.',
        image: 'https://m.media-amazon.com/images/I/61Vv5FeZH2L._SL1200_.jpg'
    },
    {
        id: 7,
        title: 'Nintendo Swtich OLED',
        category: 'consolas',
        price: '870000',
        shortDesc: 'Nintendo Swtich OLED + Joycons Rojo y Azul + Accesorios base',
        description: 'La Nintendo Switch es la consola híbrida de Nintendo, que te permite jugar tanto en casa como en cualquier lugar. Con su pantalla de 6.2 pulgadas y mandos Joy-Con desmontables, puedes disfrutar de tus juegos favoritos en modo portátil o conectarla al televisor para una experiencia de pantalla grande. ¡Diversión sin límites, donde y cuando quieras!',
        image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/118315071_01/w=800,h=800,fit=pad'
    },

    {
        id: 8,
        title: 'Nintendo Swtich Lite',
        category: 'consolas',
        price: '500000',
        shortDesc: 'Nintendo Swtich Lite color Azul',
        description: 'La Nintendo Switch Lite es la versión compacta y portátil de la consola de Nintendo, diseñada exclusivamente para jugar en modo portátil. Con un diseño ligero y ergonómico, es ideal para llevar tus juegos a cualquier parte. Compatible con la mayoría de los títulos de Nintendo Switch, es perfecta para jugadores que buscan movilidad total.',
        image: 'https://http2.mlstatic.com/D_Q_NP_770609-MLU72631430362_112023-O.webp'
    },
    {
        id: 9,
        title: 'Spider-Man: Miles Morales',
        category: 'juegos',
        price: '50000',
        shortDesc: 'Juego de acción y aventura para PS5',
        description: 'Spider-Man: Miles Morales es un juego de acción que sigue la historia del joven superhéroe mientras defiende Nueva York con sus habilidades únicas. Compatible con gráficos 4K y tiempos de carga ultrarrápidos.',
        image: 'https://arsonyb2c.vtexassets.com/arquivos/ids/353844/PS5-Spiderman-ultimate.jpg?v=637401014503570000'
    },
    {
        id: 10,
        title: 'Demon\'s Souls',
        category: 'juegos',
        price: '60000',
        shortDesc: 'Juego de rol y acción para PS5',
        description: 'Demon\'s Souls es un remake del clásico juego de rol, con gráficos completamente renovados para PS5. Enfréntate a enemigos desafiantes en este mundo oscuro y atmosférico.',
        image: 'https://acdn.mitiendanube.com/stores/082/436/products/demons-souls0987-1883417384506b3d5716630950372284-640-0.png'
    },
    {
        id: 11,
        title: 'Ratchet & Clank: Rift Apart',
        category: 'juegos',
        price: '75000',
        shortDesc: 'Juego de plataformas y acción para PS5',
        description: 'Ratchet & Clank: Rift Apart es una aventura interdimensional que aprovecha al máximo las capacidades gráficas y de velocidad de la PS5. Salta entre mundos y enfrenta desafíos épicos.',
        image: 'https://arsonyb2c.vtexassets.com/arquivos/ids/356676/PS5-Ratchet-Clank_RA-Cover1.jpg?v=637557100798730000'
    },
    {
        id: 12,
        title: 'Returnal',
        category: 'juegos',
        price: '60000',
        shortDesc: 'Juego de ciencia ficción y disparos para PS5',
        description: 'Returnal es un juego roguelike en el que cada partida es un nuevo desafío. Con gráficos impresionantes y una narrativa intrigante, es uno de los títulos más destacados para PS5.',
        image: 'https://arsonyb2c.vtexassets.com/arquivos/ids/356613/91hbvSTmpmL._SL1500_--1-.jpg?v=637541928059600000'
    },
    {
        id: 13,
        title: 'Horizon Forbidden West',
        category: 'juegos',
        price: '70000',
        shortDesc: 'Juego de rol y aventura para PS5',
        description: 'En Horizon Forbidden West, acompaña a Aloy en una aventura épica en un mundo postapocalíptico lleno de misterios y máquinas peligrosas. Ideal para fanáticos de los juegos de mundo abierto.',
        image: 'https://arsonyb2c.vtexassets.com/arquivos/ids/358685-800-800?v=637762029568770000&width=800&height=800&aspect=true'
    },
    {
        id: 14,
        title: 'Halo Infinite',
        category: 'juegos',
        price: '50000',
        shortDesc: 'Juego de disparos en primera persona para Xbox',
        description: 'Halo Infinite es la última entrega de la icónica franquicia de disparos en primera persona. Disfruta de su intensa campaña y modo multijugador con gráficos 4K y rendimiento mejorado.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_875572-MLM50501771031_062022-O.webp'
    },
    {
        id: 15,
        title: 'Forza Horizon 5',
        category: 'juegos',
        price: '70000',
        shortDesc: 'Juego de carreras para Xbox',
        description: 'Forza Horizon 5 es un juego de carreras ambientado en México, con un extenso mundo abierto para explorar. Compatible con resolución 4K y gráficos impresionantes.',
        image: 'https://m.media-amazon.com/images/I/71MGlZZqIzL._SL1290_.jpg'
    },
    {
        id: 16,
        title: 'Gears 5',
        category: 'juegos',
        price: '50000',
        shortDesc: 'Juego de disparos y acción para Xbox',
        description: 'Gears 5 sigue la historia de Kait Díaz en una lucha contra el Enjambre. Disfruta de una campaña intensa y un modo multijugador cooperativo épico.',
        image: 'https://media.vandal.net/m/61923/gears-of-war-5-20198161726203_1.jpg'
    },
    {
        id: 17,
        title: 'Fable',
        category: 'juegos',
        price: '75000',
        shortDesc: 'Juego de rol y aventura para Xbox',
        description: 'Fable es un renacimiento de la famosa saga de juegos de rol y aventura. Explora un vasto mundo de fantasía con una narrativa profunda y decisiones que afectan tu historia.',
        image: 'https://totalcards.net/cdn/shop/files/fable-xbox.jpg?v=1711546881&width=535'
    },
    {
        id: 18,
        title: 'Flight Simulator',
        category: 'juegos',
        price: '50000',
        shortDesc: 'Simulador de vuelo para Xbox',
        description: 'Microsoft Flight Simulator ofrece una experiencia de simulación de vuelo realista con gráficos espectaculares. Explora el mundo desde el cielo con detalles asombrosos y precisión geográfica.',
        image: 'https://store-images.s-microsoft.com/image/apps.34988.14293123921570736.739af26b-0b56-4d3a-8d57-149d26c2cc05.9152e068-0d00-4190-b0f9-d7f60ff9a8c5'
    },
    {
        id: 19,
        title: 'The Legend of Zelda: Breath of the Wild',
        category: 'juegos',
        price: '50000',
        shortDesc: 'Juego de rol y aventura para Nintendo Switch',
        description: 'The Legend of Zelda: Breath of the Wild ofrece un mundo abierto vasto y lleno de aventuras para explorar. Es uno de los títulos más aclamados de la consola.',
        image: 'https://http2.mlstatic.com/D_826150-MLA46032338870_052021-C.jpg'
    },
    {
        id: 20,
        title: 'Super Mario Odyssey',
        category: 'juegos',
        price: '65000',
        shortDesc: 'Juego de plataformas para Nintendo Switch',
        description: 'Super Mario Odyssey es una aventura de plataformas en 3D en la que Mario explora mundos enormes. Rescata a la princesa Peach en una de las aventuras más queridas de la Switch.',
        image: 'https://http2.mlstatic.com/D_Q_NP_740157-MLU72836514627_112023-O.webp'
    },
    {
        id: 21,
        title: 'Animal Crossing: New Horizons',
        category: 'juegos',
        price: '45000',
        shortDesc: 'Simulador de vida para Nintendo Switch',
        description: 'Animal Crossing: New Horizons te permite crear tu propia isla y vivir a tu ritmo. Recolecta recursos, construye y personaliza tu hogar mientras interactúas con personajes encantadores.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDdMhu2l748Jbsf0IKub3qwfNa_OSN3vLmw&s'
    },
    {
        id: 22,
        title: 'Mario Kart 8 Deluxe',
        category: 'juegos',
        price: '40000',
        shortDesc: 'Juego de carreras para Nintendo Switch',
        description: 'Mario Kart 8 Deluxe ofrece carreras frenéticas y divertidas con tus personajes favoritos de Nintendo. Ideal para jugar con amigos en casa o en línea.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_915429-MLU71590199309_092023-O.webp'
    },
    {
        id: 23,
        title: 'Splatoon 3',
        category: 'juegos',
        price: '50000',
        shortDesc: 'Juego de disparos para Nintendo Switch',
        description: 'Splatoon 3 es un juego de disparos único donde competirás con tinta en intensas batallas de equipos. Diversión multijugador para toda la familia en la Nintendo Switch.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-37mSprgiYkGKah3IK5hfaTeTvj98Ub47fw&s'
    },
    {
        id: 24,
        title: 'Procesador Intel Core i9-13900K',
        category: 'componentes',
        price: '850000',
        shortDesc: 'Procesador Intel de 13ª generación',
        description: 'El Intel Core i9-13900K es un procesador de gama alta con 24 núcleos y 32 hilos, ideal para gaming extremo y tareas intensivas como edición de video y renderizado en 3D.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_851671-MLA52221724022_102022-O.webp'
    },
    {
        id: 25,
        title: 'Procesador AMD Ryzen 9 7900X',
        category: 'componentes',
        price: '450000',
        shortDesc: 'Procesador AMD Ryzen 7000 Series',
        description: 'El AMD Ryzen 9 7900X es un procesador de 12 núcleos y 24 hilos, optimizado para gaming de alto rendimiento y aplicaciones multitarea, con soporte para PCIe 5.0 y DDR5.',
        image: 'https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-9-7900x.jpg'
    },
    {
        id: 26,
        title: 'Tarjeta Gráfica NVIDIA GeForce RTX 4090',
        category: 'componentes',
        price: '2800000',
        shortDesc: 'GPU de última generación con 24 GB de VRAM',
        description: 'La RTX 4090 es la tarjeta gráfica más potente de NVIDIA, diseñada para gaming en 4K y rendimiento en tareas de inteligencia artificial, con soporte para ray tracing en tiempo real.',
        image: 'https://spacegamer.com.ar/img/Public/1058/55986-producto-1.jpg'
    },
    {
        id: 27,
        title: 'Tarjeta Gráfica AMD Radeon RX 7900 XTX',
        category: 'componentes',
        price: '1300000',
        shortDesc: 'GPU de alto rendimiento con 24 GB de GDDR6',
        description: 'La Radeon RX 7900 XTX ofrece rendimiento de gama alta en gaming a resoluciones 4K, con capacidades avanzadas de ray tracing y soporte para tecnologías de alta frecuencia de actualización.',
        image: 'https://m.media-amazon.com/images/I/717ap63hzdL._AC_SL1500_.jpg'
    },
    {
        id: 28,
        title: 'Placa Madre ASUS ROG Strix Z790-E Gaming',
        category: 'componentes',
        price: '600000',
        shortDesc: 'Placa madre con soporte para Intel y DDR5',
        description: 'La ASUS ROG Strix Z790-E es una placa madre de gama alta, diseñada para maximizar el rendimiento de los procesadores Intel de última generación, con soporte para PCIe 5.0 y Wi-Fi 6E.',
        image: 'https://www.dateks.lv/images/pic/2400/2400/581/1526.jpg'
    },
    {
        id: 29,
        title: 'Placa Madre MSI MPG B650 Gaming Plus',
        category: 'componentes',
        price: '300000',
        shortDesc: 'Placa madre con soporte para AMD Ryzen y DDR5',
        description: 'La MSI MPG B650 Gaming Plus es una opción de gama media para sistemas con procesadores AMD Ryzen 7000 Series, con soporte para PCIe 4.0 y refrigeración optimizada.',
        image: 'https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFvQ2hBZXBtUkwuX0FDX1NMMTUwMF8uanBn.jpg'
    },
    {
        id: 30,
        title: 'Memoria RAM Corsair Vengeance DDR5 32GB (2x16GB) 6000MHz',
        category: 'componentes',
        price: '200000',
        shortDesc: 'Kit de memoria DDR5 de alto rendimiento',
        description: 'Este kit de RAM DDR5 de Corsair ofrece 32 GB de capacidad y velocidades de hasta 6000 MHz, perfecto para juegos exigentes y tareas de creación de contenido.',
        image: 'https://s3-sa-east-1.amazonaws.com/saasargentina/mhXUec4zktcIh9cy9W7U/imagen'
    },
    {
        id: 31,
        title: 'Memoria RAM G.Skill Ripjaws V DDR4 16GB (2x8GB) 3200MHz',
        category: 'componentes',
        price: '130000',
        shortDesc: 'Kit de memoria DDR4 de gama media',
        description: 'El G.Skill Ripjaws V es una excelente opción de memoria DDR4 para configuraciones de gama media, con 16 GB de capacidad y velocidades de 3200 MHz.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_732374-MLA31926558585_082019-O.webp'
    },
    {
        id: 32,
        title: 'Disco SSD Samsung 980 Pro 1TB NVMe M.2',
        category: 'componentes',
        price: '200000',
        shortDesc: 'SSD NVMe de alto rendimiento',
        description: 'El Samsung 980 Pro es un SSD NVMe de alta velocidad con capacidad de 1TB, ideal para gaming y aplicaciones que requieren tiempos de carga rápidos y transferencia de datos acelerada.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-6cU8GFOc-bOxlLajZ9nEpTRg-1ccyNnlw&s'
    },
    {
        id: 33,
        title: 'Disco SSD Kingston NV1 500GB NVMe M.2',
        category: 'componentes',
        price: '60000',
        shortDesc: 'SSD NVMe de gama media',
        description: 'El Kingston NV1 es un SSD NVMe con capacidad de 500GB, adecuado para configuraciones de gama media, ofreciendo una mejora significativa en los tiempos de carga frente a discos duros tradicionales.',
        image: 'https://www.computershopping.com.ar/Images/Productos/Grandes/SNVS-500G_Foto0g.jpg'
    },
    {
        id: 34,
        title: 'Fuente de Poder Corsair RM850x 80 PLUS Gold',
        category: 'componentes',
        price: '220000',
        shortDesc: 'Fuente de poder de 850W con certificación 80 PLUS Gold',
        description: 'La Corsair RM850x es una fuente de poder modular de alta eficiencia con certificación 80 PLUS Gold, ideal para configuraciones de gaming con tarjetas gráficas y procesadores potentes.',
        image: 'https://www.malditohard.com.ar/wp-content/uploads/product/10/FUE115.webp'
    },
    {
        id: 35,
        title: 'Fuente de Poder EVGA 600 W1 80 PLUS White',
        category: 'componentes',
        price: '100000',
        shortDesc: 'Fuente de poder de 600W de gama media',
        description: 'La EVGA 600 W1 es una fuente de poder económica de 600W, con certificación 80 PLUS White, ideal para PC gamers de gama media.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAoRlQW_GGTosnKvAtNm1SL8bHNftR6MT7g&s'
    },
    {
        id: 36,
        title: 'Refrigeración Líquida NZXT Kraken Z63 280mm',
        category: 'componentes',
        price: '257000',
        shortDesc: 'Sistema de refrigeración líquida AIO de alto rendimiento',
        description: 'El NZXT Kraken Z63 es un sistema de refrigeración líquida AIO con radiador de 280mm y pantalla LCD personalizable, diseñado para mantener bajas temperaturas en procesadores de gama alta.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_817056-MLA41132149065_032020-O.webp'
    },
    {
        id: 37,
        title: 'Refrigeración por Aire Cooler Master Hyper 212 RGB',
        category: 'componentes',
        price: '75000',
        shortDesc: 'Disipador por aire con ventilador RGB',
        description: 'El Cooler Master Hyper 212 es un disipador por aire de excelente relación calidad-precio, ideal para mantener temperaturas controladas en configuraciones de gama media.',
        image: 'https://m.media-amazon.com/images/I/61yhXVTO+WL.jpg'
    },
    {
        id: 38,
        title: 'Gabinete NZXT H510 Elite Mid Tower',
        category: 'componentes',
        price: '850000',
        shortDesc: 'Gabinete de gama alta con panel de vidrio templado',
        description: 'El NZXT H510 Elite es un gabinete de diseño premium con paneles de vidrio templado y soporte para sistemas de refrigeración líquida, ideal para construcciones de alta gama.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_997343-MLU73238583241_122023-O.webp'
    },
    {
        id: 39,
        title: 'Gabinete Corsair 4000D Airflow',
        category: 'componentes',
        price: '150000',
        shortDesc: 'Gabinete Mid Tower con flujo de aire optimizado',
        description: 'El Corsair 4000D Airflow es un gabinete diseñado para maximizar el flujo de aire, con espacio para múltiples ventiladores y sistemas de refrigeración líquida, ideal para configuraciones de gaming de gama media.',
        image: 'https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-4735255.jpg'
    },
    {
        id: 40,
        title: 'Tarjeta de Sonido ASUS Xonar AE 7.1',
        category: 'componentes',
        price: '112000',
        shortDesc: 'Tarjeta de sonido 7.1 de alta fidelidad',
        description: 'La ASUS Xonar AE es una tarjeta de sonido 7.1 diseñada para ofrecer una experiencia de audio inmersiva en gaming, con componentes de alta calidad para minimizar la distorsión.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_897271-MCO40586054656_012020-O.webp'
    },
    {
        id: 41,
        title: 'Auriculares HyperX Cloud II',
        category: 'accesorios',
        price: '125000',
        shortDesc: 'Auriculares gaming con sonido envolvente 7.1',
        description: 'Los HyperX Cloud II son auriculares gaming con sonido envolvente 7.1 y micrófono desmontable, ideales para largas sesiones de juego en PC o consola, ofreciendo confort y una excelente calidad de sonido.',
        image: 'https://row.hyperx.com/cdn/shop/files/hyperx_cloud_ii_red_2_main_mixer_2048x2048.jpg?v=1699574292'
    },
    {
        id: 42,
        title: 'Control Xbox Wireless Series X',
        category: 'accesorios',
        price: '120000',
        shortDesc: 'Control inalámbrico para Xbox Series X|S y PC',
        description: 'El control inalámbrico de Xbox Series X|S es ergonómico y compatible con PC, ofreciendo un control preciso y durabilidad para largas horas de juego.',
        image: 'https://http2.mlstatic.com/D_827500-MLU73563715475_122023-C.jpg'
    },
    {
        id: 43,
        title: 'Control DualSense para PS5',
        category: 'accesorios',
        price: '120000',
        shortDesc: 'Control inalámbrico con retroalimentación háptica para PS5',
        description: 'El control DualSense de PlayStation 5 ofrece retroalimentación háptica y gatillos adaptativos, mejorando la experiencia inmersiva tanto en juegos de PS5 como en PC.',
        image: 'https://arsonyb2c.vtexassets.com/arquivos/ids/348023/PS5_DS_Pshot_A.jpg?v=637363644415730000'
    },
    {
        id: 44,
        title: 'Cámara HD PlayStation 5',
        category: 'accesorios',
        price: '85000',
        shortDesc: 'Cámara HD 1080p para streaming y captura de video',
        description: 'La cámara HD para PS5 permite capturar video en alta definición 1080p, ideal para streamers que buscan agregar su imagen a la transmisión de juegos en vivo.',
        image: 'https://arsonyb2c.vtexassets.com/arquivos/ids/348030-800-800?v=637363675589270000&width=800&height=800&aspect=true'
    },
    {
        id: 45,
        title: 'Base de Carga Doble para PS5 DualSense',
        category: 'accesorios',
        price: '65000',
        shortDesc: 'Base de carga para dos controles DualSense',
        description: 'Esta base de carga permite cargar hasta dos controles DualSense de PS5 simultáneamente, con un diseño elegante y práctico para mantener tus controles siempre listos.',
        image: 'https://arsonyb2c.vtexassets.com/arquivos/ids/348074-800-800?v=637363854868800000&width=800&height=800&aspect=true'
    },
    {
        id: 46,
        title: 'Silla Gamer Secretlab Titan Evo 2022',
        category: 'accesorios',
        price: '260000',
        shortDesc: 'Silla ergonómica para largas sesiones de gaming',
        description: 'La silla gamer Secretlab Titan Evo 2022 ofrece soporte lumbar ajustable, reposabrazos 4D y una estructura resistente, proporcionando comodidad para maratones de juego en PC o consola.',
        image: 'https://images.secretlab.co/turntable/tr:n-w_450/R22PU-Black_02.jpg'
    },
    {
        id: 47,
        title: 'Teclado Mecánico Corsair K95 RGB Platinum',
        category: 'accesorios',
        price: '388.000',
        shortDesc: 'Teclado mecánico con retroiluminación RGB',
        description: 'El Corsair K95 RGB Platinum es un teclado mecánico de gama alta con switches Cherry MX y retroiluminación RGB personalizable, ideal para jugadores que buscan rendimiento y estilo en su setup de gaming.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_631495-MLA47887983869_102021-O.webp'
    },
    {
        id: 48,
        title: 'Adaptador LAN para Nintendo Switch',
        category: 'accesorios',
        price: '190.000',
        shortDesc: 'Adaptador LAN para conexión por cable en Nintendo Switch',
        description: 'El adaptador LAN para Nintendo Switch permite conectar la consola a Internet a través de un cable Ethernet, mejorando la estabilidad y velocidad de conexión durante juegos online.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_798357-MLA74681539282_022024-O.webp'
    },
    {
        id: 49,
        title: 'Logitech C920 HD Pro Webcam',
        category: 'accesorios',
        price: '100.000',
        shortDesc: 'Cámara web HD para videoconferencias y streaming',
        description: 'La Logitech C920 HD Pro Webcam ofrece una calidad de video Full HD 1080p y audio estéreo. Con enfoque automático y corrección de luz, es ideal para videoconferencias, streaming y grabaciones. Compatible con diversas plataformas como Zoom, Skype y OBS. Su diseño compacto y soporte ajustable la hacen fácil de usar en cualquier configuración.',
        image: 'https://http2.mlstatic.com/D_NQ_NP_990897-MLA43517271507_092020-O.webp'
    },
    {
        id: 50,
        title: 'Mouse Gaming Razer DeathAdder V2',
        category: 'accesorios',
        price: '40.000',
        shortDesc: 'Mouse gaming ergonómico con sensor óptico avanzado',
        description: 'El Razer DeathAdder V2 es un mouse gaming de alta precisión, con un sensor óptico de 20,000 DPI, diseñado para ofrecer un rendimiento y confort excepcionales en sesiones de juego prolongadas.',
        image: 'https://s3-sa-east-1.amazonaws.com/saasargentina/tdYm0pqjBJ3qCHtRVoED/imagen'
    }
]

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 3000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
};