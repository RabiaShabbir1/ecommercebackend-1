import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signin.css";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
  root: {
    color: "black",
    marginLeft: "10vh",
    width: "25vw",
  },
});

//-----
const Signin = ({ setShow }) => {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Submit Signin Function
  const SubmitSignin = async () => {
    const resposne = await fetch("/api/signin/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: cnic,
        password: email,
      }),
    });
    const achaResponse = await resposne.json();
    try {
      if (achaResponse.token) {
        localStorage.setItem("ecomtoken", achaResponse.token);
        localStorage.setItem("usertype", achaResponse.user.role);
        if (achaResponse.user.role === "admin") {
          navigate("/postSignin");
        } else {
          navigate("/user/home");
        }
        return;
      }
    } catch (x) {
      alert("Error Login Failed");
    }
    alert("Error Login Failed");
  };
  //-----
  const classes = useStyles();

  //- -----
  return (
    <div className="mContainer">
      <div className="float-child">
        <div className="white">
          <h1>Signin</h1>
          <div className="inputFields">
            <TextField
              className={classes.root}
              value={cnic}
              onChange={(s) => {
                setCnic(s.target.value);
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <br />
            <TextField
              className={classes.root}
              value={email}
              onChange={(s) => {
                setEmail(s.target.value);
              }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              margin="dense"
            />
          </div>
          <div className="signButtons">
            <button className="si" onClick={SubmitSignin}>
              Sign In
            </button>
            <br />
            <button onClick={setShow} className="su">
              Register
            </button>
          </div>
          <div className="footer">
            <p>All Copyrights Not Reserved ofcourse.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signin;
