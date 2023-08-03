import { createAction } from '@reduxjs/toolkit';
import { State } from '../app/types/state';
import { OfferType } from '../app/types/offer-type';

export const changeCity = createAction<string, 'changeCity'>('changeCity');
export const changeSortOption = createAction<string, 'changeSortOption'>('changeSortOption');

export const getActiveCity = (state: State): string => state.activeCity;
export const getOfferList = (state: State): OfferType[] => state.offers;
export const getActiveSort = (state: State): string => state.activeSort;
