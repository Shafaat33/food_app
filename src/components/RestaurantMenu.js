import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import ShimmerEffect from "./ShimmerEffect";
import useRestuarant from "../utils/useRestuarant";

const RestuarantMenu = (props) => {
  const { id } = useParams();
  const restuarant = useRestuarant(id);

  return (
    !restuarant?.id ? <ShimmerEffect cardsNumber={1}/> :
    <div>
      <h1>Res ID: {restuarant?.id}</h1>
      <h2>{restuarant.name}</h2>
      <img src={IMG_CDN_URL + restuarant.cloudinaryImageId} />
      <h2>{restuarant.costForTwoMessage}</h2>
      <h2>{restuarant.avgRatingString}</h2>
    </div>
  );
}

export default RestuarantMenu;
