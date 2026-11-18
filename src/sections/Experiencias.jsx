import experiencias from '../data/experiencias'

function Experiencias() {
  return (
    <section id="experiencias">
      <h2>Experiências</h2>

      <div className="lista-experiencias">
        {experiencias.map((exp) => (
          <article className="experiencia" key={exp.id}>
            <span className="periodo">{exp.periodo}</span>
            <h3>{exp.cargo}</h3>
            <p className="instituicao">{exp.instituicao}</p>
            <p>{exp.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experiencias