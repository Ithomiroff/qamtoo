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
import { MobileModal } from "@/kit/components/MobileModal";
import { FiltersCardMobile } from "@/app/home/components/FiltersCard";
import { useAppDispatch, useAppSelector } from "@/store";
import * as eventsSlice from "@/store/events/reducer";
import { Icon } from "@/kit/components/Icon";
import Link from "next/link";

const HomePage = () => {

  const dispatch = useAppDispatch();

  const {
    eventsList,
    ButtonsLayout,
  } = useSearchFilter();


  const filtersActive = useAppSelector(eventsSlice.extendedFilterActiveSelector);

  const toggleFilters = () => {
    dispatch(eventsSlice.toggleExtendedFilters());
  };
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

        <Button
          variant="rounded"
          onClick={toggleFilters}
        >
          <Icon>
            <FiltersIcon/>
          </Icon>
        </Button>
      </style.SearchField>

      <style.MapLink>
        <Link href="/map">
          <Button
            variant="filled"
            icon="map"
          >
            карта
          </Button>
        </Link>
      </style.MapLink>

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

      {filtersActive && (
        <MobileModal
          title="Фильтр"
          closeType="close"
          onClose={toggleFilters}
        >
          <FiltersCardMobile/>
        </MobileModal>
      )}
    </Container>
  )
};

export {
  HomePage
};