import * as style from './styled';
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/kit/components/Typography";
import MarkerIcon from "@/assets/icons/marker.svg";
import { useAppSelector } from "@/store";
import * as commonStore from "@/store/common";
import { useState } from "react";
import { MobileModal } from "@/kit/components/MobileModal";
import { CitySelectionList } from "@/layouts/mobile/CitySelectionList";

const Header = () => {

  const city = useAppSelector(commonStore.selectedCity);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <style.Wrapper>
      <style.Logo>
        <Link href="/">
          <Image
            src="/images/logo-mini.svg"
            height={26}
            width={26}
            alt="QAMTOO мероприятия"
          />
        </Link>
        <Typography variant="3">Мероприятия</Typography>
      </style.Logo>
      <style.City onClick={() => setOpen(true)}>
        <style.Text>{city}</style.Text>
        <style.Icon>
          <MarkerIcon/>
        </style.Icon>
      </style.City>

      {open && (
        <MobileModal
          title="Выберите город"
          closeType="close"
          onClose={() => setOpen(false)}
        >
          <CitySelectionList
            onClose={() => setOpen(false)}
          />
        </MobileModal>
      )}
    </style.Wrapper>
  )
};

export {
  Header
}