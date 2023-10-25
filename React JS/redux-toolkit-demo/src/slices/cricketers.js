import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CricketerService from "../services/CricketerService";

const initialState = [];

export const insertCricketer = createAsyncThunk(
  "cricket/create",
  async ({ id, name, runs }) => {
    const res = await CricketerService.create({ id, name, runs});
    return res.data;
  }
);

export const getCricketers = createAsyncThunk(
  "cricket/read",
  async () => {
    const res = await CricketerService.getAll();
    return res.data;
  }
);

export const updateCricketer = createAsyncThunk(
  "cricket/update",
  async ( {id, data}) => {
    const res = await CricketerService.update(id, data);
    return res.data;
  }
);

export const deleteCricketer = createAsyncThunk(
  "cricket/delete",
  async (id) => {
    await CricketerService.remove(id);
    return id ;
  }
);

const cricketerSlice = createSlice({
  name: "cricket",
  initialState,
  extraReducers: {
    [insertCricketer.fulfilled]: (state, action) => {
      return state.push(action.payload);
    },
    [getCricketers.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateCricketer.fulfilled]: (state, action) => {
      const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteCricketer.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

const { reducer } = cricketerSlice;
export default reducer;