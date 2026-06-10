import Card from "./Card";

function Exercicio20() {
  const numeros = [10, 20, 30, 40];

  const total = numeros.reduce(
    (acumulador, numero) => acumulador + numero,
    0
  );

  const porcentagens = numeros.map(
    (numero, index, array) =>
      `${numero} representa ${(
        (numero / total) *
        100
      ).toFixed(2)}% do total`
  );

  return (
    <Card titulo="Exercício 20">
      {porcentagens.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Card>
  );
}

export default Exercicio20;