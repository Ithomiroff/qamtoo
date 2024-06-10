import * as style from './styled';
import { TextField } from "@/kit/components/TextField";
import { Label } from "@/kit/components/Label";
import { Tag } from "@/kit/components/Tag";
import CalendarIcon from "@/assets/icons/calendar.svg";
import { Icon } from "@/kit/components/Icon";
import { Typography } from "@/kit/components/Typography";
import { useEffect, useState } from "react";
import { MobileModal } from "@/kit/components/MobileModal";
import { useAppDispatch, useAppSelector } from "@/store";
import * as eventsSlice from "@/store/events/reducer";
import { TypeEventSelect } from "@/app/home/components/TypeEventSelect";
import { selectedFilterCategoriesFull } from "@/store/events/reducer";

const FiltersCardMobile = () => {

  const dispatch = useAppDispatch();

  const categories = useAppSelector(eventsSlice.eventsCategories);
  const selectedCategoriesIds = useAppSelector(eventsSlice.selectedFilterCategoriesIds);
  const selectedCategories = useAppSelector(eventsSlice.selectedFilterCategoriesFull);

  const [openSelection, setOpenSelection] = useState<boolean>(false);

  useEffect(() => {
    // @ts-ignore
    dispatch(eventsSlice.fetchCategoriesEvents());
  }, []);

  const handleToggle = () => setOpenSelection((prev) => !prev);

  const handleSelectCategories = (ids: string[]) => {
    dispatch(eventsSlice.forceSelectCategories(ids));
    setOpenSelection(false);
  };

  return (
    <style.Wrapper>

      <style.TypeSelect>
        <Typography variant="subheader">Тип мероприятия</Typography>
        <style.Selector
          onClick={handleToggle}
        >
          <Typography variant="small">выбрать</Typography>
        </style.Selector>
      </style.TypeSelect>

      <style.Tags>
        {selectedCategories.map((item) => (
            <Tag
              key={item.id}
              variant="filled"
            >{item.label}</Tag>
        ))}
      </style.Tags>

      <style.Divider/>

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
            prefix={
              <Icon>
                <CalendarIcon/>
              </Icon>
            }
          >
            выбрать дату или период</Tag>
        </style.Tags>
      </Label>
      {openSelection && (
        <MobileModal
          title="Тип мероприятия"
          closeType="prev"
          onClose={handleToggle}
        >
          <TypeEventSelect
            list={categories}
            selected={selectedCategoriesIds}
            onSelect={handleSelectCategories}
          />
        </MobileModal>
      )}
    </style.Wrapper>
  )
};

export {
  FiltersCardMobile
};