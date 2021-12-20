import { useState, useEffect } from "react";
import "../../styles/signin.css";
const AddCategory = () => {
  const [name, setName] = useState("");
  const [parentID, setParentID] = useState(0);
  const [categories, setCategories] = useState({});
  const addCat = async () => {
    let payload = {};
    if (!parentID) {
      payload = {
        name: name,
        role: "admin",
      };
    } else {
      payload = {
        name: name,
        role: "admin",
        parentId: parentID,
      };
    }
    let token = localStorage.getItem("ecomtoken");
    const resposne = await fetch(
      "/api/category/create/?authorization=bearer " + token,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    const res = await resposne.json();
    alert(JSON.stringify(res));
    console.log();
  };
  useEffect(() => {
    const getCategories = async () => {
      const resp = await fetch("/api//category/categories");
      const categories = await resp.json();
      setCategories(categories);
    };
    getCategories();
  }, []);
  return (
    <div className="mainHeader">
      <h1>Add Category</h1>
      <div className="adminforms">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="adminField"
          type="text"
        />
        <input
          value={parentID}
          onChange={(e) => setParentID(e.target.value)}
          placeholder="Parent Category (Optional)"
          className="adminField"
          type="text"
        />
        <button onClick={addCat} className="adminField">
          Add Category
        </button>
        <div className="contentScrollable">
          <pre>{JSON.stringify(categories, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};
export default AddCategory;
