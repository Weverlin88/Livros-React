
import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/controleLivros';

export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const novoLivro = req.body;
      controleLivro.incluir(novoLivro);
      res.status(200).json({ mensagem: 'Livro incluído com sucesso.' });
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(); // Erro interno do servidor
  }
};
