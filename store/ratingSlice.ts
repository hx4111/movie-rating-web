import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RatingState {
  rating: number | null;
}

const initialState: RatingState = {
  rating: null,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload
    },
  },
});

export const { setRating } = ratingSlice.actions;

export default ratingSlice.reducer;
