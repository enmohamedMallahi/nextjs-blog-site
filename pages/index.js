import styles from '../styles/Home.module.css';
import BlogCard from '../components/BlogCard';

export default function Home({ articles }) {
  // const articles = [
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 1,
  //     title: 'Accidentation Magngincation Storm',
  //     body: 'Dire  rerum est autem su et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrumnt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 2,
  //     title: 'Sunt aut facere repellat provident occaecati',
  //     body: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 1,
  //     title: 'Accidentation Magngincation Storm',
  //     body: 'Dire  rerum est autem su et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrumnt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 2,
  //     title: 'Sunt aut facere repellat provident occaecati',
  //     body: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 1,
  //     title: 'Accidentation Magngincation Storm',
  //     body: 'Dire  rerum est autem su et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrumnt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 2,
  //     title: 'Sunt aut facere repellat provident occaecati',
  //     body: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 1,
  //     title: 'Accidentation Magngincation Storm',
  //     body: 'Dire  rerum est autem su et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrumnt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 2,
  //     title: 'Sunt aut facere repellat provident occaecati',
  //     body: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 1,
  //     title: 'Accidentation Magngincation Storm',
  //     body: 'Dire  rerum est autem su et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrumnt rem eveniet architecto.',
  //   },
  //   {
  //     Author: 'Mohamed Mallahi',
  //     id: 2,
  //     title: 'Sunt aut facere repellat provident occaecati',
  //     body: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.',
  //   },
  // ];

  return (
    <>
      <div className="banner">
        <h1>Welcome To NetBlogger!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      {/* <div className="articles">
        {articles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div> */}
    </>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     'https://nextblogger--3000.local.webcontainer.io/api/blogs'
//   );
//   const data = await res.json();

//   return {
//     props: {
//       articles: data,
//     },
//   };
// };
