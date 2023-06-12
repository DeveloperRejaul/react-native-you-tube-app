import {createSlice} from '@reduxjs/toolkit';

const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tags: ['All', 'react', 'javascript', 'python', 'java', 'c++', 'html'],
    activeTag: 'All',
  },
  reducers: {
    setTags: (state, action) => {},
    setActiveTag: (state, action) => {
      state.activeTag = action.payload;
    },
  },
});

export const {setTags, setActiveTag} = tagsSlice.actions;
export default tagsSlice.reducer;
