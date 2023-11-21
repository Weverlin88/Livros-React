import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const { codEditora } = req.query;
      const codigo = typeof codEditora === 'string' ? parseInt(codEditora, 10) : NaN;

      if (isNaN(codigo)) {
        res.status(400).end(); // Requisição inválida
      } else {
        const nomeEditora = controleEditora.getNomeEditora(codigo);
        if (nomeEditora) {
          res.status(200).json({ nome: nomeEditora });
        } else {
          res.status(404).end(); // Não encontrado
        }
      }
    } else {
      res.status(405).end(); // Método não permitido
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(); // Erro interno do servidor
  }
};
