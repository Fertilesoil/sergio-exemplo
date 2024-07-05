
# Compondo páginas

  Páginas são compostas de pequenos elementos aninhados.
  Enumerar os componentes e separá-los.

  - Home

  Banner: {
    Div: {
      Imagem,
      Div: {
        Tag - Elemento separado,
        h3,
        p
      }
    }
  }

  Card: {
    Main: {
      Section: {
        Tag - Elemento separado,
        Div: {
          Card - Elemento separado 
        }
      }
    }
  }

## Fazendo o Contexto

  Criar o contexto: 

  ``` javascript
  export const ContextoExemplo = createContext(null);
  ```

  Expor esse contexto para toda a aplicação:

  ``` javascript
  export const ContextoProvider = ({children}) => {

    // Criação dos estados a serem comparilhados

    const shared = {
      // Aqui você compartilha seus estados
    }

    return (
      <ContextoExemplo.Provider>
        {children}
      </ContextoExemplo.Provider>
    )
  }

  main.jsx

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
  ```

  Para usar o contexto através do useContext: 

  ``` javascript
    const Home = () => {

    const { toggleModal, categorias } = useContext(ContextoExemplo);

    return (
      <>
       <Banner />
        <main>
          {categorias.map(categoria => (
            <Section key={categoria.nome} categoria={categoria.nome}>
              Card
            </Section>
          ))}
        </main>

        <button onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}>
          Aperte para abrir
        </button>
      </>
    )
  }

  export default Home
  ```