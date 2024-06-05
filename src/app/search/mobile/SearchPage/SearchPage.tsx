'use client';


import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { Button } from "@/kit/components/Button";
import { TextField } from "@/kit/components/TextField";
import SearchIcon from "@/assets/icons/search.svg";
import FiltersIcon from "@/assets/icons/filters.svg";
import { EventCard } from "@/kit/components/EventCard";

const SearchPage = () => {
  return (
    <Container>
      <style.Filters>
        <Button variant="filled">Живые</Button>
        <Button variant="disabled">Онлайн</Button>
      </style.Filters>
      <style.SearchField>
        <TextField
          prefixIcon={<SearchIcon/>}
          placeholder="Найти мероприятие"
        />
        <Button variant="rounded">
          <FiltersIcon/>
        </Button>
      </style.SearchField>
      <style.EventsList>
        <EventCard mobile={true}/>
        <EventCard mobile={true}/>
        <EventCard mobile={true}/>
        <EventCard mobile={true}/>
        <EventCard mobile={true}/>
        <EventCard mobile={true}/>
        <EventCard mobile={true}/>
        <EventCard mobile={true}/>
      </style.EventsList>
    </Container>
  )
};

export {
  SearchPage
};