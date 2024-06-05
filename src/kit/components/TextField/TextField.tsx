import { InputHTMLAttributes, ReactNode } from "react";
import * as style from './styled';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  prefixIcon?: ReactNode;
};

const TextField = (props: Props) => {

  const {
    prefixIcon,
    ...rest
  } = props;

  return (
    <style.TextFieldWrapper>
      {prefixIcon && (
        <style.Prefix>{prefixIcon}</style.Prefix>
      )}
      <style.Input {...rest}/>
    </style.TextFieldWrapper>
  );
}

export {
  TextField
};