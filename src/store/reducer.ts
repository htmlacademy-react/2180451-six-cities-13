import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortOption } from './action';
import { offerList } from '../app/mocks/offer-list';
import { CITY_LIST, sortOptions } from '../constants';

const initialState = {
  activeCity: CITY_LIST[0].name,
  activeSort: sortOptions[0],
  cityList: CITY_LIST,
  offers: offerList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSortOption, (state, action) => {
      state.activeSort = action.payload;
    });
});
