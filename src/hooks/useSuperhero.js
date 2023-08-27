import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperhero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
const useSuperhero = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["superheroe", heroId], fetchSuperhero, {
    initialData: () => {
      const hero = queryClient
        .getQueriesData("superheroes")[0][1]
        ?.data?.find((hero) => (hero.id = parseInt(heroId)));
      if (hero) {
        return { data: hero };
      } else {
        return undefined
      }
    },
  });
};

export default useSuperhero;
