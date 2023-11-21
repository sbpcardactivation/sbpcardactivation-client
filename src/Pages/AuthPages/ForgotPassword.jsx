import Image_Auth from "../../Assets(New)/Image_Auth.png";
import TextField from "@mui/material/TextField";

import "./Common.css";
import "../Home/CommonCSS/Common.css";
import { useHistory } from "react-router-dom";
import Logo from '../../Assets(New)/Logo.png'
import {useState} from 'react'
import axios from 'axios'
// import swal from 'sweetalert'
import { CircularProgress } from "@mui/material";

const ForgotPassword=()=>{

    let history = useHistory()
    let [email, setEmail] = useState();

    let [submitButton, setSubmitButton]=useState("Submit");
    function handleClick(e) {
        e.preventDefault();

        setSubmitButton(<CircularProgress color="inherit" />)
        axios.post(`${process.env.REACT_APP_SERVER}/handleotp`, { email: email },
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                setSubmitButton("Submit");
                sessionStorage.setItem("otpId", response.data.userId);
                history.push("/user/changepassword")
            })
    }

    return(
        <div className="authCommon">
            <div className="authBlock-image">
                <div className="welcomeLogo" onClick={()=>history.push('/')} >
                    <img src={Logo} alt="Logo" /> <p>Swift Business Pay</p>
                </div>
                <img src={Image_Auth} alt="auth" className="authImage"/>
                <div className="authCopyright" ><p>&copy; Swift Business Pay. All rights reserved.</p></div>
            </div>
            <div className="authBlock-content">
                <h2 className="authBlock-content-head">Reset Password</h2>
                <form className="login-form">
                    <div className="form-input">
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            fullWidth="true"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}  
                        />
                    </div>

                    
                    <button className="auth-button" onClick={handleClick} >{submitButton}</button>

                </form>
            </div>
            <div className="authCopyright mob" ><p>&copy; Swift Business Pay. All rights reserved.</p></div>
        </div>
    )
}
export default ForgotPassword;