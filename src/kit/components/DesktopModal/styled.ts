import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const Card = styled.div`
  width: ${toRem(400)};
  background: var(--background);
  border-radius: ${toRem(24)};
  overflow: hidden;
`;

export const Close = styled.div`
  position: absolute;
  top: ${toRem(16)};
  right: ${toRem(8)};
  button {
    box-shadow: none;
  }
`;

export const Header = styled.div`
  width: ${toRem(400)};
  background: var(--background);
  border-radius: ${toRem(24)};
  color: var(--main-font);
  padding: ${toRem(20)} ${toRem(24)} ${toRem(16)} ${toRem(24)};
`;

export const Inner = styled.div`
`;