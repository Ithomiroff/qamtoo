import * as styled from './styled';
import * as eventsSlice from '@/store/events';
import { SearchResults } from "./SearchResults";
import { SyntheticEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Portal } from "@/kit/components/Portal";
import SearchIcon from "@/assets/icons/search.svg";
import { useAppDispatch, useAppSelector } from "@/store";
import { Icon } from "@/kit/components/Icon";
import { Overlay } from "@/kit/components/Overlay";

const SearchField = () => {

  const dispatch = useAppDispatch();
  const query = useAppSelector(eventsSlice.queryFilterSelector);


  const [open, setOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number; size: number }>({ x: 0, y: 0, size: 0 })
  const refWrapper = useRef<HTMLFormElement | null>(null);

  const calcPosition = useCallback(() => {
    if (!refWrapper.current) {
      return;
    }

    const { left, bottom, width } = refWrapper.current?.getBoundingClientRect();
    setPosition({ x: left, y: bottom, size: width });
  }, [setPosition]);

  useLayoutEffect(() => {
    if (open) {
      calcPosition();
    }
  }, [open, calcPosition]);

  const escPressed = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  }, [setOpen]);

  useEffect(() => {
    window.addEventListener('resize', calcPosition);
    window.addEventListener('keydown', escPressed);
    return () => {
      window.removeEventListener('resize', calcPosition)
      window.removeEventListener('keydown', escPressed)
    };
  }, []);

  const handleSearch = useCallback(async (event: SyntheticEvent) => {
    event.preventDefault();
    // @ts-ignore
    dispatch(eventsSlice.fetchFilteredEvents());
  }, [dispatch]);

  const handleChangeQuery = useCallback((event: SyntheticEvent) => {
    dispatch(eventsSlice.changeQuery((event.target as HTMLInputElement).value));
  }, [dispatch]);

  return (
    <>
      <styled.Wrapper
        ref={refWrapper}
        onSubmit={handleSearch}
      >
        <Icon size="xs">
          <SearchIcon/>
        </Icon>
        <styled.Input
          value={query}
          onChange={handleChangeQuery}
          placeholder="Найти мероприятие"
          onFocus={() => setOpen(true)}
          onClick={open ? undefined : () => setOpen(true)}
        />
      </styled.Wrapper>
      {open && (
        <Portal>
          <Overlay
            onClick={() => setOpen(false)}
          />
          <SearchResults
            size={position.size}
            positionX={position.x}
            positionY={position.y}
            results={[]}
          />
        </Portal>
      )}
    </>
  );
};

export {
  SearchField
};