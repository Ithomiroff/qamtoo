import * as styled from './styled';
import { Typography } from "@/kit/components/Typography";
import MarkerIcon from "@/assets/icons/marker.svg";

const CitySelection = () => (
  <styled.Wrapper>
    <styled.Inner>
      <styled.Icon>
        <MarkerIcon/>
      </styled.Icon>
      <Typography variant="text">г. Нижний Новгород</Typography>
    </styled.Inner>
  </styled.Wrapper>
);

export {
  CitySelection
};