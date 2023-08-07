import { getActiveCity, getOfferList } from '../selectors/selectors';
import { useAppSelector } from './use-app-selector';

export function UseFilteredOffers() {
  const currentCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOfferList);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentCity);
  return filteredOffers;
}
