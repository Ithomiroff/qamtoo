'use client';


import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { Button } from "@/kit/components/Button";
import { TextField } from "@/kit/components/TextField";
import SearchIcon from "@/assets/icons/search.svg";
import FiltersIcon from "@/assets/icons/filters.svg";
import { EventCard } from "@/kit/components/EventCard";
import { EmptyResultText } from "@/app/home/styled";
import { Typography } from "@/kit/components/Typography";
import { useSearchFilter } from "@/app/home/hooks/useSearchFilter";

const HomePage = () => {

  const {
    eventsList,
    ButtonsLayout,
  } = useSearchFilter();

  return (
    <Container>
      <style.Filters>
        <ButtonsLayout/>
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
      {eventsList.length > 0 ? (
        <style.EventsList>
          {eventsList.map((item) => (
            <EventCard
              key={item._id}
              value={item}
            />
          ))}
        </style.EventsList>
      ) : (
        <EmptyResultText>
          <Typography variant="3">Ничего не найдено</Typography>
        </EmptyResultText>
      )}
    </Container>
  )
};

export {
  HomePage
};