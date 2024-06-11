import { useDevice } from "@/hooks/useDevice";
import dynamic from "next/dynamic";
import { DesktopLayout } from "@/layouts/desktop";
import { MobileLayout } from "@/layouts/mobile";

const LazyDesktopPage = dynamic(() => {
  return import('./home/desktop/HomePage').then(com => com.HomePage);
});

const LazyMobilePage = dynamic(() => {
  return import('./home/mobile/HomePage').then(com => com.HomePage);
});
async function Home() {
  const device = useDevice();

  if (device === 'desktop') {
    return (
      <DesktopLayout>
        <LazyDesktopPage />
      </DesktopLayout>
    );
  }

  return (
    <MobileLayout>
      <LazyMobilePage/>
    </MobileLayout>
  );
}

export default Home;