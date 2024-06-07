'use client';


import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { Button } from "@/kit/components/Button";
import { TextField } from "@/kit/components/TextField";
import SearchIcon from "@/assets/icons/search.svg";
import FiltersIcon from "@/assets/icons/filters.svg";
import { EventCard } from "@/kit/components/EventCard";
import { EventDto } from "@/api/search";
import { useSearchFilter } from "@/app/search/hooks/useSearchFilter";
import { EventsList } from "@/app/search/desktop/EventsList";
import { EmptyResultText } from "@/app/search/styled";
import { Typography } from "@/kit/components/Typography";

type Props = {
  events: EventDto[];
};
const SearchPage = ({ events }: Props) => {


  const {
    filter,
    filteredEvents,
    handleToggleType
  } = useSearchFilter(events);

  return (
    <Container>
      <style.Filters>
        <Button
          variant={filter.type === 'online' ? 'filled' : 'disabled'}
          onClick={handleToggleType}
        >Живые</Button>
        <Button
          variant={filter.type === 'offline' ? 'filled' : 'disabled'}
          onClick={handleToggleType}
        >Онлайн</Button>
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
      {filteredEvents.length > 0 ? (
        <style.EventsList>
          {filteredEvents.map((item) => (
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
  SearchPage
};