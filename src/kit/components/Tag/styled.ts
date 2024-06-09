import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { TagVariant } from "@/kit/components/Tag";

export const Wrapper = styled.div<{ $variant: TagVariant; $size: 'large' | 'medium' }>`
  height: ${toRem(34)};
  line-height: ${toRem(34)};
  border: ${toRem(1)} solid var(--dark-gray-blue);
  color: var(--dark-gray-blue);
  border-radius: ${toRem(60)};
  display: inline-block;
  background: var(--background);
  cursor: pointer;
  
  ${({ $variant }) => $variant === 'filled' && css`
    background: var(--light-blue);
    border: ${toRem(1)} solid var(--light-blue);
    color: var(--background);
  `};
  
  ${({ $variant }) => $variant === 'outlined' && css`
    background: var(--background);
    border: ${toRem(1)} solid var(--light-blue);
    color: var(--light-blue);
  `};
  
  ${({ $size }) => $size === 'large' && css`
    height: ${toRem(40)};
    line-height: ${toRem(40)};
  `};
`;

export const Inner = styled.div`
  padding: 0 ${toRem(16)};
  display: inline-flex;
  gap: ${toRem(8)};
  align-items: center;
  justify-content: center;
`;