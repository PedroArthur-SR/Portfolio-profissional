import { useState } from 'react'

function SobreMim() {
  const [idioma, setIdioma] = useState('pt')

  const textos = {
    pt: {
      titulo: 'Sobre Mim',
      paragrafo:
        'Eu sou Pedro, tenho 18 anos, moro em Belo Horizonte - MG, torço para o Atlético Mineiro e me interesso bastante pela área da tecnologia. Tenho muita curiosidade em sempre aprender mais e descobrir novidades desse meio que só cresce. Sou uma pessoa colaborativa, paciente e sincera. No lazer, gosto de jogar video games, assistir e jogar futebol (principalmente o Galo) e escutar muita música.',
    },
    en: {
      titulo: 'About Me',
      paragrafo:
        "I'm Pedro, I'm 18 years old, I live in Belo Horizonte, MG, Brazil, and I support Atlético Mineiro. I'm very interested in technology and always curious to learn more and discover new things in a field that keeps growing. I'm a collaborative, patient and honest person. In my free time, I enjoy playing video games, watching and playing football (especially Galo) and listening to lots of music.",
    },
  }

  const t = textos[idioma]

  return (
    <section id="sobre">
      <div className="idiomas">
        <button
          className={idioma === 'pt' ? 'ativo' : ''}
          onClick={() => setIdioma('pt')}
        >
          PT
        </button>
        <button
          className={idioma === 'en' ? 'ativo' : ''}
          onClick={() => setIdioma('en')}
        >
          EN
        </button>
      </div>

      <h2>{t.titulo}</h2>
      <p>{t.paragrafo}</p>
    </section>
  )
}

export default SobreMim