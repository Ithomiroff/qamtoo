export type EventCategoryDto = {
  id: string;
  label: string;
};

export type EventTagDto = EventCategoryDto;

export type EventDetailDto = {
  lat: string;
  lon: string;
  price: number;
  start_day: string;
  end_day: string;
  address: string;
};

export type EventContactDto = {
  event_id: string;
  value: string;
  contact_type: string;
};

export type EventSourceDto = {
  access: boolean;
  city_id: number;
  min_age: number;
  description: string;
  categories: EventCategoryDto[];
  contacts: EventContactDto[];
  detail: EventDetailDto;
  isPublish: boolean;
  name: string;
  owner: string;
  status: string;
  tags: EventTagDto[];
};

export type _EventServerDto = {
  _id: string;
  _source: EventSourceDto;
};

export type SearchFilterItemDto = {
  field: string;
  value: string;
};

export type SearchFilterDto = {
  query: string;
  filters: SearchFilterItemDto[];
  from?: number;
  size?: number;
};

export type EventDto = Pick<_EventServerDto, '_id'> & EventSourceDto;