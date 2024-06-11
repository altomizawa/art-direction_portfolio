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


export const db = [
  {
    id: 1,
    name: "JBL",
    campaign: "Destination Anywhere Tour",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
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
    videoLinks: [
      {
        id: 1,
        name: '',
        link: '',
      },
      {
        id: 2,
        name: '',
        link: '',
      },

    ]
  },
  {
    id: 3,
    name: "Michelob",
    campaign: "A pleasant surprise",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
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
    videoLinks: [
      {
        id: 1,
        name: '',
        link: '',
      },
      {
        id: 2,
        name: '',
        link: '',
      },
    ]
  },
  {
    id: 4,
    name: "Whiskas",
    campaign: "Your cat has an inner beast. Feed it.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis fermentum ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse metus nibh, pellentesque finibus dolor a, molestie vulputate ante. Ut tempus nibh nulla, quis facilisis urna condimentum non. Integer euismod id lacus et eleifend. In vitae libero consectetur, luctus eros vel, interdum ante. Aenean quis pretium lorem. Duis tempor nunc sit amet eros interdum, iaculis luctus turpis ullamcorper. Donec vitae condimentum orci, in interdum orci. Integer venenatis tortor at sem commodo faucibus.',
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
    videoLinks: [
      {
        id: 1,
        name: '',
        link: '',
      },
      {
        id: 2,
        name: '',
        link: '',
      },
    ]
  },
]