'use client';

import { Page } from "@/kit/components/Page";
import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { Button } from "@/kit/components/Button";
import { EventsList } from "@/app/search/desktop/EventsList";

const SearchPage = () => {
  return (
    <Container>
      <Page title="Афиша мероприятий в Нижнем новгороде">
        <style.Filters>
          <Button variant="filled">Живые</Button>
          <Button variant="disabled">Онлайн</Button>
        </style.Filters>
        <EventsList list={[]}/>
      </Page>
    </Container>
  )
};

export {
  SearchPage
};