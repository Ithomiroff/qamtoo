import { EventDto } from "@/api/search";

export type Device = 'mobile' | 'desktop';

export type InitialStoreData = {
  events: EventDto[];
  device: Device;
};

export type LonLat = [number, number];