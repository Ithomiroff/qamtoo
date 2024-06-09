import { Portal } from "@/kit/components/Portal";
import * as style from './styled';
import { PropsWithChildren } from "react";
import { Typography } from "@/kit/components/Typography";
import { Button } from "@/kit/components/Button";
import CloseIcon from "@/assets/icons/close.svg";
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg";

type Props = {
  title: string;
  closeType: 'close' | 'prev';
  onClose: () => void;
}
const MobileModal = ({ title, closeType, children, onClose }: PropsWithChildren<Props>) => {

  return (
    <Portal>
      <style.Wrapper>
        <style.Header>
          <Button
            variant="default"
            onClick={onClose}
          >
            {closeType === 'close' ? <CloseIcon/> : <ChevronLeftIcon/>}
          </Button>
          <Typography variant="5">{title}</Typography>
        </style.Header>
        <style.Content>
          {children}
        </style.Content>
      </style.Wrapper>
    </Portal>
  )
};

export {
  MobileModal
};