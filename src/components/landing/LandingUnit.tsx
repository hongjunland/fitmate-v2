import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import LandingUnitImage from "./LandingUnitImage";

interface Props {
  imgSrc?: string;
  linkSrc: string;
  content?: ReactNode;
}
export default function LandingUnit({ imgSrc, linkSrc, content }: Props) {
  return (
    <Wrapper>
      <UnitLink to={linkSrc}></UnitLink>
      {content}
      <LandingUnitImage src={imgSrc} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 692px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const UnitLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`;
