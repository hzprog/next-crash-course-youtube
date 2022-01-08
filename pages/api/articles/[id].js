import { articles } from '../../../data';

export default function handler({ query: { id } }, res) {
  const filtred = articles.filter((article) => article.id === id);

  if (filtred.length > 0) {
    res.status(200).json(filtred[0]);
  } else {
    res
      .status(404)
      .json({ message: `the article with id ${id} was not found` });
  }
}
