import { useContext } from "react";
import { useNavigate } from "react-router";
import "../../styles/signin.css";
import { UserContext } from "../customHooks/UserContext";
const ViewDetails = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("ecomtoken");
    navigate("/");
  };
  const userData = useContext(UserContext);
  return (
    <div className="mainHeader">
      <h1>Admin Details</h1>
      <div className="adminforms">
        <h2>FirstName: {userData.firstName}</h2>
        <h2>LastName: {userData.lastName}</h2>
        <h2>Email: {userData.email}</h2>
        <h2>Role: {userData.role}</h2>
        <input
          type="password"
          className="adminField"
          placeholder="Update Password"
        />
        <input
          type="password"
          className="adminField"
          placeholder="Confirm Password"
        />
        <button className="adminField">Update Password</button>
        <button onClick={logout} className="adminField">
          Logout
        </button>
      </div>
    </div>
  );
};
export default ViewDetails;
