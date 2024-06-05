import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(16)};
  padding-top: ${toRem(24)};
  button {
    width: ${toRem(170)};
  }
`;