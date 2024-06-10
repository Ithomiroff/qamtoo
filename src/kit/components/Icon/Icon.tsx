import { PropsWithChildren } from "react";
import * as style from './styled';

export type IconSize = 'md' | 'lg' | 'sm' | 'xs';

type Props = {
  size?: IconSize;
};

const Icon = ({ size = 'md', children }: PropsWithChildren<Props>) => (
  <style.Wrapper $size={size || 'md'}>
    {children}
  </style.Wrapper>
);

export {
  Icon
};