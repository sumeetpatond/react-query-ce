import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");

const useSuperheroes = (onSuccess, onError) => {
  return useQuery("superheroes", fetchSuperheroes, {
    // staleTime: 0,
    // cacheTime: 300000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: false,
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => data?.data?.map((hero) => hero.name),
  });
};

export default useSuperheroes;
