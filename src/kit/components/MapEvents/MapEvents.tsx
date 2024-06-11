'use client'

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Leaflet, { LatLngTuple } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { CSSProperties } from "react";

type Props = {
  style?: CSSProperties;
  markers?: LatLngTuple[]
}
const center = [55.426827, 41.529426] as LatLngTuple;

// @ts-ignore
const Icon = new Leaflet.divIcon({
  html: (
    `<div class="custom-marker"/>`
  ),
  popupAnchor:  [-0, -0],
  iconSize: [20,20],
});

const MapEvents = ({ style, markers = [] }: Props) => {
  return (
    <MapContainer
      center={center}
      zoom={5}
      scrollWheelZoom={false}
      style={style}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers?.map((position) => (
        <Marker position={position} icon={Icon}/>
      ))}
    </MapContainer>
  )
};

export {
  MapEvents
};