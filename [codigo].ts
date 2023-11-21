
import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      const codigoLivro = typeof codigo === 'string' ? parseInt(codigo, 10) : NaN;

      if (isNaN(codigoLivro)) {
        res.status(400).end(); // Requisição inválida
      } else {
        controleLivro.excluir(codigoLivro);
        res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
      }
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(); // Erro interno do servidor
  }
};
