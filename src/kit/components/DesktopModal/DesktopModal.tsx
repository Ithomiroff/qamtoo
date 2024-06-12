import { PropsWithChildren } from "react";
import { Portal } from "@/kit/components/Portal";
import { Overlay } from "@/kit/components/Overlay";
import * as style from './styled';
import { Card } from "./styled";
import { Typography } from "@/kit/components/Typography";
import { Button } from "@/kit/components/Button";
import CloseIcon from "@/assets/icons/close.svg";

type Props = {
  title: string;
  onClose?: () => void;
};
const DesktopModal = ({ children, title, onClose }: PropsWithChildren<Props>) => {

  return (
    <Portal>
      <Overlay/>
      <style.Content>
        <style.Card>
          <style.Header>
            <Typography variant="3">{title}</Typography>
          </style.Header>
          <style.Close>
            <Button
              variant="rounded"
              onClick={onClose}
            >
              <CloseIcon/>
            </Button>
          </style.Close>
          <style.Inner>{children}</style.Inner>
        </style.Card>
      </style.Content>
    </Portal>
  )
};

export {
  DesktopModal
};