import { State } from '../types/state';
import { OfferType } from '../types/offer-type';

export const getActiveCity = (state: State): string => state.activeCity;
export const getOfferList = (state: State): OfferType[] => state.offers;
export const getActiveSort = (state: State): string => state.activeSort;
