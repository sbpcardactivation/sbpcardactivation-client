import "./Welcome.css"
import LogoFull from '../../../Assets(New)/LogoFull.png'

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useHistory} from 'react-router-dom'

const Welcome=()=>{

  const history=useHistory();
  return(
    <div className="welcome" id="welcomeMain">
      <div className="welcomeLogo" >
        <img src={LogoFull} alt='Logo' /> <p></p>
      </div>
      <div className="welcomeSubhead">WELCOME TO</div>
      <div className="welcomeHead" >Wiz Global Pay</div>
      <div className="welcomeSubhead2" >
      We are world’s one of the most trusted and instant crypto transfer platform
      <br/>
      Be a part of the community. Join us
      </div>
      <div className="welcomeButtons" >
        <button onClick={()=>history.push('/signup')} >Sign Up <ArrowForwardIcon/></button>
        <button onClick={()=>history.push('/login')} >Log In <ArrowForwardIcon/></button>
      </div>
    </div>

  )
}
export default Welcome;