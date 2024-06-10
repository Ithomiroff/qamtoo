
import * as style from './styled';
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/kit/components/Typography";
import MarkerIcon from "@/assets/icons/marker.svg";

const Header = () => {

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
      <style.City>
        <style.Text>Нижний новгород</style.Text>
        <style.Icon>
          <MarkerIcon/>
        </style.Icon>
      </style.City>
    </style.Wrapper>
  )
};

export {
  Header
}