import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import LocationIcon from "@/assets/icons/location.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";
import { EventDto } from "@/api/search";
import { toEventDate } from "@/kit/utils/date";

type Props = {
  mobile?: boolean;
  value: EventDto;
};
const EventCard = ({ mobile = false, value }: Props) => {

  return (
    <style.EventCardStyled>
      <style.Inner>
        <style.Images $size={1}>
          <style.ImageWrapper>
            <style.Image src="/phote.png"/>
            <style.Badge $mobile={!!mobile}>
              <Typography variant={mobile ? 'small' : '5'}>{value.min_age} +</Typography>
            </style.Badge>
            <style.Badge
              $mobile={!!mobile}
              $bottom={true}
            >
              <Typography variant={mobile ? 'small' : '5'}>от {value.detail.price} ₽</Typography>
            </style.Badge>
            <style.BadgeButton
              $mobile={!!mobile}
              variant="rounded"
            >
              <FavoriteIcon/>
            </style.BadgeButton>
          </style.ImageWrapper>

          {/*<style.ImageWrapper>*/}
          {/*  <style.Image src="/phote-2.png"/>*/}
          {/*</style.ImageWrapper>*/}
          {/*<style.ImageWrapper>*/}
          {/*  <style.Image src="/phote-3.png"/>*/}
          {/*</style.ImageWrapper>*/}
        </style.Images>
        <style.Description>
          <Typography variant={mobile ? 'text' : '4'}>{value.name}</Typography>
          <style.Detail>
            {!mobile && (
              <style.Icon>
                <CalendarIcon/>
              </style.Icon>
            )}
            <style.Text>{toEventDate(value.detail.start_day, value.detail.end_day)}</style.Text>
            {/*<style.Text>8 марта—12 марта | 14:30</style.Text>*/}
          </style.Detail>

          <style.Detail>
            {!mobile && (
              <style.Icon>
                <LocationIcon/>
              </style.Icon>
            )}
            <style.Text>{value.detail.address}</style.Text>
          </style.Detail>
        </style.Description>
      </style.Inner>
    </style.EventCardStyled>
  )
};

export {
  EventCard
};