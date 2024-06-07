import { useCallback, useMemo, useState } from "react";
import { EventSearchFilter } from "@/app/search/meta/types";
import { EventDto } from "@/api/search";

const useSearchFilter = (events: EventDto[]) => {
  const [filter, setFilter] = useState<EventSearchFilter>({ type: 'online' });

  const filtered = useMemo(() => {
    return events.filter((item) => {
      if (filter.type === 'online') {
        return item.isPublish;
      } else {
        return !item.isPublish;
      }
    });
  }, [filter, events]);

  const handleToggleType = useCallback(() => {
    setFilter((prev) => ({
      ...prev,
      type: prev.type === 'online' ? 'offline' : 'online',
    }));
  }, [setFilter]);

  return {
    filter,
    filteredEvents: filtered,
    handleToggleType,
  }
};

export {
  useSearchFilter
};