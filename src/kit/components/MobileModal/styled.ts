import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: var(--background);
  
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  text-align: center;
  height: ${toRem(42)};
  position: relative;
  
  h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Content = styled.div`
  padding: ${toRem(16)};
  height: 100%;
`;