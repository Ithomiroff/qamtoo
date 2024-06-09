import { PropsWithChildren, ReactNode } from "react";
import * as style from './styled';

type TagVariant = 'filled' | 'default' | 'outlined';

type Props = {
  prefix?: ReactNode;
  variant?: TagVariant;
  size?: 'large' | 'medium';
};

const Tag = ({ prefix, variant = 'default', size = 'medium', children }: PropsWithChildren<Props>) => (
  <style.Wrapper
    $variant={variant || 'default'}
    $size={size || 'default'}
  >
    <style.Inner>
      {prefix}
      {children}
    </style.Inner>
  </style.Wrapper>
)

export {
  Tag
};

export type {
  TagVariant
};