'use client'

import dynamic from "next/dynamic";
import * as style from './styled';
import { toRem } from "@/kit/utils/helpers";
import { DESKTOP_HEADER_HEIGHT_PX } from "@/layouts/desktop/meta/consts";
import { EventsCard } from "@/app/map/desktop/EventsCard";
import { Button } from "@/kit/components/Button";
import Link from "next/link";


const DynamicMap = dynamic(() => import("../../../shared/MapEvents")
  .then((c) => c.MapEvents), { ssr:false })

const MAP_HEIGHT = `calc(100vh - ${toRem(DESKTOP_HEADER_HEIGHT_PX)})`;

const MapPage = () => (
  <style.Wrapper>
    <DynamicMap
      style={{ height: MAP_HEIGHT, overflow: 'hidden' }}
    />
    <EventsCard/>
    <style.BackButton>
      <Link href="/">
        <Button
          variant="filled"
          icon="map"
        >
          смотреть мероприятия списоком
        </Button>
      </Link>
    </style.BackButton>
  </style.Wrapper>
);

export {
  MapPage
};