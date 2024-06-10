import * as style from './styled';
import { InputHTMLAttributes, PropsWithChildren, ReactNode } from "react";
import CheckmarkIcon from "@/assets/icons/checkmark.svg";

type Props =  InputHTMLAttributes<HTMLInputElement>;
const Checkbox = ({ checked }: PropsWithChildren<Props>) => {

  return (
    <style.Group $checked={Boolean(checked)}>
      <style.Input type="checkbox" checked={checked}/>
      {checked && (
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