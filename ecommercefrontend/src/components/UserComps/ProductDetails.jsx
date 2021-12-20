import "./test.css";
import iphoneimg from "../../images/iphone.jpg";
import i1 from "../../images/icons/i1.png";
import i2 from "../../images/icons/i2.png";
import i3 from "../../images/icons/i3.png";
const ProductDetails = ({ name }) => {
  return (
    <div className="productdesc">
      <div className="floatycontainer">
        <div className="float-child1">
          <img className="bigimg" src={iphoneimg} width="400px" alt="" />
          <div className="extras">
            <button>
              <img src={i1} alt="" />
            </button>
            <button>
              <img src={i2} alt="" />
            </button>
            <button>
              <img src={i3} alt="" />
            </button>
          </div>
        </div>
        <div className="float-child2">
          <h2>{name}</h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sint
            eos quos nostrum aut nihil doloribus nesciunt quis fugiat maxime
            eum? Temporibus non quo explicabo! Dolores fuga asperiores corrupti
            dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Autem officia illum odio molestias perspiciatis maxime magnam
            placeat tempora quo culpa quidem accusamus tenetur quos, voluptatum,
            vitae nisi! Fugiat, accusantium obcaecati.
          </h6>
          <h2>Rs. 284,000</h2>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
