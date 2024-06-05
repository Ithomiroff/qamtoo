import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { H1 } from "@/kit/components/Typography/Typography";

export const Wrapper = styled.div`
  padding-top: ${toRem(40)};
  color: var(--additional-font);
  ${H1} {
    color: var(--additional-font);
    
  }
`;