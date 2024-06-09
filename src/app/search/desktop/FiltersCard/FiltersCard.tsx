import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import { useRef } from "react";

const FiltersCard = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <style.Wrapper ref={ref}>
      <style.Card>
        <Typography variant="3">Фильтры</Typography>
      </style.Card>
    </style.Wrapper>
  )
};

export {
  FiltersCard
};