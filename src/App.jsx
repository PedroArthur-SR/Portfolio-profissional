import Header from './components/Header'
import Footer from './components/Footer'
import SobreMim from './sections/SobreMim'
import Projetos from './sections/Projetos'
import Experiencias from './sections/Experiencias'
import Contato from './sections/Contato'

function App() {
  return (
    <>
      <Header />
      <main>
        <SobreMim />
        <Projetos />
        <Experiencias />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App