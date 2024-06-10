import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { TextFieldWrapper } from "@/kit/components/TextField/styled";
import { StyledButton } from "@/kit/components/Button/Button";
import { EventCardStyled } from "@/kit/components/EventCard/styled";

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(16)};
  button {
    width: 50%;
  }
`;

export const SearchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${toRem(8)};
  padding: ${toRem(16)} 0;
  
  ${TextFieldWrapper} {
    width: 100%;
    flex: 1 1;
  }
  
  ${StyledButton} {
    border-radius: 0;
    box-shadow: none;
    height: ${toRem(50)};
    width: ${toRem(50)};
  }
`;

export const EventsList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${toRem(8)};
  
  ${EventCardStyled} {
    width: 100%;
  }
  
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;