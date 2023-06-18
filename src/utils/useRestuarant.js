import { useState } from "react";
import { RESTAURANT_URL } from "./constants";
const useRestuarant = (resId) => {

  const [restuarant, setRestuarant] = useState([]);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  async function getRestaurantsData () {
    const data = await fetch(RESTAURANT_URL + resId);
    const json = await data.json();
    setRestuarant(json?.data?.cards?.[0]?.card?.card?.info);
  }

  return restuarant;
}

export default useRestuarant;
