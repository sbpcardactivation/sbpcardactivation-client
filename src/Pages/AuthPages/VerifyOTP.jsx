import Image_Auth from "../../Assets(New)/Image_Auth.png";
import TextField from "@mui/material/TextField";

import "./Common.css";
import "../Home/CommonCSS/Common.css";
import { useHistory } from "react-router-dom";
import LogoFull from '../../Assets(New)/LogoFull.png'
import { useState } from "react";
import axios from 'axios'
import swal from 'sweetalert'
import { CircularProgress } from "@mui/material";


const Login = () => {

    const [otp, setOtp]=useState();
    const history = useHistory();
    let [submitButton, setSubmitButton]=useState("Reset OTP");

    function handleClick(e){
        e.preventDefault();
        // console.log(otp);
        setSubmitButton(<CircularProgress color="inherit" />)
        axios.post(`${process.env.REACT_APP_SERVER}/signupstep2`, {tempUserId: sessionStorage.getItem("tempUserId"), otp: otp})
        .then((response)=>{
            if (response.status === 200) {
                history.push("/signup/personalinformation");
            }else if (response.status === 202) {
                swal(`${response.data.message}`, " ", "error")
                setSubmitButton('Reset OTP')

            }
        })
    }


    return (
        <div className="authCommon">
            <div className="authBlock-image">
                <div className="welcomeLogo" onClick={()=>history.push('/')} >
                    <img src={LogoFull} alt="Logo" /> <p></p>
                </div>
                <img src={Image_Auth} alt="auth" className="authImage"/>
                <div className="authCopyright" ><p>&copy; Wiz Global Pay. All rights reserved.</p></div>
            </div>
            <div className="authBlock-content">
                <h2 className="authBlock-content-head">OTP Verification</h2>
                <form className="login-form">
                    <div className="auth-already" ><p>A Verification Code has been sent to your registered email address <br/><span style={{color: 'red'}} >Also check your spam/junk folder</span>.</p></div>
                    <div className="form-input">
                        <TextField
                            required
                            id="outlined-required"
                            label="Verify OTP"
                            defaultValue=""
                            fullWidth="true"
                            value={otp}
                            onChange={(e)=>setOtp(e.target.value)}
                        />
                    </div>

                    
                    <button className="auth-button" onClick={handleClick} >SIGNUP</button>
                    <div className="login-fp" >{submitButton}</div>

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
            <div className="authCopyright-mobile">
          <p>&copy; Wiz Global Pay. All rights reserved.</p>
        </div>
        </div>
    );
};
export default Login;
