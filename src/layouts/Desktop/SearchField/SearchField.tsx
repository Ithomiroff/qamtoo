import * as styled from './styled';
import Image from "next/image";
import { SearchResults } from "./SearchResults";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Portal } from "@/kit/components/Portal";
import SearchIcon from "@/assets/icons/search.svg";

const SearchField = () => {

  const [open, setOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number; size: number }>({ x: 0, y: 0, size: 0 })
  const refWrapper = useRef<HTMLDivElement | null>(null);

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

  return (
    <>
      <styled.Wrapper
        ref={refWrapper}
      >
        <SearchIcon/>
        <styled.Input
          placeholder="Найти мероприятие"
          onFocus={() => setOpen(true)}
          onClick={open ? undefined : () => setOpen(true)}
        />
      </styled.Wrapper>
      {open && (
        <Portal>
          <styled.Overlay
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