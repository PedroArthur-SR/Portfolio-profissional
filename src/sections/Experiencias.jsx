import experiencias from '../data/experiencias';

function Experiencias({ t }) {
  return (
    <section id="experiencias">
      <h2>{t.experiencias.titulo}</h2>

      <div className="lista-experiencias">
        {experiencias.map((exp, index) => (
          <article className="experiencia" key={exp.id}>
            <span className="periodo">{exp.periodo}</span>

            <h3>{t.experiencias.lista[index].cargo}</h3>

            <p className="instituicao">{exp.instituicao}</p>

            <p>{t.experiencias.lista[index].descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experiencias;