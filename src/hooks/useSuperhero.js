import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperhero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
const useSuperhero = (heroId) => {
  return useQuery(["superheroe", heroId], fetchSuperhero);
};

export default useSuperhero;
