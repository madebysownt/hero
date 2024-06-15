import { StaticImageData } from 'next/image';
import chaiyo_gcp_s4 from '../public/chaiyo_gcp_s4.png';
import chienbinhandroid_s3 from '../public/chienbinhandroid_s3.png';
import juara_android_s3 from '../public/juara_android_s3.jpg';
import quanquangcp_s6 from '../public/quanquangcp_s6.png';

export const upcoming_events: {
  id: number;
  name: string;
  url: string;
  description: string;
  image: StaticImageData;
  notes: string;
  location: string;
  status: boolean;
}[] = [
  {
    id: 1,
    name: 'Google Cloud AI Study Jam: ChaiyoGCP Season 4',
    url: 'https://rsvp.withgoogle.com/events/chaiyogcp-s4/',
    description: '#ChaiyoGCP is an online Google Cloud self-study program designed for developers in Thailand. It provides access to hands-on Google Cloud labs and fosters learning through a supportive community of peers.',
    image: chaiyo_gcp_s4,
    notes: 'May 17 - June 15, 2024',
    location: 'Thailand',
    status: true,
  },
  {
    id: 2,
    name: 'Google Cloud AI Study Jam: #QuanQuanGCP Season 6',
    url: 'https://rsvp.withgoogle.com/events/quan-quan-gcp-s6/',
    description: '#QuanQuanGCP is an online Google Cloud self-study program designed for developers in Vietnam. It provides access to hands-on Google Cloud labs and fosters learning through a supportive community of peers.',
    image: quanquangcp_s6,
    notes: 'Mar 22 - Apr 20, 2024',
    location: 'Vietnam',
    status: false,
  },
  {
    id: 3,
    name: 'JuaraAndroid with Compose Camp',
    url: 'https://rsvp.withgoogle.com/events/juara-android3',
    description: '#JuaraAndroid is a online self-study program to help developers to learn Android Development using the Compose.',
    image: juara_android_s3,
    notes: 'Oct 7 - Nov 4, 2023',
    location: 'Indonesia',
    status: false,
  },
  {
    id: 4,
    name: 'ChienBinhAndroid with Compose Camp',
    url: 'https://rsvp.withgoogle.com/events/chien-binh-android-season3',
    description: '#ChienBinhAndroid is a online self-study program to help developers to learn Android Development using the Compose.',
    image: chienbinhandroid_s3,
    notes: 'Jul 14 - Aug 12, 2023',
    location: 'Vietnam',
    status: false,
  },
];
