import Banner from "../Componentes/Banner"
import Section from "../Componentes/Section"

const Home = () => {
  const categorias = [
    { nome: "frontend" },
    { nome: "backend" },
    { nome: "mobile" }
  ]

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

      <button>
        Aperte para abrir
      </button>
    </>
  )
}

export default Home