import jbl1 from '../assets/clients/JBL/jbl_cover.jpg'
import jbl2 from '../assets/clients/JBL/jbl_posters1.jpg'
import jbl3 from '../assets/clients/JBL/jbl_posters2.jpg'
import jbl4 from '../assets/clients/JBL/jbl_bus.jpg'
import jbl5 from '../assets/clients/JBL/jbl_booklet.jpg'
import jbl6 from '../assets/clients/JBL/jbl_railking1.jpg'
import jbl7 from '../assets/clients/JBL/jbl_railking2.jpg'
import jbl8 from '../assets/clients/JBL/jbl_site1.jpg'
import jbl9 from '../assets/clients/JBL/jbl_site2.jpg'
import jbl10 from '../assets/clients/JBL/jbl_site3.jpg'
import jbl11 from '../assets/clients/JBL/jbl_t-shirts1.jpg'
import jbl12 from '../assets/clients/JBL/jbl_t-shirts2.jpg'
import playstation1 from '../assets/clients/E3_Playstation/playstation_main-art.jpg'
import playstation2 from '../assets/clients/E3_Playstation/playstation_front-banner.jpg'
import michelob1 from '../assets/clients/Michelob/Mich Airplane.jpg'
import michelob2 from '../assets/clients/Michelob/Mich Fire copy.jpg'
import michelob3 from '../assets/clients/Michelob/Mich HairTonic copy.jpg'
import michelob4 from '../assets/clients/Michelob/Mich Iceberg copy.jpg'
import michelob5 from '../assets/clients/Michelob/Mich NoseJob copy.jpg'
import michelob6 from '../assets/clients/Michelob/Mich SkyDiver copy.jpg'
import michelob7 from '../assets/clients/Michelob/Mich SnakeBite copy.jpg'
import michelob8 from '../assets/clients/Michelob/Mich Sonogram copy.jpg'
import michelob9 from '../assets/clients/Michelob/Mich Trapeze copy.jpg'
import whiskas1 from '../assets/clients/Whiskas/Whiskas-manifesto_low.jpg'
import whiskas2 from '../assets/clients/Whiskas/Whiskas_Predator_low.jpg'
import whiskas3 from '../assets/clients/Whiskas/Whiskas_Fluffy_low.jpg'
import pennzoil1 from '../assets/clients/Pennzoil_centerfold_low.jpg'
import pennzoil2 from '../assets/clients/Pennzoil_Sumo.jpg'
import rainx from '../assets/clients/RainX_bug&tar_low.jpg'
import socom from '../assets/clients/SOCOM_low.jpg'
import hoover from '../assets/clients/Hoover_timesSquare.jpg'
import mayumisDream from '../assets/clients/MAYUMISDREAM/Wiener-in-Bathtub.jpg'
import korDiorama from '../assets/clients/KOR_diorama.jpg'
import lightFixture from '../assets/clients/Luminaria.jpg'

