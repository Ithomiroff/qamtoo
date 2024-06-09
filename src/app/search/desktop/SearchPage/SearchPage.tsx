'use client'

import { Page } from "@/kit/components/Page";
import { Container } from "@/kit/components/Container";
import * as style from './styled';
import { FiltersCard } from "@/app/search/desktop/FiltersCard";
import { useSearchFilter } from "@/app/home/hooks/useSearchFilter";
import { EventCard } from "@/kit/components/EventCard";

const SearchPage = () => {

  const {
    eventsList,
  } = useSearchFilter();

  return (
    <Container>
      <Page
        title="Результаты поиска в Нижнем Новгороде">
        <style.Wrapper>
          <FiltersCard/>

          <style.Results>
            {[...eventsList, ...eventsList].map((item) => (
              <EventCard
                key={item._id}
                value={item}
              />
            ))}
          </style.Results>
        </style.Wrapper>
      </Page>
    </Container>
  )
};

export {
  SearchPage
};