// rooms images
import Room1Img from '/assets/img/rooms/1.png';
import Room1ImgLg from '/assets/img/rooms/1-lg.png';
import Room2Img from '/assets/img/rooms/2.png';
import Room2ImgLg from '/assets/img/rooms/2-lg.png';
import Room3Img from '/assets/img/rooms/3.png';
import Room3ImgLg from '/assets/img/rooms/3-lg.png';
import Room4Img from '/assets/img/rooms/4.png';
import Room4ImgLg from '/assets/img/rooms/4-lg.png';
import Room5Img from '/assets/img/rooms/5.png';
import Room5ImgLg from '/assets/img/rooms/5-lg.png';
import Room6Img from '/assets/img/rooms/6.png';
import Room6ImgLg from '/assets/img/rooms/6-lg.png';
import Room7Img from '/assets/img/rooms/7.png';
import Room7ImgLg from '/assets/img/rooms/7-lg.png';
import Room8Img from '/assets/img/rooms/8.png';
import Room8ImgLg from '/assets/img/rooms/8-lg.png';
// import icons

import { FaBath, FaClock, FaCloud, FaCocktail, FaCoffee, FaCogs, FaHotdog, FaHotel, FaLock, FaMobileAlt, FaParking, FaStopwatch, FaSwimmingPool, FaUsers, FaUsersCog, FaWifi } from "react-icons/fa";
import { FaShield } from 'react-icons/fa6';


export const about = [
  {
    icon: FaHotel,
    text: "Rooms",
    count: "125",
  },
  {
    icon: FaUsers,
    text: "Staffs",
    count: "350",
  },
  {
    icon: FaUsersCog,
    text: "Clients",
    count: "5000",
  },
];


export const benefits = [
  {
    icon: FaShield,
    name: "Secure Booking",
    description: "Safe and encrypted reservation process."
  },
  {
    icon: FaMobileAlt,
    name: "Mobile Optimized",
    description: "Seamless experience across devices."
  },
  {
    icon: FaCloud, 
    name: "Cloud Storage",
    description: "Reliable data backup and access."
  },
  {
    icon: FaClock,
    name: "Instant Confirmation",
    description: "Immediate booking confirmation after payment."
  },
  {
    icon: FaCogs,
    name: "Automated Updates",
    description: "Real-time updates and notifications."
  },
  {
    icon: FaLock,
    name: "Data Privacy",
    description: "Compliant with data protection standards."
  }
];


export const imageDetails = [
  {
    src: '/assets/img/about-1.jpg',
    alt: 'Hotel Room',
    title: 'Hotel Room',
    description: 'A comfortable, spacious hotel room with modern amenities.'
  },
  {
    src: '/assets/img/about-2.jpg',
    alt: 'Hotel Room',
    title: 'Hotel Room',
    description: 'A comfortable, spacious hotel room with modern amenities.'
  },
  {
    src: '/assets/img/about-3.jpg',
    alt: 'Hotel Room',
    title: 'Hotel Room',
    description: 'A comfortable, spacious hotel room with modern amenities.'
  },
  {
    src: '/assets/img/about-4.jpg',
    alt: 'Hotel Room',
    title: 'Hotel Room',
    description: 'A comfortable, spacious hotel room with modern amenities.'
  }
];

