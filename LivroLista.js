import React, { useState, useEffect } from 'react';
import ControleLivros from './ControleLivros';
import ControleEditora from './ControleEditora';

function LinhaLivro({ livro, excluir }) {
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const controleLivro = new ControleLivros();
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, []);

  const excluirLivro = (codigo) => {
    const controleLivro = new ControleLivros();
    controleLivro.excluir(codigo);
    setLivros(controleLivro.obterLivros());
  };

  if (!carregado) {
    return <p>Carregando...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Editora</th>
          <th>Resumo</th>
          <th>Autores</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {livros.map((livro) => (
          <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />
        ))}
      </tbody>
    </table>
  );
}