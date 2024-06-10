import { ReactNode } from "react";

export type MobileMenuItem = {
  name: string;
  icon?: ReactNode;
  key: string;
  custom?: boolean;
};