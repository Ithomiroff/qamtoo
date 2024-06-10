import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100%;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--basic-font);
    font-size: ${toRem(10)};
  }
`;