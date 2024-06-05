'use client'

import { PropsWithChildren } from "react";
import { LayoutProps } from "@/layouts/meta/types";
import { Toolbar } from "@/layouts/Desktop/Toolbar";
import * as style from "./styled";

const DesktopLayout = (props: PropsWithChildren<LayoutProps>) => {

  return (
    <style.Body className={props.classNameFont}>
      <Toolbar/>
      <main>{props.children}</main>
    </style.Body>
  )
};

export {
  DesktopLayout
};