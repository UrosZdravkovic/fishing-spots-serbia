// Fish types commonly found in Serbian waters
export type FishType =
  | 'Šaran' // Carp
  | 'Som' // Catfish
  | 'Štuka' // Pike
  | 'Smuđ' // Pike-perch (Zander)
  | 'Babuška' // Perch
  | 'Mrena' // Barbel
  | 'Kečiga' // Sterlet sturgeon
  | 'Amur' // Grass carp
  | 'Linjak' // Tench
  | 'Plotica' // Roach
  | 'Deverika' // Bleak
  | 'Crvenperka' // Rudd
  | 'Pastrmka'; // Trout

// Water body types
export type WaterType = 'Reka' | 'Jezero' | 'Akumulacija' | 'Bara' | 'Kanal';

// Fishing spot difficulty
export type Difficulty = 'Lako' | 'Srednje' | 'Teško';

// Season availability
export type Season = 'Proleće' | 'Leto' | 'Jesen' | 'Zima';

// Main fishing spot interface
export type FishingSpot = {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  waterType: WaterType;
  coordinates: {
    lat: number;
    lng: number;
  };
  fishTypes: FishType[];
  difficulty: Difficulty;
  accessibility: {
    car: boolean;
    publicTransport: boolean;
    parkingAvailable: boolean;
  };
  facilities: {
    restrooms?: boolean;
    shelter?: boolean;
    camping?: boolean;
    restaurant?: boolean;
  };
  permitRequired: boolean;
  permitInfo?: string;
  bestSeasons: Season[];
  tips?: string;
  imageUrl?: string;
  region: string;
  municipality: string;
  rating?: number;
  popularityScore?: number;
}

