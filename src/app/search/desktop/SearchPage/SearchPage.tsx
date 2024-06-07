'use client';

import { Page } from "@/kit/components/Page";
import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { Button } from "@/kit/components/Button";
import { EventsList } from "@/app/search/desktop/EventsList";
import { EventDto } from "@/api/search";
import { Typography } from "@/kit/components/Typography";
import { EmptyResultText } from "@/app/search/styled";
import { useCallback } from "react";

type Props = {
  events: EventDto[];
};

const SearchPage = ({ events }: Props) => {

  const type = 'online';

  const handleToggleType = useCallback(() => {
  }, []);

  return (
    <Container>
      <Page title="Афиша мероприятий в Нижнем новгороде">
        <style.Filters>
          <Button
            variant={type === 'online' ? 'filled' : 'disabled'}
            onClick={handleToggleType}
          >Живые</Button>
          <Button
            variant={type === 'offline' ? 'filled' : 'disabled'}
            onClick={handleToggleType}
          >Онлайн</Button>
        </style.Filters>

        {events.length > 0 ? (
          <EventsList list={events}/>
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