import { InputHTMLAttributes, ReactNode } from "react";
import * as style from './styled';
import { TextFieldWrapper } from "./styled";

type TextFieldVariant = 'default' | 'outlined' | 'grey';
type TextFieldSize = 'md' | 'sm';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactNode;
  variant?: TextFieldVariant;
  size?: TextFieldSize;
  full?: boolean;
};

const TextField = (props: Props) => {

  const {
    prefixIcon,
    prefix,
    variant = 'default',
    size = 'md',
    full = false,
    ...rest
  } = props;

  return (
    <style.TextFieldWrapper
      $full={full}
      $variant={variant}
      $size={size}
    >
      {prefixIcon && (
        <style.Prefix>{prefixIcon}</style.Prefix>
      )}
      {prefix && (
        <style.TextPrefix>{prefix}</style.TextPrefix>
      )}
      <style.Input {...rest}/>
    </style.TextFieldWrapper>
  );
}

export {
  TextField
};

export type {
  TextFieldVariant,
  TextFieldSize
};