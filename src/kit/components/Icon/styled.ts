import styled from "styled-components";
import { IconSize } from "@/kit/components/Icon";
import { toRem } from "@/kit/utils/helpers";

const SIZES: Record<IconSize, number> = {
  'lg': 28,
  'md': 24,
  'sm': 20,
};

export const Wrapper = styled.div<{ $size: IconSize }>`
  width: ${({ $size }) => toRem(SIZES[$size])};
  height: ${({ $size }) => toRem(SIZES[$size])};
  
  svg {
    width: 100%;
    height: 100%;
  }
`;