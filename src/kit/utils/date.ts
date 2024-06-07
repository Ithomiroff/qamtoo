import dayjs from "dayjs";
import 'dayjs/locale/ru';

dayjs.locale('ru');

export const toEventDate = (utcStart: string, utcEnd: string) => {
  const start = dayjs(utcStart);
  const end = dayjs(utcEnd);

  return `${start.format('D MMMM')} - ${end.format('D MMMM')} | ${start.format('HH:mm')}`;
};