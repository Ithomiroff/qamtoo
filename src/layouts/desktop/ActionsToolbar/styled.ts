import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(16)};
  margin-left: auto;
`;