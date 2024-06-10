import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: -${toRem(16)};
  padding-top: ${toRem(8)};
`;

export const List = styled.ul`
  flex: 2 1;
  overflow: auto;
  margin: 0;
  padding: 0;
`;

export const Footer = styled.div<{ $active?: boolean }>`
  height: ${toRem(113)};
  background-color: var(--background);
  padding: ${toRem(16)};
  opacity: 0.5;
  pointer-events: none;
  
  button {
    width: 100%;
  }
  
  ${({ $active }) => $active && css`
    opacity: 1;
    pointer-events: unset;
  `}
`;

export const ListItem = styled.li<{ $letter?: boolean }>`
  list-style: none;
  background-color: var(--light-gray-background);
  height: ${toRem(34)};
  line-height: ${toRem(34)};
  padding: 0 ${toRem(16)};
  text-transform: uppercase;
`;

export const SubListItem = styled.li`
  margin: 0 ${toRem(16)};
  border-top: ${toRem(2)} solid var(--lines);
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${toRem(12)} 0;
  color: var(--additional-font);
`;