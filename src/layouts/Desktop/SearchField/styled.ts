import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.form`
  background-color: var(--background);
  border-radius: ${toRem(16)};
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: ${toRem(8)};
  padding: 0 ${toRem(8)};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: ${toRem(16)};
  height: ${toRem(46)};
  width: ${toRem(389)};
  color: var(--black);
  font-weight: 400;
  
  @media(max-width: 1240px) {
    width: ${toRem(200)};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  opacity: 20%;
`;

export const Dropdown = styled.div<{$width: number }>`
  width: ${({ $width }) => $width}px;
  border-radius: ${toRem(8)};
  background-color: var(--background);
  padding: ${toRem(16)} 0 ${toRem(16)} 0;
  
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${toRem(12)};
  }
  li {
    list-style: none;
    padding: 0 ${toRem(16)};
    a {
      color: var(--black);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const DropdownWrapper = styled.div<{ $x: number; $y: number;}>`
  position: absolute;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  padding: ${toRem(10)} 0 0 0;
  z-index: 20;
`;