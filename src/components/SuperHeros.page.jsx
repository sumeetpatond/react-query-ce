import axios from "axios";
import { useQuery } from "react-query";
function SuperHeros() {
  const { isLoading, data, isError, error } = useQuery(
    "superheroes",
    () => axios.get("http://localhost:4000/superheroes"),
    {
      staleTime: 0,
      cacheTime: 300000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchInterval: false,
    }
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Heroes Page</h2>
      {data?.data.map((hero) => {
        // eslint-disable-next-line react/jsx-key
        return <div>{hero.name}</div>;
      })}
    </>
  );
}

export default SuperHeros;
