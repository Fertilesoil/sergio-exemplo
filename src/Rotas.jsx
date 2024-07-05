import { createBrowserRouter } from "react-router-dom";
import PaginaPadrao from "./Componentes/PaginaPadrao";
import Home from "./Paginas/Home";


export const rotas = createBrowserRouter([
  {
    path: "/", element: <PaginaPadrao />,
    children: [
      { index: true, element: <Home /> }
      // { path: "novoVideo", element: <NovoVideo />}
    ]
  }
]);