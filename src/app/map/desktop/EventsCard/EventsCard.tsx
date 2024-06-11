import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import * as eventsSlice from '@/store/events';
import { useAppSelector } from "@/store";
import { EventCard } from "@/kit/components/EventCard";
const EventsCard = () => {

  const events = useAppSelector(eventsSlice.eventsListSelector);

  return (
    <style.Wrapper>
      <style.Card>
        <style.Header>
           <Typography variant="4">Афиша в Нижнем Новгороде</Typography>
           <Typography variant="subheader">24 мероприятия</Typography>
        </style.Header>
        <style.Content>
          {events.map((item) => (
            <style.WrapperCard>
              <EventCard
                key={item._id}
                value={item}
              />
            </style.WrapperCard>
          ))}
        </style.Content>
      </style.Card>
    </style.Wrapper>
  )
};

export {
  EventsCard
};