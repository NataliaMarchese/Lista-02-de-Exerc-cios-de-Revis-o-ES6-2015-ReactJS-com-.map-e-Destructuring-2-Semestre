import Card from "./Card";

function Exercicio13() {
  function mostrarUsuario({ nome, email }) {
    return `${nome} - ${email}`;
  }

  const usuario = {
    nome: "Natalia",
    email: "nataliamarchesee@gmail.com",
  };

  return (
    <Card titulo="Exercício 13">
      <p>{mostrarUsuario(usuario)}</p>
    </Card>
  );
}

export default Exercicio13;