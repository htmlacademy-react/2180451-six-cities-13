import { OfferType } from '../../types/offer-type';

export function useSort(offerList: OfferType[], currentSort: string) {
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

