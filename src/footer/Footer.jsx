import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { ImSearch } from "react-icons/im";

export default function Footer() {
  return (
    <div>
      <span
        classname="add-cart-container"
        style={{
          backgroundColor: "lightgray",
          height: "2.5rem",
          width: "8rem",
          position: "absolute",
          marginTop: "30rem",
          marginLeft: "65rem",
          borderRadius: "3%",
          boxShadow: "1rem 2rem 2rem black",
        }}
      ></span>

      <span className="cart">ADD TO CART</span>

      <span className="catalogue-container"></span>

      <span className="catalogue">catalogue</span>

      <span className="line"></span>

      <span className="first-para">
        FIND A STORE
        <br />
        CHARLIE MAGAZINE
        <br />
        BECOME A MEMBER
        <br />
        FEEDBACK
        <br />
        PROMO CODES
      </span>

      <span className="second-para">
        GET HELP
        <br />
        <br />
        Order status
        <br />
        Shipping & Delivery
        <br />
        returns
        <br />
        Payment Options
        <br />
        Cntact us
        <br />
        <br />
        <br />
        <span style={{ fontSize: "0.8rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius{" "}
        </span>
      </span>

      <span className="third-para">
        {" "}
        <span style={{ fontSize: "1.2rem" }}>ABOUT CHARLIE</span>
        <br />
        <br />
        News
        <br />
        Vacancies
        <br />
        Investors
        <br />
        Sustainability
      </span>

      <div className="social-media">
        <AiFillInstagram className="insta" />
        <BsFacebook className="facebook" />
        <AiFillYoutube className="youtube" />
        <AiFillTwitterCircle className="twitter" />
      </div>

      <CgProfile className="profile" />
      <ImSearch className="search" />
    </div>
  );
}
