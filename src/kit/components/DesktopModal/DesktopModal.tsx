import { PropsWithChildren, useLayoutEffect } from "react";
import { Portal } from "@/kit/components/Portal";
import { Overlay } from "@/kit/components/Overlay";
import * as style from './styled';
import { Typography } from "@/kit/components/Typography";
import { Button } from "@/kit/components/Button";
import CloseIcon from "@/assets/icons/close.svg";
import { getScrollbarWidth } from "@/kit/utils/helpers";

type Props = {
  title: string;
  onClose?: () => void;
};
const DesktopModal = ({ children, title, onClose }: PropsWithChildren<Props>) => {

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

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