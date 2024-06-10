import * as style from './styled';
import { PropsWithChildren, ReactNode, useState } from "react";
import { Icon } from "@/kit/components/Icon";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";

type Props = {
  title: ReactNode;
};
const Accordion = ({ title, children }: PropsWithChildren<Props>) => {

  const [open , setOpen] = useState<boolean>(false);

  return (
    <style.Wrapper>
      <style.Header onClick={() => setOpen((prev) => !prev)}>
        {title}
        <Icon size="lg">
          <ArrowDownIcon/>
        </Icon>
      </style.Header>
      {open && (
        <style.Content>{children}</style.Content>
      )}
    </style.Wrapper>
  );
};

export {
  Accordion
};