import { useState } from "react";
import axios from "axios";

const useGetRandomPokemon = () => {
  //so that nothing will be done with random until loading is complete
  const [loading, setLoading] = useState(true);
  //random will be array of pokemon objects to ne later iterated over
  const [random, setRandom] = useState([]);

  const fetchData = async () => {
    //array of numbers
    //create promise
    //  one promise per number to api endpoint for a pokemon number
    //put all promises in array
    // put inside of a promise.all so requests run concurrently (thanks nelson and nader)
    // set random to be the resultion of that promise all
    //set loading to false when promise resolves
    try {
      //array of random whole numbers with ceiling of 905
      let nums = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 905)
      );

      let urls = nums.map((num) => "https://pokeapi.co/api/v2/pokemon/" + num);

      const promises = urls.map((request) => {
        return axios.get(request).then((response) => {
          return response.data;
        });
      });

      const res = await Promise.all(promises).then((response) => {
        setRandom(response);
        setLoading(false);
      });
    } catch {
      throw Error("Random Pokemon Promise failed");
    }
  };
  return { random, loading, fetchData };
};

export default useGetRandomPokemon;
