import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { DESKTOP_FOOTER_HEIGHT_PX } from "@/layouts/desktop/meta/consts";

export const Wrapper = styled.div`
  margin: -${toRem(40)} 0 -${toRem(40 + DESKTOP_FOOTER_HEIGHT_PX)} 0;
`;