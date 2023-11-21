import { Livro } from '../modelo/Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'Rio Book', 'O livro fala sobre as belas e curiosidades da cidades maravilhosa, o Rio de Janeiro', ['Ricardo Amaral']),
  new Livro(2, 2, 'O Holocausto: Uma nova história', 'Laurence Rees passou 25 anos entrevistando os sobreviventes do Holocausto e os responsáveis pelo Terceiro Reich e seus horrores.', ['Laurence Rees']),
  new Livro(3, 3, 'Filosofia para quem não é filósofo', 'Incluindo os principais aspectos da Filosofia antiga e moderna, dos pré-socráticos a Descartes e a Wittgenstein, bem como as principais escolas dessa área do conhecimento humano e os mais profícuos pensadores de cada uma delas', ['Peter Gibson']),
];

export class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigoMaisAlto = Math.max(...livros.map((livro) => livro.codigo));
    livro.codigo = codigoMaisAlto + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
