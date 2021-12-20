import { useState, useEffect } from "react";
import "../../styles/signin.css";
import axios from "axios";
/*
const {
    name,
    price,
    description,
    category,
    creator,
    brand,
    quantity,
    review,
  } = req.body;
*/
const AddProduct = () => {
  const [products, setProducts] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    creator: "",
    brand: "",
    quantity: 0,
    review: [],
  });
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const resp = await fetch("/api/product/products");
      const pros = await resp.json();
      setProducts(pros);
    };
    getProducts();
  }, []);
  const handleFormChange = ({ target }) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
    setProductData({
      ...productData,
      [target.name]: target.value,
    });
  };
  const addPro = async () => {
    console.log("Yess");
    let token = localStorage.getItem("ecomtoken");
    // const resposne = await fetch(
    //   "/api/product/create/?authorization=bearer " + token,
    //   {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //     files: images,
    //     body: JSON.stringify(productData),
    //   }
    // );
    // const formData = new FormData();
    // formData.append("file", images);
    // console.log(formData);
    // const resposne = await axios.post(
    //   "/api/product/create/?authorization=bearer " + token,
    //   formData,
    //   {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "multipart/form-data",
    //     },
    //     method: "POST",
    //     body: JSON.stringify(productData),
    //   }
    // );
    const formData = new FormData();
    formData.append("image", images);
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);
    formData.append("brand", productData.brand);
    formData.append("category", productData.category);
    formData.append("description", productData.description);
    const config = {
      headers: {
        "content-type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
    };
    axios
      .post(
        "/api/product/create/?authorization=bearer " + token,
        formData,
        config
      )
      .then(response => {
        console.log(response);
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
    // const res = await resposne.json();
    // alert(JSON.stringify(res));
    // console.log();
  };
  return (
    <div className="mainHeader">
      <h1>Add Product</h1>
      <div className="adminforms">
        <input
          name="name"
          value={productData.name}
          placeholder="Product Name"
          className="adminField3"
          type="text"
          onChange={handleFormChange}
        />
        <input
          name="price"
          value={productData.price}
          placeholder="Price"
          className="adminField2"
          type="text"
          onChange={handleFormChange}
        />
        <input
          name="category"
          value={productData.category}
          placeholder="Category"
          className="adminField3"
          type="text"
          onChange={handleFormChange}
        />
        <input
          name="brand"
          value={productData.brand}
          placeholder="Brand"
          className="adminField2"
          type="text"
          onChange={handleFormChange}
        />
        <input
          name="quantity"
          value={productData.quantity}
          placeholder="Quantity"
          className="adminField3"
          type="text"
          onChange={handleFormChange}
        />
        <input
          name="description"
          value={productData.description}
          placeholder="Description"
          className="adminField2"
          type="text"
          onChange={handleFormChange}
        />
        <input
          multiple="multiple"
          onChange={e => setImages(e.target.files[0])}
          type="file"
          name="filee"
          className="adminField3"
        />
        <button onClick={addPro} className="adminField2">
          Add Product
        </button>
      </div>
      <div className="contentScrollable">
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </div>
  );
};
export default AddProduct;
