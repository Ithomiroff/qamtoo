import styled from "styled-components";
import { IconSize } from "@/kit/components/Icon";
import { toRem } from "@/kit/utils/helpers";

const SIZES: Record<IconSize, number> = {
  'lg': 28,
  'md': 24,
  'sm': 20,
  'xs': 18,
};

export const Wrapper = styled.div<{ $size: IconSize }>`
  width: ${({ $size }) => toRem(SIZES[$size])};
  height: ${({ $size }) => toRem(SIZES[$size])};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;