import { OfferType } from '../types/offer-type';
import { useAppSelector } from './use-app-selector';
import { getActiveSort } from '../selectors/selectors';

export function useSort(offerList: OfferType[]) {

  const currentSort = useAppSelector(getActiveSort);

  switch (currentSort) {
    case 'Price: low to high':
      return offerList.slice().sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return offerList.slice().sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return offerList.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offerList;
  }
}