export const roomData = [
  {
    id: 1,
    name: 'Superior Room',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
    facilities: [
      { name: 'Wifi', icon: FaWifi },
      { name: 'Coffee', icon: FaCoffee },
      { name: 'Bath', icon: FaBath },
      { name: 'Parking Space', icon: FaParking },
      { name: 'Swimming Pool', icon: FaSwimmingPool },
      { name: 'Breakfast', icon: FaHotdog },
      { name: 'GYM', icon: FaStopwatch },
      { name: 'Drinks', icon: FaCocktail },
    ],
    size: 30,
    maxPerson: 1,
    price: 115,
    image: Room1Img,
    imageLg: Room1ImgLg,
  },
    {
      id: 2,
      name: 'Signature Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: FaWifi },
        { name: 'Coffee', icon: FaCoffee },
        { name: 'Bath', icon: FaBath },
        { name: 'Parking Space', icon: FaParking },
        { name: 'Swimming Pool', icon: FaSwimmingPool },
        { name: 'Breakfast', icon: FaHotdog },
        { name: 'GYM', icon: FaStopwatch },
        { name: 'Drinks', icon: FaCocktail },
      ],
      size: 70,
      maxPerson: 2,
      price: 220,
      image: Room2Img,
      imageLg: Room2ImgLg,
    },
    {
      id: 3,
      name: 'Deluxe Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: FaWifi },
        { name: 'Coffee', icon: FaCoffee },
        { name: 'Bath', icon: FaBath },
        { name: 'Parking Space', icon: FaParking },
        { name: 'Swimming Pool', icon: FaSwimmingPool },
        { name: 'Breakfast', icon: FaHotdog },
        { name: 'GYM', icon: FaStopwatch },
        { name: 'Drinks', icon: FaCocktail },
      ],
      size: 50,
      maxPerson: 3,
      price: 265,
      image: Room3Img,
      imageLg: Room3ImgLg,
    },
    {
      id: 4,
      name: 'Luxury Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: FaWifi },
        { name: 'Coffee', icon: FaCoffee },
        { name: 'Bath', icon: FaBath },
        { name: 'Parking Space', icon: FaParking },
        { name: 'Swimming Pool', icon: FaSwimmingPool },
        { name: 'Breakfast', icon: FaHotdog },
        { name: 'GYM', icon: FaStopwatch },
        { name: 'Drinks', icon: FaCocktail },
      ],
      size: 50,
      maxPerson: 4,
      price: 289,
      image: Room4Img,
      imageLg: Room4ImgLg,
    },
    {
      id: 5,
      name: 'Luxury Suite Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: FaWifi },
        { name: 'Coffee', icon: FaCoffee },
        { name: 'Bath', icon: FaBath },
        { name: 'Parking Space', icon: FaParking },
        { name: 'Swimming Pool', icon: FaSwimmingPool },
        { name: 'Breakfast', icon: FaHotdog },
        { name: 'GYM', icon: FaStopwatch },
        { name: 'Drinks', icon: FaCocktail },
      ],
      size: 90,
      maxPerson: 5,
      price: 320,
      image: Room5Img,
      imageLg: Room5ImgLg,
    },
    {
      id: 6,
      name: 'Deluxe Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: FaWifi },
        { name: 'Coffee', icon: FaCoffee },
        { name: 'Bath', icon: FaBath },
        { name: 'Parking Space', icon: FaParking },
        { name: 'Swimming Pool', icon: FaSwimmingPool },
        { name: 'Breakfast', icon: FaHotdog },
        { name: 'GYM', icon: FaStopwatch },
        { name: 'Drinks', icon: FaCocktail },
      ],
      size: 45,
      maxPerson: 6,
      price: 344,
      image: Room6Img,
      imageLg: Room6ImgLg,
    },
    {
      id: 7,
      name: 'Luxury Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea ccusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: FaWifi },
        { name: 'Coffee', icon: FaCoffee },
        { name: 'Bath', icon: FaBath },
        { name: 'Parking Space', icon: FaParking },
        { name: 'Swimming Pool', icon: FaSwimmingPool },
        { name: 'Breakfast', icon: FaHotdog },
        { name: 'GYM', icon: FaStopwatch },
        { name: 'Drinks', icon: FaCocktail },
      ],
      size: 84,
      maxPerson: 7,
      price: 389,
      image: Room7Img,
      imageLg: Room7ImgLg,
    },
    {
      id: 8,
      name: 'Deluxe Room',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.',
      facilities: [
        { name: 'Wifi', icon: FaWifi },
        { name: 'Coffee', icon: FaCoffee },
        { name: 'Bath', icon: FaBath },
        { name: 'Parking Space', icon: FaParking },
        { name: 'Swimming Pool', icon: FaSwimmingPool },
        { name: 'Breakfast', icon: FaHotdog },
        { name: 'GYM', icon: FaStopwatch },
        { name: 'Drinks', icon: FaCocktail },
      ],
      size: 48,
      maxPerson: 8,
      price: 499,
      image: Room8Img,
      imageLg: Room8ImgLg,
    },
];