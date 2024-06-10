import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { DESKTOP_FOOTER_HEIGHT_PX } from "@/layouts/desktop/meta/consts";


export const Wrapper = styled.footer`
  background: var(--black);
  padding: ${toRem(36)} 0 ${toRem(40)} 0;
  overflow: hidden;
  height: ${toRem(DESKTOP_FOOTER_HEIGHT_PX)};
`;
export const Inner = styled.div`
  display: flex;
`;
export const Banner = styled.div`
  transform: translateY(${toRem(43)});
  padding-right: ${toRem(32)};

`;
export const Stores = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${toRem(8)};
  padding-top: ${toRem(32)};
  width: ${toRem(472)};
`;

export const Mobile = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--dark-gray-blue);
  
  h3 {
    color: var(--background);
    margin-bottom: ${toRem(8)};
  }

`;

export const Info = styled(Mobile)`
  padding-left: ${toRem(95)};

  h3 {
    margin-bottom: ${toRem(24)};
  }
  @media (max-width: 1340px) {
    padding-left: ${toRem(20)};
  }
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${toRem(96)};
  row-gap: ${toRem(12)};
  padding: 0;
  margin: 0;
  font-size: ${toRem(14)};
  font-weight: 500;
  
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: var(--dark-gray-blue);
  }
`;

export const Social = styled.ul`
  margin: 0;
  padding: ${toRem(24)} 0;
  display: flex;
  align-items: center;
  gap: ${toRem(16)};
  li {
    list-style: none;
  }
`;