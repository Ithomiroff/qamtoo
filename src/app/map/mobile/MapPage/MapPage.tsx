'use client'

import dynamic from "next/dynamic";
import * as style from './styled';
import Link from "next/link";
import { Button } from "@/kit/components/Button";


const DynamicMap = dynamic(() => import("../../../../kit/components/MapEvents")
  .then((c) => c.MapEvents), { ssr:false });

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