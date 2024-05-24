import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push({ id: Date.now(), title: action.payload.title });
    },
    editSong: (state, action) => {
      const index = state.findIndex(song => song.id === action.payload.id);
      if (index !== -1) {
        state[index].title = action.payload.title;
      }
    },
    deleteSong: (state, action) => {
      return state.filter(song => song.id !== action.payload.id);
    }
  }
});

export const { addSong, editSong, deleteSong } = songsSlice.actions;
export default songsSlice.reducer;
