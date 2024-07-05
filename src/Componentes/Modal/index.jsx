import { useContext } from "react"
import { ModalPadrao } from "./Modal"
import { ContextoExemplo } from "../../Contexto";

const Modal = () => {

  const { openModal, toggleModal } = useContext(ContextoExemplo);

  return (
    <ModalPadrao open={openModal}>

      <button onClick={(e) => {
        e.preventDefault();
        toggleModal();
      }}>
        X
      </button>
    </ModalPadrao>
  )
}

export default Modal