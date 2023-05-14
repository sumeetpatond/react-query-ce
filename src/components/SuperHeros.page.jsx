import axios from "axios";
import { useQuery } from "react-query";
function SuperHeros() {
  const onSuccess = (data) => {
    console.log("successfully fetched: ", data);
  };
  const onError = (error) => {
    console.log("error fetching: ", error);
  };
  const { isLoading, data, isError, error, refetch } = useQuery(
    "superheroes",
    () => axios.get("http://localhost:4000/superheroes"),
    {
      // staleTime: 0,
      // cacheTime: 300000,
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      // refetchInterval: false,
      // enabled: false,
      onSuccess,
      onError,
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
      <button onClick={() => refetch()}>Fetch Heroes</button>
      {data?.data.map((hero) => {
        // eslint-disable-next-line react/jsx-key
        return <div>{hero.name}</div>;
      })}
    </>
  );
}

export default SuperHeros;
