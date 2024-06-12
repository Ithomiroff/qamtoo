import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  padding-left: ${toRem(16)};
`;

export const Icon = styled.div`
  margin-right: ${toRem(16)};
  display: inline-block;
  color: var(--attention);
`;

export const Inner = styled.div`
  width: ${toRem(183)};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  gap: ${toRem(8)};
  color: var(--background);
  cursor: pointer;
  span {
    vertical-align: super;
  }
`;