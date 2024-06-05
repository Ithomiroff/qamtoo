'use client'

import styled from "styled-components";
import { PropsWithChildren } from "react";
import { toRem } from "@/kit/utils/helpers";

type Props = {
  variant: '1' | '2' | '3' | '4' | '5' | 'subheader' | 'text' | 'small';
}

export const H1 = styled.h1`
  font-size: ${toRem(40)};
  line-height: ${toRem(52)};
  font-weight: 600;
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: ${toRem(32)};
  line-height: ${toRem(41.6)};
  font-weight: 500;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: ${toRem(24)};
  line-height: ${toRem(33.6)};
  font-weight: 500;
`;

export const H4 = styled.h4`
  font-size: ${toRem(20)};
  line-height: ${toRem(25.6)};
  font-weight: 500;
`;

export const H5 = styled.h5`
  font-size: ${toRem(18)};
  line-height: ${toRem(23.4)};
  font-weight: 500;
`;

export const Subheader = styled.p`
  font-size: ${toRem(16)};
  line-height: ${toRem(22.4)};
  font-weight: 500;
`;

export const Text = styled.span`
  font-size: ${toRem(16)};
  line-height: ${toRem(22.4)};
  font-weight: 400;
`;

export const Small = styled.span`
  font-size: ${toRem(14)};
  line-height: ${toRem(20)};
  font-weight: 400;
`;

const Typography = ({ variant, children }: PropsWithChildren<Props>) => {
  switch (variant) {
    case "1":
      return <H1>{children}</H1>;
    case "2":
      return <H2>{children}</H2>;
    case "3":
      return <H3>{children}</H3>;
    case "4":
      return <H4>{children}</H4>;
    case "5":
      return <H5>{children}</H5>;
    case "subheader":
      return <Subheader>{children}</Subheader>;
    case "text":
      return <Text>{children}</Text>;
    case "small":
      return <Small>{children}</Small>;
    default:
      return null;
  }
};

export {
  Typography
};