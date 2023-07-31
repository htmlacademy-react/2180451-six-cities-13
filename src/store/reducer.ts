import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { offerList } from '../app/mocks/offer-list';
import { cityList } from '../constants';

const initialState = {
  currentCity: 'Paris',
  cityList: cityList,
  offers: offerList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});
