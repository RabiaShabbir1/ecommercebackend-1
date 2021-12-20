import React from "react";
import "../styles/signin.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

/*
 * Styles For Material UI
 */
const useStyles = makeStyles({
  root: {
    color: "black",
    width: "25vw",
  },
});

// Actual Function
const SignUp = ({ setShow }) => {
  // State
  const [inputData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cnic: "",
    password: "",
    role: "user",
  });
  /*
   * SignUp Buttons Submits Data to API , POST Type request
   */
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
    console.log(res);
  };
  // ----
  const classes = useStyles();
  //- - --
  // Form Changes Call
  const handleFormChange = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);
    setData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  // rendering on screen
  return (
    <div className="mContainer">
      <div className="float-child">
        <div className="white">
          <h5>SignUp</h5>
          <div className="inputFields">
            <TextField
              className={classes.root}
              margin="none"
              value={inputData.firstName}
              name="firstName"
              onChange={handleFormChange}
              variant="outlined"
              label="First Name"
            ></TextField>
            <br />
            <TextField
              value={inputData.lastName}
              name="lastName"
              onChange={handleFormChange}
              margin="dense"
              variant="outlined"
              label="Last Name"
              className={classes.root}
            ></TextField>
            <br />
            <TextField
              className={classes.root}
              value={inputData.email}
              name="email"
              margin="none"
              onChange={handleFormChange}
              variant="outlined"
              label="Email"
            ></TextField>
            <br />
            <TextField
              margin="dense"
              className={classes.root}
              value={inputData.cnic}
              name="cnic"
              onChange={handleFormChange}
              variant="outlined"
              label="CNIC"
            ></TextField>
            <br />
            <TextField
              className={classes.root}
              value={inputData.phone}
              name="phone"
              onChange={handleFormChange}
              variant="outlined"
              label="Phone"
              margin="none"
            ></TextField>
            <br />
            <TextField
              className={classes.root}
              margin="dense"
              value={inputData.password}
              name="password"
              onChange={handleFormChange}
              variant="outlined"
              label="Password"
              type="password"
            ></TextField>
            <br />
          </div>
          <div className="signButtons">
            <button className="si" onClick={submitFunction}>
              Register
            </button>
            <br />
            <button onClick={setShow} className="su">
              Back To Sign In
            </button>
          </div>
          <div className="footer">
            <p>All Copyrights Not Reserved ofcourse.</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
export default SignUp;
