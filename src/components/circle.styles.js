import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 48rem) {
    display: flex;
    position: absolute;
    align-items: center;
    background-color: #081c22;
    border-radius: 50%;
    flex-direction: column;
    height: 2.5rem;
    justify-content: center;
    left: 0.625rem;
    top: -1.5rem;
    width: 2.5rem;
    z-index: 50;
  }
`;

export const SvgCircle = styled.svg`
  stroke-width: 2;
  width: 2.5rem;
  height: 2.5rem;
  transform-origin: center;
  transform: rotate(270deg);
`;

export const FirstCircle = styled.circle`
  fill: none;
  stroke: ${(props) => (props.fill >= 70 ? "#122D25" : "#413D0F")}; ;
`;

export const CircleGroup = styled.g``;

export const SecondCircle = styled.circle`
  fill: none;
  stroke: ${(props) => (props.fill >= 70 ? "#4FD17B" : "#D0D230")};
  stroke-width: 2;
  stroke-dasharray: 113;
  stroke-dashoffset: ${(props) => 113 - (props.rate / 100) * 113};
`;

export const Rate = styled.p`
  position: absolute;
  color: #fff !important;
  font-size: 0.8em;
`;
