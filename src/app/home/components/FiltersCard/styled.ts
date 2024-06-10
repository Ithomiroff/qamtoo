import styled, { css } from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { TextFieldWrapper } from "@/kit/components/TextField/styled";
import { StyledButton } from "@/kit/components/Button/Button";

export const Card = styled.article`
  background: var(--background);
  border-radius: ${toRem(16)};
  padding: ${toRem(16)};
`;

export const Wrapper = styled.form`
  position: sticky;
  top: ${toRem(16)};
`;

export const Tags = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${toRem(5)};
  padding-top: ${toRem(8)};
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

export const VariantsType = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${toRem(12)};
  margin: 0;
  padding: 0;
`;

export const Variant = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-left: ${toRem(16)};
  padding-right: ${toRem(4)};
  cursor: pointer;
`;

export const TypeSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Selector = styled.div`
  color: var(--light-blue);
  span {
    font-weight: 500;
  }
`;