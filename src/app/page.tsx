import { useDevice } from "@/hooks/useDevice";
import { getEvents } from "@/api/search";
import { SearchPage as DesktopPage } from "@/app/search/desktop/SearchPage";
import { SearchPage as MobilePage } from "@/app/search/mobile/SearchPage";

async function Search() {

  const eventsList = await getEvents();
  const device = useDevice();

  return device === 'desktop' ? (
    <DesktopPage events={eventsList} />
  ) : (
    <MobilePage events={eventsList} />
  )
}

export default Search;