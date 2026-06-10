import Card from "./Card";

function Exercicio16() {
  const idades = [12, 18, 25, 15];

  const resultado = idades.map((idade) =>
    idade < 18 ? "Menor" : "Maior"
  );

  return (
    <Card titulo="Exercício 16">
      {resultado.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Card>
  );
}

export default Exercicio16;