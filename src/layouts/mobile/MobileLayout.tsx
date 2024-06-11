"use client"

import { PropsWithChildren } from "react";
import * as style from './styled';
import { MobileHeader } from "@/layouts/mobile/Header";
import { MobileFooter } from "@/layouts/mobile/Footer";

const MobileLayout = ({children}: PropsWithChildren) => {

  return (
    <>
      <style.MobileHeaderStyled>
        <MobileHeader/>
      </style.MobileHeaderStyled>
      <style.MobileMainStyled>{children}</style.MobileMainStyled>
      <style.MobileFooterStyled>
        <MobileFooter />
      </style.MobileFooterStyled>
    </>
  )
};

export {
  MobileLayout
};