export const db = [
  {
    id: 1,
    name: "JBL",
    campaign: "Destination Anywhere Tour",
    description: "JBL asked us to create a 5-page print ad for their line of products. Each page should showcase one of their products. However, with the same budget, we managed to deliver a full campaign that highlighted a common theme: sound quality. Our main concept was to convey that using a JBL product feels like being at a concert. To achieve this, we invented a fictional tour and partnered with a couple of bands. Each tour venue was associated with a specific context for product use, such as ‘In Your Bedroom’ or ‘On Your Way to Work.’ We designed concert posters, t-shirts, booklets resembling concert tickets, a dedicated website, and even wrapped city buses to resemble tour buses. In the end, we not only delivered a comprehensive campaign but also created something unique and memorable.",
    hasPrint: true,
    imageLinks: [
    { 
      id: 1,
      name: 'cover image',
      link: jbl1,
    },
    {
      id: 2,
      name: 'posters',
      link: jbl2,
    },
    {
      id: 3,
      name: 'posters',
      link: jbl3,
    },
    {
      id: 4,
      name: 'bus wrap',
      link: jbl4,
    },
    {
      id: 5,
      name: 'booklet with products',
      link: jbl5,
    },
    {
      id: 6,
      name: 'railking',
      link: jbl6,
    },
    {
      id: 7,
      name: 'railking',
      link: jbl7,
    },
    {
      id: 8,
      name: 'website',
      link: jbl8,
    },
    {
      id: 9,
      name: 'website',
      link: jbl9,
    },
    {
      id: 10,
      name: 'website',
      link: jbl10,
    },
    {
      id: 11,
      name: 't-shirts',
      link: jbl11,
    },
    {
      id: 12,
      name: 't-shirts',
      link: jbl12,
    },
    ],
    hasVideo: false,
    videoLinks: []
  },
  {
    id: 2,
    name: "Playstation",
    campaign: "E3 is coming to LA",
    description: "The most important videogame trade show in world E3 (or Electronic Entertainment Expo) was held in Los Angeles and Playstation asked us to come up with a campaign to show off their brand in the show. There's nothing that says LA more than the Hollywood Sign and there's nothing that says Playstation more than the icons on the controller buttons. So we merged both icons and created one with the tagline: E3 is coming to LA. We had that displayed in the main entrance and all over the venue in posters and banners.",
    hasPrint: true,
    imageLinks: [
    {
      id: 1,
      name: 'main art',
      link: playstation1,
    },
    {
      id: 2,
      name: 'E3 entrance',
      link: playstation2,
    },
    ],
    hasVideo: false,
    videoLinks: []
  },
  {
    id: 3,
    name: "Michelob",
    campaign: "A pleasant surprise",
    description: "Anheuser-Busch approached us with the purpose of increasing the sales of their lesser-known beer, Michelob. After conducting a blind taste test with several other brands, most of us chose Michelob as one of the best options. Inspired by this positive response, we developed the idea that people needed to try Michelob to be pleasantly surprised. To convey this concept in a fun and unique way, we created a campaign featuring illustrations of people in situations where they expected something else but received a Michelob beer instead. Rather than feeling disappointed, they were pleasantly surprised.",
    hasPrint: true,
    imageLinks: [
    {
      id: 1,
      name: 'Airplane',
      link: michelob1,
    },
    {
      id: 2,
      name: 'Fire',
      link: michelob2,
    },
    {
      id: 3,
      name: 'Hair Tonic',
      link: michelob3,
    },
    {
      id: 4,
      name: 'Iceberg',
      link: michelob4,
    },
    {
      id: 5,
      name: 'Nose Job',
      link: michelob5,
    },
    {
      id: 6,
      name: 'Sky Diver',
      link: michelob6,
    },
    {
      id: 7,
      name: 'Snake Bite',
      link: michelob7,
    },
    {
      id: 8,
      name: 'Sonogram',
      link: michelob8,
    },
    {
      id: 9,
      name: 'Trapeze',
      link: michelob9,
    },
    ],
    hasVideo: false,
    videoLinks: []
  },
  {
    id: 4,
    name: "Whiskas",
    campaign: "Your cat has an inner beast. Feed it.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
    hasPrint: true,
    imageLinks: [
    {
      id: 1,
      name: 'Manifesto',
      link: whiskas1,
    },
    {
      id: 2,
      name: 'Predator',
      link: whiskas2,
    },
    {
      id: 3,
      name: 'Fluffy',
      link: whiskas3,
    },
    ],
    hasVideo: false,
    videoLinks: []
  },
  {
    id: 5,
    name: "Pennzoil",
    campaign: "Not just oil, Pennzoil",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
    hasPrint: true,
    imageLinks: [
    {
      id: 1,
      name: 'Centerfold',
      link: pennzoil1,
    },
    {
      id: 2,
      name: 'Sumo',
      link: pennzoil2,
    },
    ],
    hasVideo: true,
    videoLinks: [
      {
        id: 1,
        name: 'Showdown',
        link: "https://www.youtube.com/embed/_wB2xsTGG88?si=etlA-CkXWEEaNgty",
      },
      {
        id: 2,
        name: 'Save the engines',
        link: "https://www.youtube.com/embed/Cf1A11ERMlw?si=L4JvvBCpzUWOuTRU",
      },
    ]
  },
  {
    id: 6,
    name: "Rain-X",
    campaign: "Protect your car from nature's worst",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
    hasPrint: true,
    imageLinks: [
    {
      id: 1,
      name: 'Pigeon',
      link: rainx,
    },
    ],
    hasVideo: false,
    videoLinks: []
  },
  {
    id: 7,
    name: "Playstation Socom",
    campaign: "Orchestrate the perfect op.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
    hasPrint: true,
    imageLinks: [
    {
      id: 1,
      name: 'Hostage',
      link: socom,
    },
    ],
    hasVideo: false,
    videoLinks: []
  },
  {
    id: 8,
    name: "Uncle Ben's",
    campaign: "Bring more to the table.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
    hasPrint: false,
    imageLinks: [],
    hasVideo: true,
    videoLinks: [
      {
        id: 1,
        name: 'Microwave',
        link: "https://www.youtube.com/embed/xskyu4_iRDc?si=CuMgUqlWkgvEXe3K",
      },
      {
        id: 2,
        name: 'Chef',
        link: "https://www.youtube.com/embed/f7XI-VOkbFo?si=EQfghGCgpmNowfcJ",
      },
    ]
  },
  {
    id: 9,
    name: "Hoover",
    campaign: "Grabs dirt and doesn't let go.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
    hasPrint: true,
    imageLinks: [
      {
        id: 1,
        name: 'Times Square Billboard',
        link: hoover,
      },
    ],
    hasVideo: false,
    videoLinks: [],
  },
  {
    id: 10,
    name: "Miscellaneous",
    campaign: "Stuff not related to ads.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
    hasPrint: true,
    imageLinks: [
      {
        id: 1,
        name: 'Wiener in a Bathtub - Created in Photoshop',
        link: mayumisDream,
      },
      {
        id: 2,
        name: 'Light Fixture - Designed by me and handmade by me and my brother-in-law',
        link: lightFixture,
      },
      {
        id: 3,
        name: 'My box - created in Blender + Photoshop',
        link: korDiorama,
      },
    ],
    hasVideo: true,
    videoLinks: [
      {
        id: 1,
        name: 'Making of Hello Kitty',
        link: "https://www.youtube.com/embed/QkTQvC3lzfU?si=7V97gdYJiF8IoUAL",
      },

    ],
  },
]