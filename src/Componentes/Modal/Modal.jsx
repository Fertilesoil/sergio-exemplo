import styled from "styled-components";

const ModalPadrao = styled.dialog`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 50vh;
  width: 70%;
  border-radius: .7rem;
  background: #1c1c74;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    color: white;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
  }
`

export { ModalPadrao }