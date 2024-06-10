import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: ${toRem(28)};
  line-height: ${toRem(28)};
  user-select: none;
`;

export const Content = styled.div`
  padding-top: ${toRem(8)};
`;