import Card from "./Card";

function Exercicio15() {
  const carro = {
    motor: {
      cavalos: 150,
    },
  };

  const {
    motor: { cavalos },
  } = carro;

  return (
    <Card titulo="Exercício 15">
      <p>{cavalos} cavalos</p>
    </Card>
  );
}

export default Exercicio15;