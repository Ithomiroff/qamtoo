import { InputHTMLAttributes, ReactNode } from "react";
import * as style from './styled';
import { TextFieldWrapper } from "./styled";

type TextFieldVariant = 'default' | 'outlined';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactNode;
  variant?: TextFieldVariant;
  full?: boolean;
};

const TextField = (props: Props) => {

  const {
    prefixIcon,
    prefix,
    variant = 'default',
    full = false,
    ...rest
  } = props;

  return (
    <style.TextFieldWrapper
      $full={full}
      $variant={variant}
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
  TextFieldVariant
};