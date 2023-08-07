import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<string, 'changeCity'>('changeCity');
export const changeSortOption = createAction<string, 'changeSortOption'>('changeSortOption');


