import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--basic-font);
  font-size: ${toRem(10)};
  transform: translateY(-10%);
`;

export const IconWrapper = styled.div`
  height: ${toRem(28)};
  width: ${toRem(28)};
  background: var(--light-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;