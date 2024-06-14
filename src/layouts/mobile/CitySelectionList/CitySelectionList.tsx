import * as style from './styled';
import { TextField } from "@/kit/components/TextField";
import SearchIcon from "@/assets/icons/search.svg";
import { Icon } from "@/kit/components/Icon";
import { useCitySelection } from "@/hooks/useCitySelection";

type Props = {
  onClose: () => void;
};

const CitySelectionList = ({ onClose }: Props) => {

  const {
    query,
    setQuery,
    handleSelect,
    filteredCities,
  } = useCitySelection(onClose);

  return (
    <style.Root>
      <style.Wrapper>
        <TextField
          variant="grey"
          size="sm"
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
      <style.List>
        {filteredCities.map((item, i) => (
          <style.Item
            key={i}
            onClick={() => handleSelect(item)}
          >{item}</style.Item>
        ))}
      </style.List>
    </style.Root>
  );
};

export {
  CitySelectionList
};