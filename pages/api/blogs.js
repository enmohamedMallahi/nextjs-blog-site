// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      Author: 'Mohamed Mallahi',
      id: 1,
      title: 'Accidentation Magngincation Storm',
      body: 'Dire  rerum est autem su et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrumnt rem eveniet architecto.',
    },
    {
      Author: 'Mohamed Mallahi',
      id: 2,
      title: 'Sunt aut facere repellat provident occaecati',
      body: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.',
    },
  ]);
};
