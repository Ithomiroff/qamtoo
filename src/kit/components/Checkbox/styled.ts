import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Group = styled.div<{ $checked: boolean }>`
  position: relative;
  height: ${toRem(20)};
  width: ${toRem(20)};
  background: var(--background);
  border-radius: ${toRem(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${toRem(1)} solid var(--additional-font);
  cursor: pointer;
  
  ${({ $checked }) => $checked && css`
    border-color: transparent;
    background-color: var(--light-blue);
  `}
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${toRem(20)};
  width: ${toRem(20)};
`;
export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;