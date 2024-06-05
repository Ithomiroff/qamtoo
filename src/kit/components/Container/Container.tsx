import styled from "styled-components";
import { toRem } from "@/kit/utils/helpers";
import { Typography } from "@/kit/components/Typography";

const Container = styled.div`
  max-width: ${toRem(1320)};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${toRem(12)};
`;

export {
  Container
};