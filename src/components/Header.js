import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={CDN_URL}
        />
      </div>
      <div className="nav-items">
        <ul className="link-items">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header;