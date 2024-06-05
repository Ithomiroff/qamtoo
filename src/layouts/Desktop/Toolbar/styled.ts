import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Header = styled.header`
  height: ${toRem(94)};
  background: var(--dark-gradient);
  display: flex;
  align-items: center;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
`;


export const InputWrapper = styled.div`
  padding-left: ${toRem(40)};
  display: flex;
  align-items: center;
  gap: ${toRem(16)};
  
  @media(max-width: 1260px) {
    padding-left: ${toRem(15)};
  }
`