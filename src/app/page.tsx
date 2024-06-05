import { useDevice } from "@/hooks/useDevice";
import { SearchPage as DesktopPage } from "@/app/search/desktop/SearchPage";
import { SearchPage as MobilePage } from "@/app/search/mobile/SearchPage";

function Search() {

  const device = useDevice();

  return device === 'desktop' ? <DesktopPage/> : <MobilePage/>
}

export default Search;