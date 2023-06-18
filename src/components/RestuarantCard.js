import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  return (
    <Link to={`/restaurant/${resData.id}`}>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} >
      <img
        className="res-logo"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resData.cloudinaryImageId}`}
        alt="food"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.deliveryTime}</h4>
      <h4>{resData.avgRating}</h4>
    </div>
    </Link>
    
  )
}

export default RestuarantCard;
