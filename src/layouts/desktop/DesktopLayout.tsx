'use client'

import { PropsWithChildren } from "react";
import { Toolbar } from "@/layouts/desktop/Toolbar";
import * as style from "./styled";
import { DesktopFooter } from "@/layouts/desktop/Footer";

type Props = {
  noFooter?: boolean;
};

const DesktopLayout = ({ noFooter, children }: PropsWithChildren<Props>) => (
  <style.DesktopBody>
    <Toolbar/>
    <style.DesktopMain>{children}</style.DesktopMain>
    {!noFooter && <DesktopFooter/>}
  </style.DesktopBody>
);

export {
  DesktopLayout
};