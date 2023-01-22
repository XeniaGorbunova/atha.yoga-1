/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';
import getFavoritesSlice from './getFavorites';
import addFavoriteSlice from './addFavorites';
import removeFavoritesSlice from './removeFavorites';

const initialState = {
  favoritesLessons: [],
  errorMessage: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: {
    [getFavoritesSlice.fulfilled]: (state, action) => {
      state.favoritesLessons = action.payload.data;
      state.errorMessage = null;
    },
    [getFavoritesSlice.rejected]: (state, action) => {
      state.errorMessage = action.payload;
    },
    [addFavoriteSlice.fulfilled]: (state, action) => {
      state.favoritesLessons = [action.payload, ...state.favoritesLessons];
      state.errorMessage = null;
    },
    [addFavoriteSlice.rejected]: (state, action) => {
      state.errorMessage = action.payload;
    },
    [removeFavoritesSlice.fulfilled]: (state, action) => {
      state.favoritesLessons = state.favoritesLessons
        .filter(el => el.id !== action.payload.id);
      state.errorMessage = null;
    },
    [removeFavoritesSlice.rejected]: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export default favoritesSlice.reducer;
