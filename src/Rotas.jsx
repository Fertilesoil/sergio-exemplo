import { createBrowserRouter } from "react-router-dom";
import PaginaPadrao from "./Componentes/PaginaPadrao";

export const rotas = createBrowserRouter([
  { path: "/", element: <PaginaPadrao /> }
]);