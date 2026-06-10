import Card from "./Card";

function Exercicio18() {
  const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 100 },
  ];

  const desconto = produtos.map((produto) => ({
    ...produto,
    preco: (produto.preco * 0.9).toFixed(2),
  }));

  return (
    <Card titulo="Exercício 18">
      {desconto.map((produto) => (
        <p key={produto.nome}>
          {produto.nome} - R$ {produto.preco}
        </p>
      ))}
    </Card>
  );
}

export default Exercicio18;