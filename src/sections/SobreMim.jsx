
function SobreMim({ t, idioma, setIdioma }) {
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

      <h2>{t.sobre.titulo}</h2>
      <p>{t.sobre.paragrafo}</p>
    </section>
  );
}

export default SobreMim;
