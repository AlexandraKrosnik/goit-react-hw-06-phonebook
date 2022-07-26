import { createSlice } from '@reduxjs/toolkit';
const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = itemsSlice.actions;
export default itemsSlice.reducer;
