import Image_Auth from "../../Assets(New)/Image_Auth.png";
import TextField from "@mui/material/TextField";

import "./Common.css";
import "../Home/CommonCSS/Common.css";
import { useHistory } from "react-router-dom";
import LogoFull from '../../Assets(New)/LogoFull.png'
import {useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { CircularProgress } from "@mui/material";


const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [submitButton, setSubmitButton]=useState("LOG IN");

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitButton(<CircularProgress color="inherit" />)
        const login = {
            "email": user,
            "password": password
        };
        // console.log(login);
        await axios.post(`${process.env.REACT_APP_SERVER}/login`, login)
            .then(async (response) => {
                // console.log(response.data);

                if (response.status === 200) {
                    // swal("Logged In", "Successfully Authorised", "success");
                    await localStorage.setItem("token", response.data.token);
                    await localStorage.setItem("data", JSON.stringify(response.data.user));
                    await localStorage.setItem("card", JSON.stringify(response.data.card));
                    history.push("/user/dashboard");
                    window.location.reload();
                } else if (response.status === 401) {
                    swal("Invalid credentials!", "Please try again with correct credentials.", "error");
                    // console.log(response.data);
                } else if (response.status === 202) {
                    swal(`${response.data.message}`, "", "error")
                } else {
                    swal("Error!", "Some unexpected error occurred.", "error")
                    // console.log(response.data);
                }
                setSubmitButton('LOG IN')
            });
    }

    return (
        <div className="authCommon">
            <div className="authBlock-image">
                <div className="welcomeLogo" onClick={()=>history.push('/')} >
                    <img src={LogoFull} alt="Logo" /> <p></p>
                </div>
                <img src={Image_Auth} alt="auth" className="authImage"/>
                <div className="authCopyright" ><p>&copy; Bitcoin Payment Bank. All rights reserved.</p></div>
            </div>
            <div className="authBlock-content">
                <h2 className="authBlock-content-head">Log In</h2>
                <form className="login-form">
                    <div className="form-input">
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            fullWidth="true"
                            value={user}
                            onChange={(e)=>setUser(e.target.value)}  
                        />
                    </div>

                    <div className="form-input">
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            defaultValue=""
                            fullWidth="true"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button className="auth-button" onClick={handleSubmit} >{submitButton}</button>
                    <div className="login-fp" onClick={()=>history.push('/forgotpassword')}>Forgot Password?</div>

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
          <p>&copy; Bitcoin Payment Bank. All rights reserved.</p>
        </div>
        </div>
    );
};
export default Login;
