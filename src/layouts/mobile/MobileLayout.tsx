"use client"

import { PropsWithChildren } from "react";
import { LayoutProps } from "@/layouts/meta/types";
import * as style from './styled';
import { MobileHeader } from "@/layouts/mobile/Header";
import { MobileFooter } from "@/layouts/mobile/Footer";

const MobileLayout = (props: PropsWithChildren<LayoutProps>) => {

  return (
    <body className={props.classNameFont}>
      <style.MobileHeaderStyled>
        <MobileHeader/>
      </style.MobileHeaderStyled>
      <style.MobileMainStyled>{props.children}</style.MobileMainStyled>
      <style.MobileFooterStyled>
        <MobileFooter />
      </style.MobileFooterStyled>
    </body>
  )
};

export {
  MobileLayout
};