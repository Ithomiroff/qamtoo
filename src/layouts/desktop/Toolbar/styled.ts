import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { DESKTOP_HEADER_HEIGHT_PX } from "@/layouts/desktop/meta/consts";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  height: ${toRem(DESKTOP_HEADER_HEIGHT_PX)};
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