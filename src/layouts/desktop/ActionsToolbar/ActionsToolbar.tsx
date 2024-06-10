import * as styled from './styled';
import { Button } from "@/kit/components/Button";

type Props = {
  authed: boolean;
}

const ActionsToolbar = ({ authed }: Props) => {


  return (
    <styled.Wrapper>
      <Button variant="filled">Создать мероприятие</Button>
      <Button
        variant="outlined"
        icon="user"
      >
        Войти
      </Button>
    </styled.Wrapper>
  )
};

export {
  ActionsToolbar
};