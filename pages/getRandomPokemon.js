import { useState } from "react";
import axios from "axios";

const useGetRandomPokemon = () => {
  //so that nothing will be done with random until loading is complete
  const [loading, setLoading] = useState(false);
  //random will be array of pokemon objects to ne later iterated over
  const [random, setRandom] = useState([]);

  const fetchData = () => {
    try {
      //array of elements all undefined
      let nums = Array.from({ length: 10 });
      console.log(nums);
    } catch {}
  };
  return (
    <div>
      <p>{fetchData()}</p>
    </div>
  );
};

export default useGetRandomPokemon;
