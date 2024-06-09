import { PropsWithChildren, useLayoutEffect, useRef } from "react";

const StickyElementPosition = ({ children }: PropsWithChildren) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current === null) {
      return;
    }

    if ("getBoundingClientRect" in ref.current) {
      const rect = ref.current.getBoundingClientRect();
      ref.current.style.position = 'sticky';
      ref.current.style.top = `${rect.y}px`;
    }
  }, []);

  return (
    <div ref={ref}>{children}</div>
  )
};

export {
  StickyElementPosition
};