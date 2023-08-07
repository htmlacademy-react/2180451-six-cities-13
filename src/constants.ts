import { CityType } from './app/types/city-type';

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export const MapSize = {
  main: {
    height: '794px',
    width: '512px',
  },
  offer: {
    height: '579px',
    width: '1144px',
  }
};

export const MARKER_DEFAULT = 'img/pin.svg';
export const MARKER_ACTIVE = 'img/pin-active.svg';
export const RATE_FACTOR = 20;
export const REVIEW_MAX_LENGTH = 50;
export const NEAR_PLACE_CARD_COUNT = 3;
export const DateFormat = {
  fullFormat: 'YYYY-MM-DD',
  monthFormat: 'MMMM',
};
export const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const MarkerSize = {
  iconWidth: 27,
  iconHeight: 39,
  iconAnchor: 13,
};

export const CITY_LIST: CityType[] = [
  {
    id: 0,
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    id: 1,
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
  },
  {
    id: 2,
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    }
  },
  {
    id: 3,
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    id: 4,
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    id: 5,
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export const sortOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];
