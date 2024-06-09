import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: ${toRem(8)};
  width: 100%;
`;
