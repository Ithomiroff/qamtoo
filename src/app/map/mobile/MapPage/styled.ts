import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { MOBILE_FOOTER_HEIGHT_PX } from "@/layouts/mobile/meta/consts";

export const Wrapper = styled.div`
  position: relative;
  margin: -${toRem(24)} 0 0 0;
`;

export const MapLink = styled.div`
  position: fixed;
  left: ${toRem(16)};
  bottom: ${toRem(MOBILE_FOOTER_HEIGHT_PX + 16)};
  z-index: 10;

  a {
    text-decoration: none;
    color: var(--background);
  }
`;