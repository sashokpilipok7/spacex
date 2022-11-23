import ReactDOM from "react-dom";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

const BackDrop: React.FC<Props> = (props) => {
  return ReactDOM.createPortal(
    <Wrapper onClick={props.onClick}></Wrapper>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

export default BackDrop;
