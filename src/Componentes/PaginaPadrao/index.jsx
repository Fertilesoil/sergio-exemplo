import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Menu from "../Menu"
import Modal from "../Modal"

const PaginaPadrao = () => {

  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
      <Modal />
    </>
  )
}

export default PaginaPadrao