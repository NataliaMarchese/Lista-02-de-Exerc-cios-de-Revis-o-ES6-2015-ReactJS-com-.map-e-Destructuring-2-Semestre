import Card from "./Card";

function Exercicio11() {
  const curso = {
    id: 1,
    title: "JavaScript",
  };

  const { title: tituloCurso } = curso;

  return (
    <Card titulo="Exercício 11">
      <p>{tituloCurso}</p>
    </Card>
  );
}

export default Exercicio11;