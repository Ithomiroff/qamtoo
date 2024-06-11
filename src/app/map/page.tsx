import dynamic from "next/dynamic";

const LazyDesktopPage = dynamic(() => {
  return import('./desktop/MapPage').then(com => com.MapPage);
});
async function Map() {

  return (
    <LazyDesktopPage />
  )
};

export default Map;