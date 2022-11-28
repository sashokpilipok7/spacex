import React from "react";
import styled from "styled-components";

type Props = {};

const LoadingSpinner: React.FC<Props> = (props) => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #510077;
    border-color: #510077 transparent #510077 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingSpinner;
