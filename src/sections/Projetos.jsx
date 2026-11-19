import projetos from '../data/projetos'

function Projetos({ t }) {
  return (
    <section id="projetos">
      <h2>{t.projetos.titulo}</h2>

      <div className="timeline">
        {projetos.map((projeto, index) => (
          <article className="projeto" key={projeto.id}>
            <span className="periodo">{projeto.periodo}</span>

            <h3>{projeto.nome}</h3>

            <p>{t.projetos.lista[index].descricao}</p>

            <ul className="tecnologias">
              {projeto.tecnologias.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>

            <img
              src={projeto.imagem}
              alt={`${t.projetos.textoAlternativo} ${projeto.nome}`}
            />

            <a href={projeto.github} target="_blank" rel="noreferrer">
              {t.projetos.verGithub}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos