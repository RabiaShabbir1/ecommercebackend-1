import CatNav from "./CatNav";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import i2 from "../../images/icons/i2.png";
import i3 from "../../images/icons/i3.png";
import i4 from "../../images/icons/i4.png";
import i5 from "../../images/icons/i5.png";
import i6 from "../../images/icons/i6.png";
import Carousel from "react-elastic-carousel";
import ProductPage from "./ProductPage";
import ProductDetails from "./ProductDetails";
import "./test.css";
const PostUserPage = () => {
  const CarouselRef = useRef(null);
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({});
  const [show, setShow] = useState(true);
  const [productinfo, setProductinfo] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("ecomtoken");
    if (!token) navigate("/");
    async function fetchData() {
      try {
        const result = await fetch(
          "/api/homepage/?authorization=bearer " + token
        );
        const user = await result.json();
        setUserdata(user);
        if (user.role === "admin") {
          navigate("/postSignin");
        }
      } catch (x) {
        localStorage.removeItem("ecomtoken");
        navigate("/");
      }
    }
    fetchData();
    document.title = "FYWEB Home";
  }, []);
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  return (
    <div>
      <CatNav setfunc={() => setShow(true)} />
      {show ? (
        <div>
          <div className="carousel-container">
            <Carousel
              enableAutoPlay
              autoPlaySpeed={3000}
              ref={CarouselRef}
              onNextEnd={(currentItem, pageIndex) => {
                if (pageIndex === 4) {
                  setTimeout(() => {
                    CarouselRef.current.goTo(0);
                  }, 2000);
                }
              }}
              itemsToShow={1}
            >
              <img src={i2} alt="" />
              <img src={i3} alt="" />
              <img src={i4} alt="" />
              <img src={i5} alt="" />
              <img src={i6} alt="" />
            </Carousel>
          </div>
          <div
            style={{
              padding: "20px 20px 20px -10px",
              // backgroundColor: "rgba(219,226,214,0.5)",
            }}
          >
            <h1
              style={{
                fontSize: "5rem",
                marginLeft: "50px",
                color: "rgba(81,110,108,1)",
                fontFamily: "poppos",
              }}
            >
              Products
            </h1>
            <ProductPage
              setfunc={() => setShow(false)}
              setProductValues={setProductinfo}
            />
          </div>
        </div>
      ) : (
        <div>
          <ProductDetails name={productinfo} />
        </div>
      )}
    </div>
  );
};
export default PostUserPage;
