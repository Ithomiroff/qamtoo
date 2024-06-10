import { MobileMenuItem } from "@/layouts/Mobile/Footer/meta/types";
import CalendarIcon from "@/assets/icons/calendar.svg";
import SearchIcon from "@/assets/icons/search.svg";
import MessagesIcon from "@/assets/icons/messages.svg";
import UserIcon from "@/assets/icons/user.svg";
import EventMenu from "@/assets/icons/event-menu.svg";
import { Icon } from "@/kit/components/Icon";
import { CreateButton } from "@/layouts/Mobile/CreateButton";

export const MOBILE_MENU: MobileMenuItem[] = [
  {
    key: 'search',
    name: 'Поиск',
    icon: (
      <Icon size="sm">
        <SearchIcon />
      </Icon>
    )
  },
  {
    key: 'calendar',
    name: 'Календарь',
    icon: (
      <Icon size="sm">
        <CalendarIcon />
      </Icon>
    )
  },
  {
    key: 'event',
    name: 'Мероприятие',
    custom: <CreateButton/> ,
  },
  {
    key: 'messages',
    name: 'Сообщения',
    icon: (
      <Icon size="sm">
        <MessagesIcon />
      </Icon>
    )
  },
  {
    key: 'search',
    name: 'Профиль',
    icon: (
      <Icon size="sm">
        <UserIcon />
      </Icon>
    )
  }
];