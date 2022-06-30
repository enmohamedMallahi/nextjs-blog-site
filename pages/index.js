import BlogCard from '../components/BlogCard';

export default function Home({ articles }) {
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
