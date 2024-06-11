'use client'

import dynamic from "next/dynamic";
import * as style from './styled';
import { toRem } from "@/kit/utils/helpers";
import { DESKTOP_HEADER_HEIGHT_PX } from "@/layouts/desktop/meta/consts";
import Link from "next/link";
import { Button } from "@/kit/components/Button";


const DynamicMap = dynamic(() => import("../../../shared/MapEvents")
  .then((c) => c.MapEvents), { ssr:false })

const MAP_HEIGHT = `calc(100vh - ${toRem(DESKTOP_HEADER_HEIGHT_PX)})`;

const MapPage = () => (
  <style.Wrapper>
    <DynamicMap
      style={{ height: '100vh', overflow: 'hidden' }}
    />
    <style.MapLink>
      <Link href="/">
        <Button
          variant="filled"
          icon="layers"
        >
          список
        </Button>
      </Link>
    </style.MapLink>
  </style.Wrapper>
);

export {
  MapPage
};