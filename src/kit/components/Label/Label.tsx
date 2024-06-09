import { PropsWithChildren } from "react";
import * as style from './styled';
import { Typography } from "@/kit/components/Typography/Typography";

type Props = {
  text: string;
};
const Label = ({ text, children }: PropsWithChildren<Props>) => (
  <style.Wrapper>
    <Typography variant="subheader">{text}</Typography>
    {children}
  </style.Wrapper>
)

export {
  Label
};