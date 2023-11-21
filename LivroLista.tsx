// pages/LivroLista.tsx
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Menu } from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import ControleLivros from '../classes/controle/controleLivros'; // Adicione esta linha

import styles from '../styles/Home.module.css';

const baseURL = 'http://localhost:3000/api/livros';

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    const resposta = await fetch(baseURL);
    const dados = await resposta.json();
    setLivros(dados);
    setCarregado(true);
  };

  useEffect(() => {
    obterLivros();
  }, []);

  const excluirLivro = async (codigo: number) => {
    await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    setCarregado(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1>Lista de Livros</h1>
        {carregado ? (
          <table className="table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Editora</th>
                <th>Autores</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluirLivro(livro.codigo)} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Carregando...</p>
        )}
      </main>
    </div>
  );
};

export default LivroLista;
