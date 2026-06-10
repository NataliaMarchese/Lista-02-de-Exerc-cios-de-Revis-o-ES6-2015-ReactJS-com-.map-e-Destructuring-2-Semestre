import Card from "./Card";

function Exercicio19() {
  const api = [
    {
      id: 1,
      nome: "Natalia",
      idade: 27,
      cidade: "São Paulo",
    },
    {
      id: 2,
      nome: "Felipe",
      idade: 30,
      cidade: "Mongagua",
    },
  ];

  const resultado = api.map(({ id, nome }) => ({
    id,
    nome,
  }));

  return (
    <Card titulo="Exercício 19">
      {resultado.map((item) => (
        <p key={item.id}>
          {item.id} - {item.nome}
        </p>
      ))}
    </Card>
  );
}

export default Exercicio19;