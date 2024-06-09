import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import { useEffect, useRef } from "react";
import { getCategories, getTags } from "@/api/static/api";
import { TextField } from "@/kit/components/TextField";
import { Label } from "@/kit/components/Label";
import { DoubleFields, Tags } from "./styled";
import { Tag } from "@/kit/components/Tag";
import CalendarIcon from "@/assets/icons/calendar.svg";
import { Button } from "@/kit/components/Button";

const FiltersCard = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getCategories();
    getTags();
  }, []);

  return (
    <style.Wrapper ref={ref}>
      <style.Card>
        <Typography variant="3">Фильтры</Typography>
        
        <Label text="Стоимость">
          <style.DoubleFields>
            <TextField
              variant="outlined"
              prefix="От"
            />
            <TextField
              variant="outlined"
              prefix="До"
            />
          </style.DoubleFields>
        </Label>

        <style.Divider/>

        <Label text="Возраст">
          <TextField
            full={true}
            variant="outlined"
            prefix="От"
          />
        </Label>

        <style.Divider/>

        <Label text="Дата периода мероприятия">
          <style.Tags>
            <Tag variant="filled">сегодня</Tag>
            <Tag>завтра</Tag>
            <Tag>на этой неделе</Tag>
            <Tag
              variant="outlined"
              prefix={<CalendarIcon/>}
            >
              выбрать дату или период</Tag>
          </style.Tags>
        </Label>

        <style.Divider $spaceOnly={true}/>

        <Label text="Время посещения">
          <style.DoubleFields>
            <TextField
              variant="outlined"
              prefix="От"
            />
            <TextField
              variant="outlined"
              prefix="До"
            />
          </style.DoubleFields>
        </Label>
        <style.Footer>
          <Button
            variant="filled"
          >Показать объявления</Button>
        </style.Footer>
      </style.Card>
    </style.Wrapper>
  )
};

export {
  FiltersCard
};