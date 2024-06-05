import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { EventCardStyled } from "@/kit/components/EventCard/styled";

export const Wrapper = styled.section`
  padding-top: ${toRem(40)};
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