import Image_Auth from "../../Assets(New)/Image_Auth.png";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./Common.css";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets(New)/Logo.png";

import axios from "axios";
import swal from "sweetalert";
import { CircularProgress } from "@mui/material";
const CreateAccount = () => {
  let [fName, setFName] = useState("");
  let [lName, setLName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("")
  
  let [submitButton, setSubmitButton]=useState("SIGNUP");

  //Createing new form data
  const data = new FormData();

  //Apending the image to image json "image is name for the image input" json that is sent is {image: "theImage"}
  data.append("fName", fName);
  data.append("lName", lName);
  data.append("email", email);
  data.append("password", password);

  function handleClick(e) {
    e.preventDefault();
    setSubmitButton(<CircularProgress color="inherit" />)
    if(password!==confirmPassword){
      swal('', 'Passwords do not match!', 'error');
    }else{

      localStorage.setItem("tempData", JSON.stringify({fName: fName, lName: lName}))
      axios
      .post(`${process.env.REACT_APP_SERVER}/signupstep1`, data)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("tempUserId", response.data.userId);
          history.push("/signup/verifyotp");
        } else if (response.status === 202) {
          swal(`${response.data.error}`, `${response.data.message}`, "error");
          setSubmitButton('SIGNUP')
        }
      });
    }
    
      

    
  }

  const history = useHistory();

  return (
    <div className="authCommon">
      <div className="authBlock-image">
        <div className="welcomeLogo" onClick={() => history.push("/")}>
          <img src={Logo} alt="Logo" /> <p>Swift Business Pay</p>
        </div>
        <img src={Image_Auth} alt="auth" className="authImage" />
        <div className="authCopyright">
          <p>&copy; Swift Business Pay. All rights reserved.</p>
        </div>
      </div>
      <div className="authBlock-content">
        <h2 className="authBlock-content-head">Create Account</h2>
        <form className="login-form">
          <div className="login-form-name" autoComplete="name">
            <div className="form-input">
            <TextField
                required
                id="outlined-required"
                label="First Name"
                defaultValue=""
                fullWidth="true"
                type="text"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                autoComplete="given-name"
              />
            </div>
            <div className="form-input">
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                defaultValue=""
                fullWidth="true"
                type="text"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                autoComplete="family-name"

              />
            </div>
          </div>
          <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              fullWidth="true"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
              fullWidth="true"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              defaultValue=""
              fullWidth="true"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="auth-button" onClick={handleClick}>{submitButton}</button>
          <div className="auth-already">
            <p>
              Already have an account?{" "}
              <a href="##" onClick={() => history.push("/login")}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
        <div className="authCopyright-mobile">
          <p>&copy; Swift Business Pay. All rights reserved.</p>
        </div>
    </div>
  );
};
export default CreateAccount;
