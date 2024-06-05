import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const TextFieldWrapper = styled.div`
  height: ${toRem(50)};
  min-width: ${toRem(300)};
  background-color: var(--background);
  border-radius: ${toRem(8)};
  overflow: hidden;
  padding: ${toRem(15)} ${toRem(16)};
  display: flex;
  align-items: center;
  gap: ${toRem(8)};
`;

export const Prefix = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  color: var(--additional-font);
`;