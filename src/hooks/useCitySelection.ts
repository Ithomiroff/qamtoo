import { useMemo, useState } from "react";
import { useAppDispatch } from "@/store";
import * as commonStore from "@/store/common";

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
  'Зерноград',
  'Истра',
  'Камень-на-Оби',
  'Качканар',
  'Нижний Новгород',
  'Красноуральск',
  'Купино',
  'Мелеуз',
];
const useCitySelection = (onClose: () => void) => {
  const [query, setQuery] = useState<string>('');

  const dispatch = useAppDispatch();

  const filteredCities = useMemo(() => {
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

  return {
    query,
    setQuery,
    filteredCities,
    handleSelect,
  }
};

export {
  useCitySelection
};