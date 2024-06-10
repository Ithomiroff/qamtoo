import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Results = styled.ul`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${toRem(24)};
`;

export const Wrapper = styled.div<{ $filterActive: boolean }>`
  padding-top: ${toRem(32)};
  
  ${({ $filterActive }) => $filterActive && css`
    display: grid;
    grid-template-columns: ${toRem(392)} 1fr;
    
    ${Results} {
      grid-template-columns: 1fr 1fr;
      padding-left: ${toRem(48)};
    }
  `}
`;