import { useState } from "react";
import Product from "../SmallComponents/Product";
const ProductPage = (props) => {
  const [products, setProducts] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14,
  ]);
  console.log(props);
  return (
    <div className="productList">
      {products.map((p) => (
        <Product setfunc={props.setfunc} setName={props.setProductValues} />
      ))}
    </div>
  );
};
export default ProductPage;
