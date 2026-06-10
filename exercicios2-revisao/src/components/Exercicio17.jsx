import Card from "./Card";

function Exercicio17() {
  const numeros = [1, [2, 3], 4];

  const [, [dois, tres]] = numeros;

  return (
    <Card titulo="Exercício 17">
      <p>Número 2: {dois}</p>
      <p>Número 3: {tres}</p>
    </Card>
  );
}

export default Exercicio17;