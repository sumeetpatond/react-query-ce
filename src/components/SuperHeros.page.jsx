import { Link } from "react-router-dom";
import useSuperheroes from "../hooks/useSuperheroes";

function SuperHeros() {
  const onSuccess = (data) => {
    console.log("successfully fetched: ", data);
  };
  const onError = (error) => {
    console.log("error fetching: ", error);
  };
  const { isLoading, data, isError, error, refetch } = useSuperheroes(
    onSuccess,
    onError
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
      {data?.data?.map((hero) => {
        // eslint-disable-next-line react/jsx-key
        return (
          <div key={hero.id}>
            <Link to={`/superheroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default SuperHeros;
