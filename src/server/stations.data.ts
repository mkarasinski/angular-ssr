import { Station } from '../app/models/station';

export const STATIONS: Station[] = [
  {
    slug: 'kasprowy-wierch',
    name: 'Kasprowy Wierch',
    region: 'Tatra Mountains',
    elevation: 1991,
    description: 'The highest permanently staffed weather station in Poland.',
    dailyRange: 6,
  },
  {
    slug: 'sniezka',
    name: 'Śnieżka',
    region: 'Karkonosze',
    elevation: 1602,
    description: 'Perched on the Czech border, famous for extreme wind speeds.',
    dailyRange: 5,
  },
  {
    slug: 'hel',
    name: 'Hel',
    region: 'Baltic Coast',
    elevation: 1,
    description: 'A narrow spit station tracking sea breeze and storm surges.',
    dailyRange: 4,
  },
  {
    slug: 'warszawa-okecie',
    name: 'Warszawa Okęcie',
    region: 'Mazovia',
    elevation: 106,
    description: 'The reference station for the Warsaw metropolitan area.',
    dailyRange: 9,
  },
  {
    slug: 'suwalki',
    name: 'Suwałki',
    region: 'Podlasie',
    elevation: 184,
    description: 'Known as the Polish pole of cold.',
    dailyRange: 11,
  },
  {
    slug: 'lebork',
    name: 'Lębork',
    region: 'Pomerania',
    elevation: 25,
    description: 'Inland lowland station with a strong maritime influence.',
    dailyRange: 8,
  },
];
