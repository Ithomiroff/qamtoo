import dynamic from "next/dynamic";
import { useDevice } from "@/hooks/useDevice";

const LazyDesktopPage = dynamic(() => {
  return import('./desktop/SearchPage').then(com => com.DesktopSearchPage);
});

const LazyMobilePage = dynamic(() => {
  return import('./mobile/SearchPage').then(com => com.MobileSearchPage);
});
async function Search() {
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

export default Search;