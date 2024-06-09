import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Card = styled.article`
  background: var(--background);
  border-radius: ${toRem(16)};
  padding: ${toRem(16)};
`;

export const Wrapper = styled.div`
  position: sticky;
  top: ${toRem(16)};
  height: 200px;
`