import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import LocationIcon from "@/assets/icons/location.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";

type Props = {
  mobile?: boolean;
};
const EventCard = ({ mobile = false }: Props) => {

  return (
    <style.EventCardStyled>
      <style.Inner>
        <style.Images $size={1}>
          <style.ImageWrapper>
            <style.Image src="/phote.png"/>
            <style.Badge $mobile={!!mobile}>
              <Typography variant={mobile ? 'small' : '5'}>12 +</Typography>
            </style.Badge>
            <style.Badge
              $mobile={!!mobile}
              $bottom={true}
            >
              <Typography variant={mobile ? 'small' : '5'}>от 1 300 ₽</Typography>
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
          <Typography variant={mobile ? 'text' : '4'}>Битва хитов — Michael Jackson против Queen группы</Typography>
          <style.Detail>
            {!mobile && (
              <style.Icon>
                <CalendarIcon/>
              </style.Icon>
            )}
            <style.Text>8 марта—12 марта | 14:30</style.Text>
          </style.Detail>

          <style.Detail>
            {!mobile && (
              <style.Icon>
                <LocationIcon/>
              </style.Icon>
            )}
            <style.Text>г. Москва, ул. Красноармейская, 110</style.Text>
          </style.Detail>
        </style.Description>
      </style.Inner>
    </style.EventCardStyled>
  )
};

export {
  EventCard
};