import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import * as eventsSlice from "@/store/events/reducer";
import { Button } from "@/kit/components/Button";

const useSearchFilter = () => {
  const dispatch = useAppDispatch();

  const eventsList = useAppSelector(eventsSlice.eventsListSelector);
  const type = Boolean(useAppSelector(eventsSlice.filterByKeySelector('isPublish')));

  const handleToggleType = useCallback(() => {
    dispatch(eventsSlice.changeFilter({
      key: 'isPublish',
      value: !type,
    }));

    // @ts-ignore
    dispatch(eventsSlice.fetchFilteredEvents());
  }, [dispatch, type]);

  const ButtonsLayout = () => (
    <>
      <Button
        variant={type ? 'filled' : 'disabled'}
        onClick={handleToggleType}
      >Живые</Button>
      <Button
        variant={!type ? 'filled' : 'disabled'}
        onClick={handleToggleType}
      >Онлайн</Button>
    </>
  );

  return {
    type,
    eventsList,
    handleToggleType,
    ButtonsLayout,
  }
};

export {
  useSearchFilter
};