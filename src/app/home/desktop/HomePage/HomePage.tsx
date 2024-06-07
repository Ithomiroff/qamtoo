'use client';

import { Page } from "@/kit/components/Page";
import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { EventsList } from "@/app/home/desktop/EventsList";
import { Typography } from "@/kit/components/Typography";
import { EmptyResultText } from "@/app/home/styled";
import { useSearchFilter } from "@/app/home/hooks/useSearchFilter";


const HomePage = () => {

  const {
    eventsList,
    ButtonsLayout,
  } = useSearchFilter();

  return (
    <Container>
      <Page title="Афиша мероприятий в Нижнем новгороде">
        <style.Filters>
          <ButtonsLayout/>
        </style.Filters>

        {eventsList.length > 0 ? (
          <EventsList list={eventsList}/>
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