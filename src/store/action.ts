import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string, 'changeCity'>('changeCity');
export const getOffers = createAction<string, 'getOffers'>('getOffers');
