import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventDto, SearchFilterDto } from "@/api/search";
import { RootState } from "@/store";
import { getFilteredEvents } from "@/api/search/api";

export type EventsState = {
  events: EventDto[];
  query: string;
  additionalFilters: Record<string, string | boolean>;
};

const initialState: EventsState = {
  events: [],
  query: '',
  additionalFilters: { isPublish: true },
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    init: (state: EventsState, action: PayloadAction<EventDto[]>) => {
      state.events = action.payload;
    },
    changeQuery: (state: EventsState, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    changeFilter: (state: EventsState, action: PayloadAction<{key: string, value: string | boolean}>) => {
      state.additionalFilters = {
        ...state.additionalFilters,
        [action.payload.key]: action.payload.value
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilteredEvents.fulfilled, (state: EventsState, action) => {
      state.events = action.payload;
    });
  },
});


export const fetchFilteredEvents = createAsyncThunk<EventDto[]>(
  'users/fetchFilteredEvents',
  async (_, thunkAPI) => {

    const {
      events
    } = thunkAPI.getState() as RootState;

    const body: SearchFilterDto = {
      query: events.query,
      filters: Object.keys(events.additionalFilters).map((key) => ({
        field: key,
        value: events.additionalFilters[key].toString(),
      })),
      from: 0,
      size: 40,
    };
    return getFilteredEvents(body);
  },
)


export const eventsListSelector = (state: RootState) => state.events.events;
export const queryFilterSelector = (state: RootState) => state.events.query;
export const filterByKeySelector = (key: string) => (state: RootState) => state.events.additionalFilters[key];

export const {
  init,
  changeFilter,
  changeQuery,
} = eventsSlice.actions;
export default eventsSlice.reducer;
