import { PropsWithChildren } from "react";
import { useDevice } from "@/hooks/useDevice";
import { DesktopLayout } from "@/layouts/Desktop";
import { MobileLayout } from "@/layouts/Mobile";
import { Roboto } from "next/font/google";
import '../kit/styles/kit.scss';
import StyledComponentsRegistry from "@/layouts/meta/registry";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ['300', '400', '500', '700', '900'],
});

export default function RootLayout({
 children,
}: PropsWithChildren) {

  const device = useDevice();

  const Layout = device === 'desktop' ? DesktopLayout : MobileLayout;

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <Layout
          classNameFont={roboto.className}
        >
          {children}
        </Layout>
      </StyledComponentsRegistry>
    </html>
  )
}