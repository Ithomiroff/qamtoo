'use client'

import { PropsWithChildren, useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from "@/store";
import * as eventsSlice from '@/store/events';
import * as commonSlice from '@/store/common';
import { InitialStoreData } from "@/common/types";

type Props = {
  initialData: InitialStoreData;
};
export default function StoreProvider({ children, initialData }: PropsWithChildren<Props>) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();

    storeRef.current?.dispatch(eventsSlice.init(initialData.events));
    storeRef.current?.dispatch(commonSlice.init(initialData.device));

  }

  return <Provider store={storeRef.current as AppStore}>{children}</Provider>
}