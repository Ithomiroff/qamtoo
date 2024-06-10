import * as style from './styled';
import { Fragment, useEffect, useMemo, useState } from "react";
import { Button } from "@/kit/components/Button";
import { CategoryDto } from "@/api/static";
import { Checkbox } from "@/kit/components/Checkbox";
import { Typography } from "@/kit/components/Typography";
import { Text } from "@/kit/components/Typography/Typography";

type Chunk = {
  letter: string;
  items: CategoryDto[];
}

type Props = {
  selected: string[];
  list: CategoryDto[];
  onSelect: (ids: string[]) => void;
};

const TypeEventSelect = ({ selected, list, onSelect }: Props) => {

  const [query, setQuery] = useState<string>('');
  const [localSelected, setLocalSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    setLocalSelected(new Set(selected));
  }, [selected]);

  const chunks = useMemo(() => {
    const result: Chunk[] = [];

    let chunk: Chunk | null = null;
    for (let i = 0; i < list.length; i++) {
      if (!chunk) {
        chunk = {
          letter: list[i].label.toLowerCase().charAt(0),
          items: [list[i]],
        };
      } else {
        if (chunk.letter === list[i].label.toLowerCase().charAt(0)) {
          chunk.items.push(list[i]);
        } else {
          result.push(chunk);
          chunk = {
            letter: list[i].label.toLowerCase().charAt(0),
            items: [list[i]],
          };
        }
      }
    }

    if (chunk) {
      result.push(chunk);
    }

    return result;
  }, [list]);

  const handleToggle = (id: string) => () => {

    setLocalSelected((prev) =>  {
      const updated = new Set(prev);

      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }

      return updated;
    })
  };

  return (
    <style.Wrapper>
      <style.List>
        {chunks.map((chunk) => (
          <Fragment key={chunk.letter}>
            <style.ListItem>
              {chunk.letter}
            </style.ListItem>
            {chunk.items.map((item) => (
              <style.SubListItem
                key={item.id}
                onClick={handleToggle(item.id)}
              >
                <Typography variant="text">{item.label}</Typography>
                <Checkbox
                  checked={localSelected.has(item.id)}
                  onChangeCheckbox={handleToggle(item.id)}
                />
              </style.SubListItem>
            ))}
          </Fragment>
        ))}
      </style.List>
      <style.Footer $active={localSelected.size > 0}>
        <Button
          variant="filled"
          onClick={() => onSelect(Array.from(localSelected))}
        >
          Применить
        </Button>
      </style.Footer>
    </style.Wrapper>
  )
};

export {
  TypeEventSelect
};