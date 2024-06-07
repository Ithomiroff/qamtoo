import { EventCard } from "@/kit/components/EventCard";
import * as style from './styled';
import { EventDto } from "@/api/search";

type Props = {
  list: EventDto[];
};
const EventsList = ({ list }: Props) => {

  return (
    <style.Wrapper>
      <style.List>
        {list.map((item) => (
          <EventCard
            key={item._id}
            value={item}
          />
        ))}
      </style.List>
    </style.Wrapper>
  )
};

export {
  EventsList
};