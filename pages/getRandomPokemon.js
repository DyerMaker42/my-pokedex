import { useState } from "react";
import axios from "axios";

const useGetRandomPokemon = () => {
  //so that nothing will be done with random until loading is complete
  const [loading, setLoading] = useState(false);
  //random will be array of pokemon objects to ne later iterated over
  const [random, setRandom] = useState([]);

  const fetchData = () => {};
  return <div></div>;
};
