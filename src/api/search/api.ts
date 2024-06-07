import api, { clientApi } from "@/api";
import { _EventServerDto, EventDto, SearchFilterDto } from "@/api/search/dto";
import { isServerEnv } from "@/kit/utils/helpers";

const formatServerEvents = (origin: _EventServerDto[]): EventDto[] => origin.map((item) => ({
  _id: item._id,
  ...item._source,
} as EventDto));

export const getEvents = async (from: number = 0, size: number = 10): Promise<EventDto[]> => {
  const data = await api.get<_EventServerDto[]>('/event', { from, size });
  return formatServerEvents(data);
};
export const getMyEvents = () => api.get('/event/myEvents');

export const getFilteredEvents = async (body: SearchFilterDto): Promise<EventDto[]> => {
  const data = await clientApi.post<SearchFilterDto, _EventServerDto[]>('/event/findByFilter', body);
  return formatServerEvents(data);
}