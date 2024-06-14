import { useMemo, useState } from "react";
import * as style from './styled';
import * as commonStore from '@/store/common';
import { TextField } from "@/kit/components/TextField";
import SearchIcon from "@/assets/icons/search.svg";
import { Icon } from "@/kit/components/Icon";
import { useAppDispatch, useAppSelector } from "@/store";
import { useCitySelection } from "@/hooks/useCitySelection";

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

  const {
    query,
    setQuery,
    handleSelect,
    filteredCities,
  } = useCitySelection(onClose);

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
          {filteredCities.map((item, i) => (
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