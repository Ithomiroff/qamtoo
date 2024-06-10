import * as style from './styled';
import { MOBILE_MENU } from "@/layouts/Mobile/Footer/meta/consts";
import Link from "next/link";

const Footer = () => {
  return (
    <style.Menu>
      {MOBILE_MENU.map((item) => (
        <style.Item
          key={item.key}
        >
          <Link href="/">
            {item.custom || (
              <>
                {item.icon}
                {item.name}
              </>
            )}
          </Link>
        </style.Item>
      ))}
    </style.Menu>
  )
};

export {
  Footer
};