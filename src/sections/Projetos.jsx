import projetos from '../data/projetos'

function Projetos() {
  return (
    <section id="projetos">
      <h2>Projetos</h2>

      <div className="timeline">
        {projetos.map((projeto) => (
          <article className="projeto" key={projeto.id}>
            <span className="periodo">{projeto.periodo}</span>
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>

            <ul className="tecnologias">
              {projeto.tecnologias.map((tec) => (
                <li key={tec}>{tec}</li>
              ))}
            </ul>

            <img
              src={projeto.imagem}
              alt={`Tela do projeto ${projeto.nome}`}
            />

            <a href={projeto.github} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos