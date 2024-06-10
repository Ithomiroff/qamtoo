import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventDto, SearchFilterDto } from "@/api/search";
import { RootState } from "@/store";
import { getFilteredEvents } from "@/api/search/api";
import { CategoryDto, getCategories } from "@/api/static";

export type EventsState = {
  events: EventDto[];
  query: string;
  additionalFilters: Record<string, string | boolean>;
  extendedFiltersActive: boolean;
  categories: CategoryDto[];
  selectedCategoriesIds: string[];
};

const initialState: EventsState = {
  events: [],
  query: '',
  additionalFilters: { isPublish: true },
  extendedFiltersActive: false,
  categories: [],
  selectedCategoriesIds: [],
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
    toggleExtendedFilters: (state: EventsState) => {
      state.extendedFiltersActive = !state.extendedFiltersActive;
    },
    toggleSelectCategory: (state: EventsState, action: PayloadAction<string>) => {
      const selected = new Set(state.selectedCategoriesIds);

      if (selected.has(action.payload)) {
        selected.delete(action.payload);
      } else {
        selected.add(action.payload);
      }
      state.selectedCategoriesIds = Array.from(selected);
    },
    forceSelectCategories: (state: EventsState, action: PayloadAction<string[]>) => {
      state.selectedCategoriesIds = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilteredEvents.fulfilled, (state: EventsState, action) => {
      state.events = action.payload;
    });
    builder.addCase(fetchCategoriesEvents.fulfilled, (state: EventsState, action) => {
      state.categories = action.payload.sort((a, b) => a.label > b.label ? 1 : -1);
    });
  },
});


export const fetchFilteredEvents = createAsyncThunk<EventDto[]>(
  'events/fetchFilteredEvents',
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


export const fetchCategoriesEvents = createAsyncThunk<CategoryDto[]>(
  'events/fetchCategoriesEvents',
  () => getCategories()
);


export const eventsListSelector = (state: RootState) => state.events.events;
export const queryFilterSelector = (state: RootState) => state.events.query;
export const extendedFilterActiveSelector = (state: RootState) => state.events.extendedFiltersActive;
export const eventsCategories = (state: RootState) => state.events.categories;
export const selectedFilterCategoriesIds = (state: RootState) => state.events.selectedCategoriesIds;
export const selectedFilterCategoriesFull = (state: RootState) => state.events.categories
  .filter((item) => state.events.selectedCategoriesIds.includes(item.id));
export const filterByKeySelector = (key: string) => (state: RootState) => state.events.additionalFilters[key];

export const {
  init,
  changeFilter,
  changeQuery,
  toggleExtendedFilters,
  toggleSelectCategory,
  forceSelectCategories,
} = eventsSlice.actions;
export default eventsSlice.reducer;
