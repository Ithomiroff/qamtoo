import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Main = styled.main`
  padding: ${toRem(24)} 0;
`;