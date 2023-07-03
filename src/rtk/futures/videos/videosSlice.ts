import {createSlice} from '@reduxjs/toolkit';
import db from '../../../db/db.json';

const videosSlice = createSlice({
  name: 'Videos',
  initialState: {
    videos: db,
    filteredVideos: db,
    relatedVideos: null,
  },
  reducers: {
    playFilter: (state, action) => {
      if (action.payload === 'All') {
        state.filteredVideos = state.videos;
      } else {
        state.filteredVideos = state.videos.filter(data =>
          data.title.toLowerCase().includes(action.payload.toLowerCase()),
        );
      }
    },
    handleRelatedVideos: (state, action) => {
      state.relatedVideos = state.videos.filter(data =>
        data.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
});

export const {playFilter, handleRelatedVideos} = videosSlice.actions;
export default videosSlice.reducer;
