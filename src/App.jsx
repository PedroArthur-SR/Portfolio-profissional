import { useState } from 'react';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import SobreMim from './sections/SobreMim';
import Projetos from './sections/Projetos';
import Experiencias from './sections/Experiencias';
import Contato from './sections/Contato';

import traducoes from './data/traducoes';

function App() {
  const [secaoAtiva, setSecaoAtiva] = useState('sobre');
  useEffect(() => {
  const secoes = document.querySelectorAll('main section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      const secaoVisivel = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
        );

      if (secaoVisivel.length > 0) {
        setSecaoAtiva(secaoVisivel[0].target.id);
      }
    },
    {
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0
    }
  );

  secoes.forEach((secao) => observer.observe(secao));

  return () => observer.disconnect();
}, []);
  const [idioma, setIdioma] = useState('pt');

  const t = traducoes[idioma];

  return (
    <>
      <Header t={t} secaoAtiva={secaoAtiva} />

      <main>
        <SobreMim
          t={t}
          idioma={idioma}
          setIdioma={setIdioma}
        />

        <Projetos t={t} />
        <Experiencias t={t} />
        <Contato t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

export default App;