import { useMemo, useState } from "react";
import * as style from './styled';
import * as commonStore from '@/store/common';
import { TextField } from "@/kit/components/TextField";
import SearchIcon from "@/assets/icons/search.svg";
import { Icon } from "@/kit/components/Icon";
import { useAppDispatch, useAppSelector } from "@/store";

const CITIES = [
  'Москва',
  'Елизово',
  'Абакан',
  'Богородск',
  'Владикавказ',
  'Владимир',
  'Голицыно',
  'Дюртюли',
  'Зерноград',
  'Истра',
  'Камень-на-Оби',
  'Качканар',
  'Нижний Новгород',
  'Красноуральск',
  'Купино',
  'Мелеуз',
];

type Props = {
  onClose: () => void;
};

const CitySelectionModal = ({ onClose }: Props) => {

  const [query, setQuery] = useState<string>('');

  const dispatch = useAppDispatch();

  const filtered = useMemo(() => {
    const result = CITIES.sort((a, b) => a > b ? 1 : -1);
    if (!query.length) {
      return result;
    }
    return result.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }, [CITIES, query]);

  const handleSelect = (city: string) => {
    dispatch(commonStore.changeCity(city));
    onClose();
  };

  return (
    <>
      <style.Wrapper>
        <TextField
          variant="grey"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          prefixIcon={
            <Icon size="xs">
              <SearchIcon/>
            </Icon>
          }
          placeholder="Поиск города"
        />
      </style.Wrapper>
      <style.Content>
        <style.List>
          {filtered.map((item, i) => (
            <style.Item
              key={i}
              onClick={() => handleSelect(item)}
            >{item}</style.Item>
          ))}
        </style.List>
      </style.Content>
    </>
  );
};

export {
  CitySelectionModal
};