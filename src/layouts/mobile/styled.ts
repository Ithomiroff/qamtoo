import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { MOBILE_FOOTER_HEIGHT_PX } from "@/layouts/mobile/meta/consts";


export const MobileHeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const MobileFooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${toRem(MOBILE_FOOTER_HEIGHT_PX)};
  background: var(--background);
  border-top: ${toRem(1)} solid var(--lines);
  z-index: 500;
`;

export const MobileMainStyled = styled.main`
  padding: ${toRem(24)} 0 ${toRem(24 + 60)} 0;
`;