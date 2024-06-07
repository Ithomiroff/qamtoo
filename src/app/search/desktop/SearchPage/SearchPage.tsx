'use client';

import { Page } from "@/kit/components/Page";
import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { Button } from "@/kit/components/Button";
import { EventsList } from "@/app/search/desktop/EventsList";
import { Typography } from "@/kit/components/Typography";
import { EmptyResultText } from "@/app/search/styled";
import { useSearchFilter } from "@/app/search/hooks/useSearchFilter";


const SearchPage = () => {

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
  SearchPage
};