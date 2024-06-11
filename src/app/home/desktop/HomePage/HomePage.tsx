'use client';

import { Page } from "@/kit/components/Page";
import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import { EmptyResultText } from "@/app/home/styled";
import { useSearchFilter } from "@/app/home/hooks/useSearchFilter";
import { useAppSelector } from "@/store";
import * as eventsSlice from "@/store/events/reducer";
import { EventCard } from "@/kit/components/EventCard";
import { FiltersCard } from "../../components/FiltersCard";
import { MapEvents } from "../../../shared/MapEvents";
import dynamic from "next/dynamic";
import { Button } from "@/kit/components/Button";
import Link from "next/link";
import { eventsMarkers } from "@/store/events/reducer";


const DynamicMap = dynamic(() => import("../../../shared/MapEvents")
  .then((c) => c.MapEvents), { ssr:false })


const HomePage = () => {

  const {
    eventsList,
    ButtonsLayout,
  } = useSearchFilter();

  const filtersActive = useAppSelector(eventsSlice.extendedFilterActiveSelector);
  const eventsMarkers = useAppSelector(eventsSlice.eventsMarkers);

  return (
    <Container>
      <Page title="Афиша мероприятий в Нижнем новгороде">
        <style.Filters>
          <ButtonsLayout/>
        </style.Filters>

        {eventsList.length > 0 ? (
          <>
            <style.MapWrapper>
              <DynamicMap
                style={{ height: '300px', overflow: 'hidden' }}
                markers={eventsMarkers}
              />
              <style.MapWrapperExpand>
                <Link href="/map">
                  <Button
                    variant="filled"
                    icon="map"
                  >
                    смотреть мероприятия на карте
                  </Button>
                </Link>
              </style.MapWrapperExpand>
            </style.MapWrapper>

            <style.Wrapper $filtersActive={filtersActive}>

              {filtersActive && (
                <FiltersCard />
              )}

              <style.List>
                {eventsList.map((item) => (
                  <EventCard
                    key={item._id}
                    value={item}
                  />
                ))}
              </style.List>
            </style.Wrapper>
          </>
          ) : (
          <EmptyResultText>
            <Typography variant="3">Ничего не найдено</Typography>
          </EmptyResultText>
        )}
      </Page>
    </Container>
  )
};

export {
  HomePage
};