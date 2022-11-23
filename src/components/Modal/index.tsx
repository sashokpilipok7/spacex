import { ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import BackDrop from "components/Backdrop";

type Props = {
  open: boolean;
  children: ReactNode;
  onCancel: () => void;
};

const Modal: React.FC<Props> = ({ open, children, onCancel }) => {
  const content = (
    <>
      {open && <BackDrop onClick={onCancel} />}
      {open && (
        <Wrapper>
          <Header>Launch details</Header>
          <Content>{children}</Content>
        </Wrapper>
      )}
    </>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
`;

const Header = styled.div`
  width: 100%;
  padding: 16px 8px;
  background: #2a006e;
  color: white;
`;

const Content = styled.div`
  padding: 16px 8px;
`;

export default Modal;
