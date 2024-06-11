import styled, { keyframes } from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  position: fixed;
  top: 30%;
  left: ${toRem(40)};
  height: calc(100vh - 30%);
  z-index: 500;
`;


export const Card = styled.div`
  height: 100%;
  width: ${toRem(464)};
  background-color: var(--background);
  border-radius: ${toRem(16)} ${toRem(16)} 0 0;
  display: flex;
  flex-direction: column;
  animation: appearY 1s ease backwards .5s;
`;

export const Header = styled.div`
  position: relative;
  padding: ${toRem(20)} ${toRem(20)} ${toRem(16)} ${toRem(20)};
  margin-bottom: ${toRem(16)};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - ${toRem(40)});
    height: ${toRem(1)};
    background-color: var(--light-gray);
  }

  h4 {
    color: var(--additional-font);
  }
  p {
    color: var(--light-blue);
  }
`;

export const Content = styled.div`
  height: 100%;
  overflow: auto;
  padding-left: ${toRem(20)};

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

export const WrapperCard = styled.div`
  margin-bottom: ${toRem(20)};
  &:last-child {
    margin-bottom: 0;
  }
`;