import "./test.css";
import cartimg from "../../images/icons/cart.png";
import logo_sml from "../../images/logo_sml.jpg";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
const CatNav = ({ setfunc }) => {
  const [cats, setCats] = useState([]);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("/api/category/categories");
      const categories = await response.json();
      setCats(categories.categoryList);
    };
    getCategories();
  }, []);
  return (
    <div>
      <div className="topbar">
        <button>
          <img src={cartimg} width="40px" alt="" />
        </button>
        <img
          className="logo"
          onClick={setfunc}
          height="70px"
          src={logo_sml}
          alt=""
        />
        <button onClick={logout} className="logout">
          Logout
        </button>
      </div>
      <div className="flexbox-container">
        {cats.map(c => {
          return (
            <div key={c._id} className="flexbox-item">
              <button>{c.name}</button>
              <div className="dropitems">
                {c.children &&
                  c.children.map(child => (
                    <button key={child._id}>{child.name}</button>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CatNav;
