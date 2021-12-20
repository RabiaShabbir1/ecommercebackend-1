import "../styles/signin.css";
import logo from "../images/logo.jpeg";
import { animated, useSpring } from "@react-spring/web";
const RightHalf = () => {
  const rightStyle = useSpring({
    config: { tension: 180, friction: 12 },
    from: {
      x: 200,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    leave: {
      x: 200,
      opacity: 0,
    },
  });
  return (
    <animated.div style={rightStyle} className="float-child">
      <div className="blue">
        {/* <h3>Ecommerce Store</h3> */}
        <div className="images">
          <img src={logo} alt="" />
        </div>
        {/* <div className="images">
          <img src={i1} alt="" />
          <img src={i5} alt="" />
          <img src={i2} alt="" />
          <img src={i3} alt="" />
          <img src={i4} alt="" />
        </div> */}
        <h2>Looneywala's Leading Store With Over 10M+ Products</h2>
      </div>
    </animated.div>
  );
};
export default RightHalf;
