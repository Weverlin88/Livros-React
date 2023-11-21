// src/LivroDados.js
import React, { useState } from "react";
import { ControleLivros } from "./controle/controleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";

function LivroDados() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();

    const autoresArray = autores.split("\n").map((autor) => autor.trim());

    const novoLivro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autoresArray,
    };

    controleLivro.incluir(novoLivro);
    navigate("/");
  };

  return (
    <main>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <textarea
            id="resumo"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores (um por linha):</label>
          <textarea
            id="autores"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="codEditora">Editora:</label>
          <select
            id="codEditora"
            value={codEditora}
            onChange={tratarCombo}
            required
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir Livro
        </button>
      </form>
    </main>
  );
}

export default LivroDados;
