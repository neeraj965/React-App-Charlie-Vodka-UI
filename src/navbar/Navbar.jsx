import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/contact">COCNTACT</Link>
          </li>
          <li>
            <Link to="/cocktails">COCKTAILS</Link>
          </li>
          <li>
            <Link to="/collections">COLLECTIONS</Link>
          </li>
          <li>
            <Link to="/heritage">HERITAGE</Link>
          </li>
          <li>
            <Link to="/home">HOME</Link>
          </li>
        </ul>
      </nav>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mkQrV82Hsmn9xfmPVbJvvc77VZJHBg58aw&usqp=CAU"
        alt=""
        className="charlie-logo"
      />

      <div>
        <span className="spirit">WHERE EXCELLENCE BECOMES THE SPIRIT</span>
        <span className="charlie">CHARLIE</span>
        <span className="vodka">VODKA</span>
        <span className="generation">
          A New Generation of Dominating Ardor{" "}
        </span>
      </div>
      <img
        src="https://charlievodka.in/wp-content/uploads/2022/06/Grain-Front.png"
        alt=""
        className="image1"
      />
      <img
        src="https://charlievodka.in/wp-content/uploads/2022/06/GA-Front-768x1024.png"
        alt=""
        className="image2"
      />
      <img
        src="https://charlievodka.in/wp-content/uploads/2020/11/ezgif-1.png"
        alt=""
        className="image3"
      />

     
    </div>
  );
}
