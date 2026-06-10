import Card from "./Card";

function Exercicio12() {
  const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
  ];

  const resultado = produtos.map(
    (produto) => `O produto ${produto.nome} custa R$ ${produto.preco}`
  );

  return (
    <Card titulo="Exercício 12">
      {resultado.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Card>
  );
}

export default Exercicio12;