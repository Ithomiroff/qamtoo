import * as style from './styled';
import AddIcon from '@/assets/icons/mini-add-mobile.svg';

const CreateButton = () => (
  <style.Wrapper>
    <style.IconWrapper>
      <AddIcon/>
    </style.IconWrapper>
    <span>Мероприятие</span>
  </style.Wrapper>
);

export {
  CreateButton
};