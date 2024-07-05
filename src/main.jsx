import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { rotas } from './Rotas'
import { ContextoProvider } from './Contexto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextoProvider>
      <RouterProvider router={rotas} />
    </ContextoProvider>
  </React.StrictMode>,
)
