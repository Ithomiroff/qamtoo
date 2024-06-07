import { PropsWithChildren } from "react";
import { useDevice } from "@/hooks/useDevice";
import { DesktopLayout } from "@/layouts/Desktop";
import { MobileLayout } from "@/layouts/Mobile";
import { Roboto } from "next/font/google";
import '../kit/styles/kit.scss';
import StyledComponentsRegistry from "@/layouts/meta/registry";
import StoreProvider from "@/app/StoreProvider";
import { getEvents } from "@/api/search";
import { InitialStoreData } from "@/common/types";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ['300', '400', '500', '700', '900'],
});

export default async function RootLayout({
 children,
}: PropsWithChildren) {

  const events = await getEvents();

  const device = useDevice();

  const Layout = device === 'desktop' ? DesktopLayout : MobileLayout;

  const initialData: InitialStoreData = {
    events,
    device,
  };

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <StoreProvider initialData={initialData}>
          <Layout classNameFont={roboto.className}>
            {children}
          </Layout>
        </StoreProvider>
      </StyledComponentsRegistry>
    </html>
  )
}