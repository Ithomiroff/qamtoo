import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Scrollbar = styled.div`
  &::-webkit-scrollbar {
    width: ${toRem(8)};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: var(--light-gray);
    border-radius: ${toRem(55)};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--light-blue);
    border-radius: ${toRem(55)};
  }
`;