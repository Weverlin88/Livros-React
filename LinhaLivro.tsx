// components/LinhaLivro.tsx
import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import ControleEditora from '../classes/controle/ControleEditora'; // Adicione esta linha

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

const controleEditora = new ControleEditora();

const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button className="btn btn-danger" onClick={excluir}>
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default LinhaLivro;
