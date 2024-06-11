import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { DESKTOP_FOOTER_HEIGHT_PX, DESKTOP_HEADER_HEIGHT_PX } from "@/layouts/desktop/meta/consts";

export const DesktopBody = styled.body`
  min-width: ${toRem(1060)};
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: ${toRem(DESKTOP_HEADER_HEIGHT_PX)} auto ${toRem(DESKTOP_FOOTER_HEIGHT_PX)};
`;

export const DesktopMain = styled.main`
  padding: ${toRem(40)} 0;
`;
