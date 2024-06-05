import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { Button } from "@/kit/components/Button";

export const EventCardStyled = styled.article`
  background: var(--background);
  border-radius: ${toRem(12)};
  overflow: hidden;
  width: ${toRem(416)};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Badge = styled.div<{ $bottom?: boolean; $mobile: boolean }>`
  position: absolute;
  top: ${({ $mobile } ) => toRem($mobile ? 10 : 16)};
  left: ${({ $mobile } ) => toRem($mobile ? 10 : 16)};
  color: var(--background);
  background: rgba(23, 29, 37, 0.8);
  border-radius: ${toRem(80)};
  padding: ${toRem(2)} ${toRem(5)};
  ${({ $bottom, $mobile }) => $bottom && css`
    top: unset;
    bottom: ${toRem($mobile ? 10 : 16)};
    padding: ${toRem(4)} ${toRem(16)};
  `}
  
  h5 {
    margin: 0;
  }
`;

export const BadgeButton = styled(Button)<{ $mobile: boolean }>`
  position: absolute;
  top: ${({ $mobile } ) => toRem($mobile ? 10 : 16)};
  right: ${({ $mobile } ) => toRem($mobile ? 10 : 16)};
  width: ${({ $mobile } ) => toRem($mobile ? 30 : 36)}!important;
  height: ${({ $mobile } ) => toRem($mobile ? 30 : 36)}!important;
`

export const Image = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: ${toRem(12)};
`;

export const Images = styled.div<{ $size: 1 | 2 | 3 }>`
  height: ${toRem(240)};

  ${({ $size }) => $size === 3 && css`
    display: grid;
    grid-template-columns: 55% 1fr;
    grid-gap: ${toRem(8)};
    
    ${ImageWrapper} {
      &:first-child {
        grid-row: 1 / 3;
      }
    }
  `}
`;

export const Description = styled.div`
  padding: ${toRem(12)};
  h4 {
    margin: 0;
  }
`;

export const Icon = styled.span`
  display: block;
  width: ${toRem(28)};
  height: ${toRem(28)};
`;

export const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Detail = styled.div<{ $first?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${toRem(8)};
  padding-top: ${toRem(8)};
  
  ${({ $first }) => $first && css`
    padding-top: ${toRem(12)};
  `}
  
  span {
    color: var(--basic-font);
  }
`;
