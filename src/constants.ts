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

export const MARKER_DEFAULT = 'img/pin.svg';
export const MARKER_ACTIVE = 'img/pin-active.svg';
export const MAIN_PAGE_MAP_SIZE = {
  height: 794,
  width: 512,
};
export const OFFER_MAP_SIZE = {
  height: 579,
  width: 1144,
};
