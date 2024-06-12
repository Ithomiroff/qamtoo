import styled from "styled-components";
import { TextFieldWrapper } from "@/kit/components/TextField/styled";
import { toRem } from "@/kit/utils/helpers";
import { Scrollbar } from "@/kit/components/Scrollbar";

export const Wrapper = styled.div`
  padding: 0 ${toRem(20)} ${toRem(20)} ${toRem(20)};
  input {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Content = styled(Scrollbar)`
  height: ${toRem(427)};
  overflow: auto;
`;

export const Item = styled.li`
  list-style: none;
  padding: ${toRem(12)} ${toRem(24)};
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${toRem(24)};
    width: calc(100% - ${toRem(48)});
    height: ${toRem(2)};
    background-color: var(--lines);
  }
  
  &:hover {
    background: var(--light-gray-background);
    &:after {
      background-color: transparent;
    }
  }
`;