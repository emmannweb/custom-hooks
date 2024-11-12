import { useParams } from "react-router-dom";
import useFetchSingleData from "../hooks/useFetchSingleData";

const SinglePost = () => {
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const { data, loading, error } = useFetchSingleData(url);

  if (error) return <h3>Error: {error.message}</h3>;

  return (
    <>
      {loading ? (
        <div className="container">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="container" style={{ paddingTop: "30px" }}>
          <h2>single fetch</h2>
          <h2>{data?.title}</h2>
        </div>
      )}
    </>
  );
};

export default SinglePost;
