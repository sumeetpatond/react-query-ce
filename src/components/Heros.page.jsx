import { useEffect, useState } from "react";
import axios from "axios";

function Heros() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>Heroes Page</h2>
      {data.map((hero) => {
        // eslint-disable-next-line react/jsx-key
        return <div>{hero.name}</div>;
      })}
    </>
  );
}

export default Heros;
