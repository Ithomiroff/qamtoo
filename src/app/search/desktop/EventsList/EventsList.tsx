import { EventCard } from "@/kit/components/EventCard";
import * as style from './styled';

type Props = {
  list: unknown[];
};
const EventsList = ({ list }: Props) => {

  return (
    <style.Wrapper>
      <style.List>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </style.List>
    </style.Wrapper>
  )
};

export {
  EventsList
};