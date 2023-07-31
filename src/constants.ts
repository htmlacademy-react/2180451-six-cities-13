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

export const MarkerSize = {
  iconWidth: 27,
  iconHeight: 39,
  iconAnchor: 13,
};
