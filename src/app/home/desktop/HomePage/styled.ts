import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { EventCardStyled } from "@/kit/components/EventCard/styled";

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(16)};
  padding-top: ${toRem(24)};
  padding-bottom: ${toRem(20)};
  button {
    width: ${toRem(170)};
  }
`;

export const MapWrapper = styled.div`
  border-radius: ${toRem(30)};
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const MapWrapperExpand = styled.div`
  position: absolute;
  bottom: ${toRem(16)};
  left: ${toRem(16)};
  z-index: 2;
  
  a {
    text-decoration: none;
    color: var(--background);
  }
`;


export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${toRem(24)};

  
  
  @media (max-width: 1340px) {
    ${EventCardStyled} {
      width: 100%;
    }
  }
`;

export const Wrapper = styled.section<{ $filtersActive: boolean }>`
  padding-top: ${toRem(40)};
  ${({ $filtersActive }) => $filtersActive && css`
      display: grid;
      grid-template-columns: ${toRem(392)} 1fr;
      
      ${List} {
        padding-left: ${toRem(48)};
        grid-template-columns: repeat(2, 1fr);
        @media(max-width: 1100px) {
          padding-left: ${toRem(24)};
        }
      }
  `}
`;