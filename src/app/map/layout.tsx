import { PropsWithChildren } from "react";
import { useDevice } from "@/hooks/useDevice";
import { DesktopLayout } from "@/layouts/desktop";
import { MobileLayout } from "@/layouts/mobile";

export default function Layout({
 children,
}: PropsWithChildren) {

  const device = useDevice();

  if (device === 'desktop') {
    return (
      <DesktopLayout noFooter={true}>
        {children}
      </DesktopLayout>
    )
  }

  return (
    <MobileLayout>
      {children}
    </MobileLayout>
  )
}