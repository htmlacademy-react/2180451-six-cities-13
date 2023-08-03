import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortOption } from './action';
import { offerList } from '../app/mocks/offer-list';
import { cityList, sortOptions } from '../constants';

const initialState = {
  activeCity: cityList[0].name,
  activeSort: sortOptions[0],
  cityList: cityList,
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
