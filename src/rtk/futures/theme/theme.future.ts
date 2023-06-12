import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: true,
  },
  reducers: {
    toggleMode: state => {
      state.isDark = !state.isDark;
    },
  },
});

export const {toggleMode} = themeSlice.actions;
export default themeSlice.reducer;