// Serbian Fishing Spots Dataset
export const fishingSpots: FishingSpot[] = [
  {
    id: '1',
    name: 'Dunav - Ada Ciganlija',
    nameEn: 'Danube - Ada Ciganlija',
    description: 'Popularna pecaonica u Beogradu, lako dostupna sa odličnim uslovima za pecanje.',
    waterType: 'Reka',
    coordinates: { lat: 44.7897, lng: 20.4099 },
    fishTypes: ['Šaran', 'Som', 'Smuđ', 'Babuška'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: false,
      camping: false,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Potrebna dozvola PSD Dunav',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Najbolje rano ujutro ili uveče. Koristi kukuruz ili pellet za šarana.',
    region: 'Beograd',
    municipality: 'Beograd',
    rating: 4.5,
    popularityScore: 95,
  },
  {
    id: '2',
    name: 'Dunav - Zemun',
    nameEn: 'Danube - Zemun',
    description: 'Odlična lokacija uz zemunski kej sa bogatim ribljem fondom.',
    waterType: 'Reka',
    coordinates: { lat: 44.8458, lng: 20.4078 },
    fishTypes: ['Som', 'Šaran', 'Smuđ', 'Mrena'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: false,
      camping: false,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Potrebna dozvola PSD Dunav',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Dobro mesto za soma, posebno noću. Koristi živu mamac.',
    region: 'Beograd',
    municipality: 'Beograd',
    rating: 4.3,
    popularityScore: 88,
  },
  {
    id: '3',
    name: 'Jezero Palić',
    nameEn: 'Palić Lake',
    description: 'Jedno od najlepših jezera u Vojvodini, poznato po šaranu i smuđu.',
    waterType: 'Jezero',
    coordinates: { lat: 46.0994, lng: 19.7606 },
    fishTypes: ['Šaran', 'Smuđ', 'Štuka', 'Amur', 'Linjak'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: true,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Dozvola PSD Subotica',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Izuzetno za šarana do 20kg. Najbolje uz trsku.',
    region: 'Vojvodina',
    municipality: 'Subotica',
    rating: 4.7,
    popularityScore: 92,
  },
  {
    id: '4',
    name: 'Tisa - Titel',
    nameEn: 'Tisa River - Titel',
    description: 'Mirna reka sa velikim somovima i šaranima.',
    waterType: 'Reka',
    coordinates: { lat: 45.2083, lng: 20.2983 },
    fishTypes: ['Som', 'Šaran', 'Smuđ', 'Babuška'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: true,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'Potrebna dozvola PSD Tisa',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Odlično mesto za trophy soma. Noćni ribolov preporučen.',
    region: 'Vojvodina',
    municipality: 'Titel',
    rating: 4.6,
    popularityScore: 85,
  },
  {
    id: '5',
    name: 'Sava - Ostružnica',
    nameEn: 'Sava River - Ostružnica',
    description: 'Popularna pecaonica na Savi, blizu Beograda.',
    waterType: 'Reka',
    coordinates: { lat: 44.7833, lng: 20.3372 },
    fishTypes: ['Šaran', 'Som', 'Smuđ', 'Mrena'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: false,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'Dozvola PSD Sava',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Dobro za početnike. Šaran često hvata na kukuruz.',
    region: 'Beograd',
    municipality: 'Beograd',
    rating: 4.2,
    popularityScore: 80,
  },
  {
    id: '6',
    name: 'Đerdapsko jezero',
    nameEn: 'Djerdap Lake',
    description: 'Najveće akumulaciono jezero u Srbiji, izuzetno bogato ribom.',
    waterType: 'Akumulacija',
    coordinates: { lat: 44.6347, lng: 22.1403 },
    fishTypes: ['Som', 'Smuđ', 'Šaran', 'Kečiga', 'Babuška'],
    difficulty: 'Teško',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: true,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Dozvola PD Đerdap',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Legendary mesto za soma preko 100kg. Potrebna čamac.',
    region: 'Istočna Srbija',
    municipality: 'Kladovo',
    rating: 4.9,
    popularityScore: 98,
  },
  {
    id: '7',
    name: 'Srebrno jezero',
    nameEn: 'Silver Lake',
    description: 'Prelepo jezero u blizini Velikog Gradišta.',
    waterType: 'Jezero',
    coordinates: { lat: 44.7558, lng: 21.5206 },
    fishTypes: ['Šaran', 'Som', 'Smuđ', 'Štuka', 'Amur'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: true,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Lokalna dozvola',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Turistička lokacija sa dobrim uslovima. Šaran do 15kg.',
    region: 'Istočna Srbija',
    municipality: 'Veliko Gradište',
    rating: 4.4,
    popularityScore: 87,
  },
  {
    id: '8',
    name: 'Dunav - Smederevo',
    nameEn: 'Danube - Smederevo',
    description: 'Široki deo Dunava sa dugim obalom i odličnim pecanjima.',
    waterType: 'Reka',
    coordinates: { lat: 44.6613, lng: 20.9299 },
    fishTypes: ['Som', 'Šaran', 'Smuđ', 'Mrena'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'PSD Dunav dozvola',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Odličan za velike somove. Probaj pored tvrđave.',
    region: 'Šumadija',
    municipality: 'Smederevo',
    rating: 4.3,
    popularityScore: 82,
  },
  {
    id: '9',
    name: 'Gruža - Akumulacija',
    nameEn: 'Gruža Reservoir',
    description: 'Akumulaciono jezero nadomak Kragujevca.',
    waterType: 'Akumulacija',
    coordinates: { lat: 43.9992, lng: 20.7161 },
    fishTypes: ['Šaran', 'Smuđ', 'Štuka', 'Babuška'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: true,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'PD Kragujevac',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Mirno mesto, idealno za opušteno pecanje.',
    region: 'Šumadija',
    municipality: 'Knić',
    rating: 4.1,
    popularityScore: 75,
  },
  {
    id: '10',
    name: 'Drina - Bajina Bašta',
    nameEn: 'Drina River - Bajina Bašta',
    description: 'Kristalno čista planinska reka, odlična za pastrmku.',
    waterType: 'Reka',
    coordinates: { lat: 43.9694, lng: 19.5667 },
    fishTypes: ['Pastrmka', 'Mrena', 'Plotica'],
    difficulty: 'Teško',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: true,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Lokalna dozvola',
    bestSeasons: ['Proleće', 'Jesen'],
    tips: 'Fly fishing preporučen. Pastrmka na varalicu.',
    region: 'Zapadna Srbija',
    municipality: 'Bajina Bašta',
    rating: 4.8,
    popularityScore: 90,
  },
  {
    id: '11',
    name: 'Vlasina - Jezero',
    nameEn: 'Vlasina Lake',
    description: 'Najviše jezero u Srbiji, netaknuta priroda.',
    waterType: 'Jezero',
    coordinates: { lat: 42.7236, lng: 22.3406 },
    fishTypes: ['Pastrmka', 'Štuka', 'Plotica'],
    difficulty: 'Teško',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: true,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Lokalna dozvola - info na licu mesta',
    bestSeasons: ['Leto', 'Jesen'],
    tips: 'Hladno jezero, odelo preporučeno. Divlja pastrmka.',
    region: 'Južna Srbija',
    municipality: 'Surdulica',
    rating: 4.7,
    popularityScore: 78,
  },
  {
    id: '12',
    name: 'Zapadna Morava - Čačak',
    nameEn: 'West Morava - Čačak',
    description: 'Čista reka sa raznovrsnim ribljem fondom.',
    waterType: 'Reka',
    coordinates: { lat: 43.8914, lng: 20.3497 },
    fishTypes: ['Mrena', 'Babuška', 'Plotica', 'Deverika'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'PD Čačak',
    bestSeasons: ['Proleće', 'Leto'],
    tips: 'Dobro za sportski ribolov, brze vode.',
    region: 'Centralna Srbija',
    municipality: 'Čačak',
    rating: 4.0,
    popularityScore: 70,
  },
  {
    id: '13',
    name: 'Carska bara',
    nameEn: 'Carska Bara',
    description: 'Specijalni rezervat prirode, izuzetno bogat ekosistem.',
    waterType: 'Bara',
    coordinates: { lat: 45.6367, lng: 20.3606 },
    fishTypes: ['Šaran', 'Štuka', 'Smuđ', 'Linjak', 'Babuška'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'Posebna dozvola - rezervat prirode',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Zaštićeno područje, poštuj pravila. Odlična štuka.',
    region: 'Vojvodina',
    municipality: 'Zrenjanin',
    rating: 4.6,
    popularityScore: 83,
  },
  {
    id: '14',
    name: 'Tamiš - Pančevo',
    nameEn: 'Tamiš River - Pančevo',
    description: 'Spokojna reka idealna za porodično pecanje.',
    waterType: 'Reka',
    coordinates: { lat: 44.8700, lng: 20.6500 },
    fishTypes: ['Šaran', 'Babuška', 'Plotica', 'Deverika'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'PSD Tamiš',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Mirno, dobro za početnike i decu.',
    region: 'Vojvodina',
    municipality: 'Pančevo',
    rating: 3.9,
    popularityScore: 72,
  },
  {
    id: '15',
    name: 'Dunav - Apatin',
    nameEn: 'Danube - Apatin',
    description: 'Legendarno mesto za soma, svetski poznato.',
    waterType: 'Reka',
    coordinates: { lat: 45.6714, lng: 18.9844 },
    fishTypes: ['Som', 'Šaran', 'Smuđ', 'Mrena'],
    difficulty: 'Teško',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: false,
      camping: true,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'PSD Dunav',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Trophy som destination. Čamac preporučen.',
    region: 'Vojvodina',
    municipality: 'Apatin',
    rating: 4.8,
    popularityScore: 94,
  },
  {
    id: '16',
    name: 'Obedska bara',
    nameEn: 'Obedska Bara',
    description: 'Najstariji rezervat prirode u Srbiji, bogat ribljim fondom.',
    waterType: 'Bara',
    coordinates: { lat: 44.7197, lng: 19.7628 },
    fishTypes: ['Štuka', 'Šaran', 'Smuđ', 'Babuška', 'Linjak'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'Rezervat - posebna dozvola',
    bestSeasons: ['Proleće', 'Jesen'],
    tips: 'Zaštićeno područje. Odlična za štuku u proleće.',
    region: 'Vojvodina',
    municipality: 'Pećinci',
    rating: 4.5,
    popularityScore: 81,
  },
  {
    id: '17',
    name: 'Zavoj - Jezero',
    nameEn: 'Zavoj Lake',
    description: 'Planinska akumulacija sa kristalno čistom vodom.',
    waterType: 'Akumulacija',
    coordinates: { lat: 43.3847, lng: 22.5672 },
    fishTypes: ['Pastrmka', 'Šaran', 'Babuška'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: true,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Lokalna dozvola',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Prelepa priroda. Pastrmka na mušicu.',
    region: 'Južna Srbija',
    municipality: 'Pirot',
    rating: 4.6,
    popularityScore: 79,
  },
  {
    id: '18',
    name: 'Begej - Zrenjanin',
    nameEn: 'Begej River - Zrenjanin',
    description: 'Kanal sa mirnim vodama i dobrim uslovima.',
    waterType: 'Kanal',
    coordinates: { lat: 45.3833, lng: 20.3833 },
    fishTypes: ['Šaran', 'Babuška', 'Smuđ', 'Plotica'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'PD Zrenjanin',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Lako dostupno, dobro za feeder ribolov.',
    region: 'Vojvodina',
    municipality: 'Zrenjanin',
    rating: 3.8,
    popularityScore: 68,
  },
  {
    id: '19',
    name: 'Ludaško jezero',
    nameEn: 'Ludaš Lake',
    description: 'Rezervat prirode sa ograničenim pristupom.',
    waterType: 'Jezero',
    coordinates: { lat: 46.0833, lng: 19.8000 },
    fishTypes: ['Šaran', 'Štuka', 'Smuđ', 'Amur'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: false,
      camping: false,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'Rezervat - ograničen broj dozvola',
    bestSeasons: ['Proleće', 'Leto'],
    tips: 'Potrebna rezervacija. Veliki šarani.',
    region: 'Vojvodina',
    municipality: 'Subotica',
    rating: 4.4,
    popularityScore: 76,
  },
  {
    id: '20',
    name: 'Ibar - Kraljevo',
    nameEn: 'Ibar River - Kraljevo',
    description: 'Brza planinska reka sa čistim vodama.',
    waterType: 'Reka',
    coordinates: { lat: 43.7250, lng: 20.6872 },
    fishTypes: ['Mrena', 'Pastrmka', 'Babuška', 'Plotica'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: false,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'PD Kraljevo',
    bestSeasons: ['Proleće', 'Jesen'],
    tips: 'Brze vode, sportski ribolov. Mrena na crvca.',
    region: 'Centralna Srbija',
    municipality: 'Kraljevo',
    rating: 4.2,
    popularityScore: 74,
  },
  {
    id: '21',
    name: 'Borsko jezero',
    nameEn: 'Bor Lake',
    description: 'Jezero u rudničkom basenu sa posebnim karakteristikama.',
    waterType: 'Jezero',
    coordinates: { lat: 44.0628, lng: 22.0986 },
    fishTypes: ['Šaran', 'Amur', 'Smuđ'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: false,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'PD Bor',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Gradsko jezero, lako dostupno. Dobro za šarana.',
    region: 'Istočna Srbija',
    municipality: 'Bor',
    rating: 4.0,
    popularityScore: 71,
  },
  {
    id: '22',
    name: 'Dunav - Bačka Palanka',
    nameEn: 'Danube - Bačka Palanka',
    description: 'Širok deo Dunava sa odličnim priborom za pecanje.',
    waterType: 'Reka',
    coordinates: { lat: 45.2528, lng: 19.3889 },
    fishTypes: ['Som', 'Šaran', 'Smuđ', 'Mrena', 'Babuška'],
    difficulty: 'Srednje',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: true,
      restaurant: false,
    },
    permitRequired: true,
    permitInfo: 'PSD Dunav',
    bestSeasons: ['Proleće', 'Leto', 'Jesen'],
    tips: 'Veliki somovi, najbolje noću. Čamac koristan.',
    region: 'Vojvodina',
    municipality: 'Bačka Palanka',
    rating: 4.5,
    popularityScore: 86,
  },
  {
    id: '23',
    name: 'Vrutci - Jezero',
    nameEn: 'Vrutci Lake',
    description: 'Mala akumulacija sa kristalno čistom izvorskom vodom.',
    waterType: 'Akumulacija',
    coordinates: { lat: 44.0250, lng: 20.0167 },
    fishTypes: ['Pastrmka', 'Šaran'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: false,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: false,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Turistička tačka - info na licu mesta',
    bestSeasons: ['Proleće', 'Leto'],
    tips: 'Turistička lokacija, lepo za porodicu.',
    region: 'Centralna Srbija',
    municipality: 'Užice',
    rating: 4.1,
    popularityScore: 73,
  },
  {
    id: '24',
    name: 'Nišava - Niš',
    nameEn: 'Nišava River - Niš',
    description: 'Gradska reka sa pristupačnim mestima za pecanje.',
    waterType: 'Reka',
    coordinates: { lat: 43.3209, lng: 21.8958 },
    fishTypes: ['Mrena', 'Babuška', 'Plotica', 'Deverika'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: false,
      shelter: false,
      camping: false,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'PD Niš',
    bestSeasons: ['Proleće', 'Jesen'],
    tips: 'Gradska reka, dobra za kraće izlete.',
    region: 'Južna Srbija',
    municipality: 'Niš',
    rating: 3.7,
    popularityScore: 65,
  },
  {
    id: '25',
    name: 'Zlatibor - Ribnjaci',
    nameEn: 'Zlatibor - Fish Ponds',
    description: 'Uređeni ribnjaci na Zlatiboru za sportski ribolov.',
    waterType: 'Jezero',
    coordinates: { lat: 43.7333, lng: 19.7000 },
    fishTypes: ['Pastrmka', 'Šaran'],
    difficulty: 'Lako',
    accessibility: {
      car: true,
      publicTransport: true,
      parkingAvailable: true,
    },
    facilities: {
      restrooms: true,
      shelter: true,
      camping: false,
      restaurant: true,
    },
    permitRequired: true,
    permitInfo: 'Plativo - komercijalni ribnjak',
    bestSeasons: ['Proleće', 'Leto', 'Jesen', 'Zima'],
    tips: 'Komercijalni - plaća se po kilogramu. Garantovan ulov.',
    region: 'Zapadna Srbija',
    municipality: 'Čajetina',
    rating: 4.3,
    popularityScore: 84,
  },
];

// Helper function to get unique values
export const getUniqueFishTypes = (): FishType[] => {
  const fishTypesSet = new Set<FishType>();
  fishingSpots.forEach((spot) => {
    spot.fishTypes.forEach((fish) => fishTypesSet.add(fish));
  });
  return Array.from(fishTypesSet).sort();
};

export const getUniqueWaterTypes = (): WaterType[] => {
  const waterTypesSet = new Set<WaterType>();
  fishingSpots.forEach((spot) => {
    waterTypesSet.add(spot.waterType);
  });
  return Array.from(waterTypesSet).sort();
};

export const getUniqueRegions = (): string[] => {
  const regionsSet = new Set<string>();
  fishingSpots.forEach((spot) => {
    regionsSet.add(spot.region);
  });
  return Array.from(regionsSet).sort();
};

// Filter function
export const filterSpots = (
  spots: FishingSpot[],
  filters: {
    fishTypes?: FishType[];
    waterTypes?: WaterType[];
    difficulty?: Difficulty[];
    permitRequired?: boolean;
    region?: string;
  }
): FishingSpot[] => {
  return spots.filter((spot) => {
    if (filters.fishTypes && filters.fishTypes.length > 0) {
      const hasMatchingFish = filters.fishTypes.some((fish) =>
        spot.fishTypes.includes(fish)
      );
      if (!hasMatchingFish) return false;
    }

    if (filters.waterTypes && filters.waterTypes.length > 0) {
      if (!filters.waterTypes.includes(spot.waterType)) return false;
    }

    if (filters.difficulty && filters.difficulty.length > 0) {
      if (!filters.difficulty.includes(spot.difficulty)) return false;
    }

    if (filters.permitRequired !== undefined) {
      if (spot.permitRequired !== filters.permitRequired) return false;
    }

    if (filters.region) {
      if (spot.region !== filters.region) return false;
    }

    return true;
  });
};
