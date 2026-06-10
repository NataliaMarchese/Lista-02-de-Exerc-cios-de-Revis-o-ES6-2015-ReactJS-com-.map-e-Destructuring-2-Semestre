import Card from "./Card";

function Exercicio14() {
  const numeros = [1, 2, 3, 4, 5];

  const resultado = numeros.map((n) => ({
    valor: n,
    par: n % 2 === 0,
  }));

  return (
    <Card titulo="Exercício 14">
      {resultado.map((item) => (
        <p key={item.valor}>
          Valor: {item.valor} | Par: {item.par.toString()}
        </p>
      ))}
    </Card>
  );
}

export default Exercicio14;