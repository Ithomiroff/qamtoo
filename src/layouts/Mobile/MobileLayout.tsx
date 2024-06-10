"use client"

import { PropsWithChildren } from "react";
import { LayoutProps } from "@/layouts/meta/types";
import * as style from './styled';
import { MobileHeader } from "@/layouts/Mobile/Header";
import { MobileFooter } from "@/layouts/Mobile/Footer";

const MobileLayout = (props: PropsWithChildren<LayoutProps>) => {

  return (
    <body className={props.classNameFont}>
      <style.Header>
        <MobileHeader/>
      </style.Header>
      <style.Main>{props.children}</style.Main>
      <style.Footer>
        <MobileFooter />
      </style.Footer>
    </body>
  )
};

export {
  MobileLayout
};