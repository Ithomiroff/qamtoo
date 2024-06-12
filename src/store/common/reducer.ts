import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { Device } from "@/common/types";

export type CommonState = {
  device: Device;
  city: string;
};

const initialState: CommonState = {
  device: 'desktop',
  city: 'Нижний Новгород',
};

const eventsSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    init: (state: CommonState, action: PayloadAction<Device>) => {
      state.device = action.payload;
    },
    changeCity: (state: CommonState, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});


export const deviceSelector = (state: RootState) => state.common.device;
export const selectedCity = (state: RootState) => state.common.city;

export const {
  init,
  changeCity,
} = eventsSlice.actions;
export default eventsSlice.reducer;
