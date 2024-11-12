import useFetchData from "../hooks/useFetchData";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  const { data, loading, error } = useFetchData(url);

  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <>
      <div className="container" style={{ paddingTop: "30px" }}>
        {loading ? (
          <div className="container">
            <h3>Loading...</h3>
          </div>
        ) : (
          <ul>
            {data?.map((post, id) => (
              <li key={id}>
                <a href={`/post/${post.id}`}>{post.title} </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Home;
