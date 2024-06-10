import * as style from './styled';
import { Container } from "@/kit/components/Container";
import Image from "next/image";
import { Typography } from "@/kit/components/Typography";
import Link from "next/link";
import TelegramIcon from "@/assets/icons/telegram.svg";
import WhatsupIcon from "@/assets/icons/whatsup.svg";
import VkIcon from "@/assets/icons/vk.svg";
import OkIcon from "@/assets/icons/ok.svg";

const DesktopFooter = () => (
  <style.Wrapper>
    <Container>
      <style.Inner>
        <style.Banner>
          <Image
            src="/images/footer.png"
            height={270}
            width={185}
            alt="QAMTOO мероприятия"
          />
        </style.Banner>

        <style.Mobile>
          <Typography variant="3">Загрузите приложение QAMTOO</Typography>
          <Typography variant="small">
            Обменивайтесь информацией и обновлениями с участниками <br/> мероприятия, задавайте вопросы и отвечайте на них <br/>
            в режиме реального времени.
          </Typography>
          <style.Stores>
            <Link href="/">
              <Image
                src="/images/google-play.png"
                height={36}
                width={121}
                alt="QAMTOO мероприятия"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/app-store.png"
                height={36}
                width={108}
                alt="QAMTOO мероприятия"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/app-gallery.png"
                height={36}
                width={120}
                alt="QAMTOO мероприятия"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/galaxy-store.png"
                height={36}
                width={133}
                alt="QAMTOO мероприятия"
              />
            </Link>
          </style.Stores>
        </style.Mobile>

        <style.Info>
          <Typography variant="3">Мероприятия в QAMTOO</Typography>

          <style.Menu>
            <li>
              <Link href="/">Пользовательское соглашение</Link>
            </li>
            <li>
              <Link href="/">Техническая поддержка</Link>
            </li>
            <li>
              <Link href="/">Разместить мероприятие</Link>
            </li>
            <li>
              <Link href="/">Мероприятия</Link>
            </li>
          </style.Menu>

          <style.Social>
            <li>
              <Link href="/">
                <WhatsupIcon/>
              </Link>
            </li>
            <li>
              <Link href="/">
                <TelegramIcon/>
              </Link>
            </li>
            <li>
              <Link href="/">
                <OkIcon/>
              </Link>
            </li>
            <li>
              <Link href="/">
                <VkIcon/>
              </Link>
            </li>
          </style.Social>

          <span>© 2024 ООО «QAMTOO»</span>
        </style.Info>
      </style.Inner>
    </Container>
  </style.Wrapper>
)

export {
  DesktopFooter
}