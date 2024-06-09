'use client'

import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import { toRem } from "@/kit/utils/helpers";

type Props = HTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  sizePx?: string;
  variant?: 'filled' | 'outlined' | 'disabled' | 'rounded';
}

type StyledButtonProps = {
  $variant?: Props["variant"];
  $width?: number;
  $icon?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: ${toRem(80)};
  cursor: pointer;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${toRem(46)};
  line-height: ${toRem(46)};
  padding: 0 ${toRem(20)};
  font-size: ${toRem(14)};
  font-weight: 500;
  width: ${({ $width }) => $width ? toRem($width) : undefined} ;
  ${(props: StyledButtonProps) => props.$variant === 'filled' && css`
    background-color: var(--light-blue);
    color: var(--background);
    border: ${toRem(1.5)} solid transparent;
  `}
  ${(props: StyledButtonProps) => props.$variant === 'outlined' && css`
    background-color: var(--background);
    color: var(--light-blue);
    border: ${toRem(1.5)} solid var(--light-blue);
  `}
  ${(props: StyledButtonProps) => props.$variant === 'disabled' && css`
    background-color: var(--light-gray);
    color: var(--basic-font);
  `}
  ${(props: StyledButtonProps) => props.$variant === 'rounded' && css`
    background-color: var(--background);
    color: var(--light-blue);
    border: none;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    height: ${toRem(46)};
    width: ${toRem(46)};
    padding: 0;
    justify-content: center;
  `}
  ${(props) => props.$icon && props.$variant !== 'rounded' && css`
    gap: ${toRem(8)};
  `}
`;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = (props: Props) => {
  const {
    sizePx,
    variant,
    icon,
    ...rest
  } = props;

  if (icon) {
    const {
      children
    } = rest;

    const src = `images/${icon}.svg`;

    return (
      <StyledButton
        {...rest}
        $variant={variant}
        $icon={true}
      >
        <StyledIcon>
          <Image
            src={src}
            height={28}
            width={28}
            alt="Поиск мероприятий"
          />
        </StyledIcon>
        <span>{children}</span>
      </StyledButton>
    )
  };

  return (
    <StyledButton
      {...rest}
      $variant={variant}
    />
  )
}

export {
  Button
};