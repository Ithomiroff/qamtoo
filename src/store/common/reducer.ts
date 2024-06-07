import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { Device } from "@/common/types";

export type CommonState = {
  device: Device;
};

const initialState: CommonState = {
  device: 'desktop',
};

const eventsSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    init: (state: CommonState, action: PayloadAction<Device>) => {
      state.device = action.payload;
    },
  },
});


export const deviceSelector = (state: RootState) => state.common.device;

export const {
  init,
} = eventsSlice.actions;
export default eventsSlice.reducer;
