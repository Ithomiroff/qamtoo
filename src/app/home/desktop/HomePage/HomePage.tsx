'use client';

import { Page } from "@/kit/components/Page";
import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { EventsList } from "@/app/home/desktop/EventsList";
import { Typography } from "@/kit/components/Typography";
import { EmptyResultText } from "@/app/home/styled";
import { useSearchFilter } from "@/app/home/hooks/useSearchFilter";
import { useAppSelector } from "@/store";
import * as eventsSlice from "@/store/events/reducer";
import { EventCard } from "@/kit/components/EventCard";
import { FiltersCard } from "../../components/FiltersCard";


const HomePage = () => {

  const {
    eventsList,
    ButtonsLayout,
  } = useSearchFilter();

  const filtersActive = useAppSelector(eventsSlice.extendedFilterActiveSelector);

  return (
    <Container>
      <Page title="Афиша мероприятий в Нижнем новгороде">
        <style.Filters>
          <ButtonsLayout/>
        </style.Filters>

        {eventsList.length > 0 ? (
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