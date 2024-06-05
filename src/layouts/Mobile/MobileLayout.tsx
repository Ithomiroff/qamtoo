"use client"

import { PropsWithChildren } from "react";
import { LayoutProps } from "@/layouts/meta/types";
import * as style from './styled';
import { MobileHeader } from "@/layouts/Mobile/Header";
import { MobileFooter } from "@/layouts/Mobile/Footer";
const MobileLayout = (props: PropsWithChildren<LayoutProps>) => {

  return (
    <style.Body className={props.classNameFont}>
      <style.Header>
        <MobileHeader/>
      </style.Header>
      <main>{props.children}</main>
      <style.Footer>
        {/*<MobileFooter/>*/}
      </style.Footer>
    </style.Body>
  )
};

export {
  MobileLayout
};