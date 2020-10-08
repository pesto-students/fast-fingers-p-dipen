import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  align-items: baseline;
`;
const ModalBoxSetup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 40%;
  top: 40%;
  overflow: hidden;
  padding: 16px;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background: rgba(255, 255, 255, 0.8);
  border: 0.5px solid #e8e8e8;
  @media (max-width: 500px) {
    width: 80%;
  }
`;
const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = ({ visible, dismiss, children, client, ...props }) => {
  return (
    <ModalWrapper>
      <ModalBoxSetup width={client}>{children}</ModalBoxSetup>
      <ModalBg onClick={dismiss} />
    </ModalWrapper>
  );
};

export default Modal;
