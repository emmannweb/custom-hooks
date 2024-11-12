import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const value = await fetch(url);
        if (!value.ok) {
          throw new Error("An error occured");
        }
        const res = await value.json();
        setData(res);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
