import Image_Auth from "../../Assets(New)/Image_Auth.png";
import TextField from "@mui/material/TextField";
import "./Common.css";
import "../Home/CommonCSS/Common.css";
import { useHistory } from "react-router-dom";
import LogoFull from "../../Assets(New)/LogoFull.png";
import { CountryDropdown } from "react-country-region-selector";
import {useState, useEffect} from 'react'
import swal from 'sweetalert'
import axios from 'axios'
import { CircularProgress } from "@mui/material";


const PersonalInformation = () => {
  const history = useHistory();

  let [fName, setFName] = useState("");
  let [lName, setLName] = useState("");
  let [dob, setDob] = useState("");
  let [address, setAddress] = useState("");
  let [postalCode, setPostalCode] = useState("");
  let [country, setCountry] = useState("");
  let [mobile, setMobile]=useState("");
  let [submitButton, setSubmitButton]=useState("Submit");

  let tempUserId = sessionStorage.getItem("tempUserId");
  // eslint-disable-next-line
  let [image, setImage] = useState();
  // eslint-disable-next-line
  let [Id, setId] = useState();
  // eslint-disable-next-line
  let [postImageBase64, setPostImageBase64] = useState();

  function handleClick(e) {
    e.preventDefault();
    //Createing new form data
    const data = new FormData();
    setSubmitButton(<CircularProgress color="inherit" />)
    //Apending the image to image json "image is name for the image input" json that is sent is {image: "theImage"}
    data.append("tempUserId", tempUserId);
    data.append("fName", fName);
    data.append("lName", lName);
    data.append("dob", dob);
    data.append("address", address);
    data.append("postalCode", postalCode);
    data.append("country", country);
    data.append("image", image);
    data.append("Id", Id);
    data.append("mobile", mobile);

    axios
      .post(`${process.env.REACT_APP_SERVER}/signupstep3`, data)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.clear();
          history.push("/signup/requestsent");
        } else if (response.status === 202) {
          swal(`${response.data.message}`, "", "error");
          setSubmitButton('Submit')
        }
      });
  }

  useEffect(()=>{
    setFName(JSON.parse(localStorage.getItem("tempData")).fName)
    setLName(JSON.parse(localStorage.getItem("tempData")).lName)
  },[])

  return (
    <div className="authCommon">
      <div className="authBlock-image">
        <div className="welcomeLogo" onClick={() => history.push("/")}>
          <img src={LogoFull} alt="Logo" /> <p></p>
        </div>
        <img src={Image_Auth} alt="auth" className="authImage" />
        <div className="authCopyright">
          <p>&copy; Wiz Global Pay. All rights reserved.</p>
        </div>
      </div>
      <div className="authBlock-content">
        <h2 className="authBlock-content-head">Additional Details</h2>
        <form className="login-form">
          {/* <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="First Name"
              defaultValue=""
              fullWidth="true"
              type="text"
              value={fName}
              onChange={(e)=>setFName(e.target.value)}
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
              onChange={(e)=>setLName(e.target.value)}
            />
          </div> */}
          <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="Mobile Number"
              defaultValue=""
              fullWidth="true"
              type="text"
              value={mobile}
              onChange={(e)=>setMobile(e.target.value)}
            />
          </div>
          <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="Date of Birth"
              defaultValue=""
              fullWidth="true"
              type="date"
              value={dob}
              onChange={(e)=>setDob(e.target.value)}
            />
          </div>
          <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="Address"
              defaultValue=""
              fullWidth="true"
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
            />
          </div>
          <div className="form-input">
            <TextField
              required
              id="outlined-required"
              label="Zip Code"
              defaultValue=""
              fullWidth="true"
              type="number"
              value={postalCode}
              onChange={(e)=>setPostalCode(e.target.value)}
            />
          </div>
          
          <div className="form-input">
            <CountryDropdown
              value={country}
              onChange={(val) => setCountry(val)}
            />
          </div>
          <button className="auth-button" onClick={handleClick} >{submitButton}</button>
          <div className="login-fp">Forgot Password?</div>

          <div className="auth-already">
            <p>
              Don't have an account?{" "}
              <a href="##" onClick={() => history.push("/signup")}>
                Signup
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="authCopyright mob">
      </div>
      <div className="authCopyright-mobile">
          <p>&copy; Wiz Global Pay. All rights reserved.</p>
        </div>
    </div>
  );
};
export default PersonalInformation;
