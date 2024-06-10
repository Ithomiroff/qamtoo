import * as style from './styled';
import { InputHTMLAttributes, PropsWithChildren, ReactNode, useRef } from "react";
import CheckmarkIcon from "@/assets/icons/checkmark.svg";

type Props =  InputHTMLAttributes<HTMLInputElement> & {
  onChangeCheckbox: (checked: boolean) => void;
};
const Checkbox = (props: PropsWithChildren<Props>) => {

  const {
    onChangeCheckbox,
    ...rest
  } = props;

  const onToggle = () => {
    props.onChangeCheckbox?.(!props.checked)
  };

  return (
    <style.Group
      $checked={Boolean(props.checked)}
      onClick={onToggle}
    >
      <style.Input
        type="checkbox"
        {...rest}
        onChange={onToggle}
      />
      {props.checked && (
        <style.Checkmark>
          <CheckmarkIcon/>
        </style.Checkmark>
      )}
    </style.Group>
  );
};

export {
  Checkbox
};