import dynamic from "next/dynamic";
import { useDevice } from "@/hooks/useDevice";
import { DesktopLayout } from "@/layouts/desktop";
import { MobileLayout } from "@/layouts/mobile";

const LazyDesktopPage = dynamic(() => {
  return import('./desktop/MapPage').then(com => com.MapPage);
});

const LazyMobilePage = dynamic(() => {
  return import('./mobile/MapPage').then(com => com.MapPage);
});
async function Map() {
  const device = useDevice();

  if (device === 'desktop') {
    return (
      <LazyDesktopPage />
    );
  }

  return (
    <LazyMobilePage/>
  );
}

export default Map;