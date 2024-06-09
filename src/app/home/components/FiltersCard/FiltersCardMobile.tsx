import * as style from './styled';
import { useRef } from "react";
import { TextField } from "@/kit/components/TextField";
import { Label } from "@/kit/components/Label";
import { Tag } from "@/kit/components/Tag";
import CalendarIcon from "@/assets/icons/calendar.svg";

const FiltersCardMobile = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <style.Wrapper ref={ref}>
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
            size="large"
            prefix={<CalendarIcon/>}
          >
            выбрать дату или период</Tag>
        </style.Tags>
      </Label>

    </style.Wrapper>
  )
};

export {
  FiltersCardMobile
};