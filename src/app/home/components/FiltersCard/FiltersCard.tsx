import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import { TextField } from "@/kit/components/TextField";
import { Label } from "@/kit/components/Label";
import { Tag } from "@/kit/components/Tag";
import CalendarIcon from "@/assets/icons/calendar.svg";
import { Button } from "@/kit/components/Button";
import { useEffect } from "react";
import * as eventsSlice from '@/store/events';
import { useAppDispatch, useAppSelector } from "@/store";
import { Accordion } from "@/kit/components/Accordion";
import { Icon } from "@/kit/components/Icon";
import { Checkbox } from "@/kit/components/Checkbox";

const FiltersCard = () => {

  const dispatch = useAppDispatch();

  const categories = useAppSelector(eventsSlice.eventsCategories);
  const selectedCategoriesIds = useAppSelector(eventsSlice.selectedFilterCategoriesIds);

  useEffect(() => {
    // @ts-ignore
    dispatch(eventsSlice.fetchCategoriesEvents());
  }, []);

  const handleToggleCategory = (id: string) => () => {
    dispatch(eventsSlice.toggleSelectCategory(id));
  };

  return (
    <style.Wrapper>
      <style.Card>
        <Typography variant="3">Фильтры</Typography>

        <Accordion
          title={<Typography variant="subheader">Тип мероприятия</Typography>}
        >
          <style.VariantsType>
            {categories.map((item) => (
              <style.Variant
                key={item.id}
                onClick={handleToggleCategory(item.id)}
              >
                <span>{item.label}</span>
                <Checkbox
                  checked={selectedCategoriesIds.includes(item.id)}
                  onChangeCheckbox={handleToggleCategory(item.id)}
                />
              </style.Variant>
            ))}
          </style.VariantsType>
        </Accordion>

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
              prefix={(
                <Icon size="lg">
                  <CalendarIcon/>
                </Icon>
              )}
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