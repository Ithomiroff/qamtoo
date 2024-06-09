import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { TextFieldWrapper } from "@/kit/components/TextField/styled";
import { StyledButton } from "@/kit/components/Button/Button";

export const Card = styled.article`
  background: var(--background);
  border-radius: ${toRem(16)};
  padding: ${toRem(16)};
`;

export const Wrapper = styled.div`
  position: sticky;
  top: ${toRem(16)};
`;

export const Tags = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${toRem(5)};
`;

export const Divider = styled.div<{$spaceOnly?: boolean}>`
  background: var(--light-gray);
  height: ${toRem(1)};
  width: 100%;
  margin-top: ${toRem(16)};
  margin-bottom: ${toRem(20)};
  
  ${({ $spaceOnly }) => $spaceOnly && css`
    height: 0;
  `}
`;

export const DoubleFields = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(16)};
  
  ${TextFieldWrapper} {
    min-width: unset!important;
  }
`;

export const Footer = styled.div`
  padding: ${toRem(16)} 0 ${toRem(8)} 0;
  ${StyledButton} {
    width: 100%;
  }
`;