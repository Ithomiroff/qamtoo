import { useDevice } from "@/hooks/useDevice";
import dynamic from "next/dynamic";

const LazyDesktopPage = dynamic(() => {
  return import('./search/desktop/SearchPage').then(com => com.SearchPage);
});

const LazyMobilePage = dynamic(() => {
  return import('./search/mobile/SearchPage').then(com => com.SearchPage);
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