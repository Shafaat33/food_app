import { useState } from "react";
import RestuarantCard from "./RestuarantCard";
import ShimmerEffect from "./ShimmerEffect";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  useState(() => {
    getRestaurantsData();
  }, []);

  async function getRestaurantsData () {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setListOfRestuarants(json?.data?.cards?.[2]?.data?.data?.cards);
    setFilteredRestuarants(json?.data?.cards?.[2]?.data?.data?.cards);
  }

  const searchRestraunts = (value) => {
    let filteredRestraunts = listOfRestuarants.filter((res) =>
      res?.data?.name?.toLowerCase().includes(value.toLowerCase())
     );
    setFilteredRestuarants(filteredRestraunts);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>You are offline, please connect to internet</h1>
  }
  
  return (filteredRestuarants.length === 0) ? <ShimmerEffect cardsNumber={10} />
   : (
      <div className="body" key="body">
        <div className="search" key="search">
          <input
            className="search-bar"
            placeholder="search ..."
            onChange={(e) => searchRestraunts(e.target.value)}
          />
        </div>
    
        <div className="res-container">
          {filteredRestuarants?.map((res) => {
            return <RestuarantCard key={res.data.id} resData={res.data} />
          })}
        </div>
      </div>
  )
}

export default Body;
