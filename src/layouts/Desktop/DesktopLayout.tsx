'use client'

import { PropsWithChildren } from "react";
import { LayoutProps } from "@/layouts/meta/types";
import { Toolbar } from "@/layouts/Desktop/Toolbar";
import * as style from "./styled";
import { DesktopFooter } from "@/layouts/Desktop/Footer";

const DesktopLayout = (props: PropsWithChildren<LayoutProps>) => {

  return (
    <style.Body className={props.classNameFont}>
      <Toolbar/>
      <style.Main>{props.children}</style.Main>
      <DesktopFooter/>
    </style.Body>
  )
};

export {
  DesktopLayout
};