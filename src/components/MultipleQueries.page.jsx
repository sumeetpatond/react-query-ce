/* eslint-disable react/prop-types */
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperhero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

function MultipleQueriesPage({ heroIds }) {
  const result = useQueries(
    heroIds.map((id) => ({
      queryKey: ["superheroe", id],
      queryFn: () => fetchSuperhero(id),
    }))
  );
  console.log("result", result);
  return <div>MultipleQueriesPage</div>;
}

export default MultipleQueriesPage;
