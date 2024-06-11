import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  margin: -${toRem(40)} 0 -${toRem(40)} 0;
  position: relative;
`;

export const BackButton = styled.div`
  position: absolute;
  right: ${toRem(28)};
  top: ${toRem(24)};
  z-index: 500;
  animation: fadeIn .3s ease backwards .5s;

  a {
    text-decoration: none;
    color: var(--background);
  }
`;