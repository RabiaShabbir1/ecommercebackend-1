import "../../styles/signin.css";
import { useContext, useState } from "react";
const CreateAdmin = () => {
  const [adminAdded, setAdminAdded] = useState(false);
  const [inputData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    password: "",
    role: "admin",
  });
  const handleFormChange = (e) => {
    setData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const submitFunction = async () => {
    const resposne = await fetch("/api/signup", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(inputData),
    });
    const res = await resposne.json();
    if (res.message === "User added") {
      setAdminAdded(true);
    }
    console.log(res);
  };
  return (
    <div className="mainHeader">
      <h1>Add Admin</h1>
      <div className="adminforms">
        <input
          value={inputData.firstName}
          placeholder="First Name"
          name="firstName"
          className="adminField"
          onChange={handleFormChange}
          type="text"
        />
        <input
          value={inputData.lastName}
          placeholder="Last Name"
          name="lastName"
          className="adminField"
          onChange={handleFormChange}
          type="text"
        />
        <input
          value={inputData.email}
          placeholder="Email"
          name="email"
          className="adminField"
          onChange={handleFormChange}
          type="text"
        />
        <input
          value={inputData.cnic}
          placeholder="CNIC"
          name="cnic"
          className="adminField"
          onChange={handleFormChange}
          type="text"
        />
        <input
          value={inputData.password}
          placeholder="Password"
          className="adminField"
          name="password"
          onChange={handleFormChange}
          type="password"
        />
        <button onClick={submitFunction} className="adminField">
          Create Admin
        </button>
      </div>
      {adminAdded && (
        <h2
          style={{
            color: "rgba(81,110,108,1)",
            fontSize: "2rem",
          }}
        >
          Admin Created Successfully
        </h2>
      )}
    </div>
  );
};
export default CreateAdmin;
