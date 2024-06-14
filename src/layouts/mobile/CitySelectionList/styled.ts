import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding-bottom: ${toRem(24)};
  input {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  //overflow: auto;
`;

export const Item = styled.li`
  list-style: none;
  padding: ${toRem(12)} 0;
  border-bottom: ${toRem(2)} solid var(--lines);
  font-weight: 400;
  color: var(--main-font);
`;