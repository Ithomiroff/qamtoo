import { useDevice } from "@/hooks/useDevice";
import dynamic from "next/dynamic";

const LazyDesktopPage = dynamic(() => {
  return import('home/desktop/HomePage').then(com => com.HomePage);
});

const LazyMobilePage = dynamic(() => {
  return import('home/mobile/HomePage').then(com => com.HomePage);
});
async function Home() {
  const device = useDevice();

  return (
    <>
      {device === 'desktop' ? (
        <LazyDesktopPage />
      ) : (
        <LazyMobilePage />
      )}
    </>
  )
}

export default Home;