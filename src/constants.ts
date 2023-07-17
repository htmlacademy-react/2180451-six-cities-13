export type Card = {
  id: number;
  url: string;
  isPremium: boolean;
  isFavorite: boolean;
  price: number;
  rate: number;
  name: string;
  type: string;
}

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

export const hotelList: Card[] = [
  {
    id: 1,
    url: 'img/apartment-01.jpg',
    isPremium: true,
    isFavorite: false,
    price: 120,
    rate: 80,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: 2,
    url: 'img/room.jpg',
    isPremium: false,
    isFavorite: true,
    price: 80,
    rate: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 3,
    url: 'img/apartment-02.jpg',
    isPremium: false,
    isFavorite: false,
    price: 132,
    rate: 80,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    url: 'img/apartment-03.jpg',
    isPremium: true,
    isFavorite: false,
    price: 180,
    rate: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    url: 'img/room.jpg',
    isPremium: false,
    isFavorite: false,
    price: 80,
    rate: 80,
    name: 'Wood and stone place',
    type: 'Private room',
  },
];
