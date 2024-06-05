import * as style from './styled';
import { PropsWithChildren } from "react";
import { Typography } from "@/kit/components/Typography";

type Props = {
  title: string;
};

const Page = ({ title, children }: PropsWithChildren<Props>) => (
  <style.Wrapper>
    <Typography variant="1">{title}</Typography>
    {children}
  </style.Wrapper>
)

export {
  Page
};