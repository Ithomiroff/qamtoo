import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";

export const Wrapper = styled.div`
  background: var(--background);
  padding: 0 ${toRem(12)};
  display: flex;
  justify-content: space-between;
  height: ${toRem(60)};
  border: ${toRem(1)} solid var(--lines);
  box-shadow: 0px 3px 8px 0px #9DB2D621;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(8)};
  color: var(--additional-font);
`;

export const Icon = styled.span`
  color: var(--light-blue);
`;

export const City = styled.div`
  color: var(--additional-font);
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: ${toRem(100)};
`;