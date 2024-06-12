import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { TextFieldSize, TextFieldVariant } from "@/kit/components/TextField/TextField";

export const TextFieldWrapper = styled.div<{ $variant: TextFieldVariant; $full: boolean; $size: TextFieldSize }>`
  height: ${toRem(50)};
  min-width: ${toRem(300)};
  background-color: var(--background);
  border-radius: ${toRem(8)};
  overflow: hidden;
  padding: ${toRem(15)} ${toRem(16)};
  display: flex;
  align-items: center;
  gap: ${toRem(8)};
  
  ${({ $variant }) => $variant === 'outlined' && css`
    border: ${toRem(1)} solid var(--additional-font)};
  `} 
  
  ${({ $variant }) => $variant === 'grey' && css`
    border: none;
    background-color: var(--light-gray-background);
  `} 
  
  ${({ $full }) => $full && css`
    width: 100%;
    min-width: unset;
  `} 
  
  ${({ $size }) => $size && css`
    height: ${toRem(36)};
  `} 
`;

export const Prefix = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-gray-blue);
`;

export const TextPrefix = styled.div`
  display: flex;
  align-items: center;
  font-size: ${toRem(14)};
  font-weight: 500;
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  color: var(--additional-font);
`;