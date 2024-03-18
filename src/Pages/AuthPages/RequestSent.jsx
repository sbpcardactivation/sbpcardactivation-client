import "../Home/Welcome/Welcome.css"
import LogoFull from '../../Assets(New)/LogoFull.png'

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useHistory} from 'react-router-dom'


const RequestSent = () => {

    const history=useHistory();

  return (
    <div className="welcome">
      <div className="welcomeLogo">
        <img src={LogoFull} alt="Logo" /> <p></p>
      </div>
      <div className="welcomeSubhead2" >
        <h2>Request Sent! ✅</h2>
        <br/>
        Your registration request has sent successfully, and is now waiting for administrator approval. As soon as your request is approved you will receive a confirmation mail.
      </div>
      <div className="welcomeButtons">
        <button onClick={() => history.push("/")}>
          Go Home<ArrowForwardIcon />
        </button>
        <button onClick={() => history.push("/login")}>
          Log In <ArrowForwardIcon />
        </button>
      </div>
      <div className="authCopyright-mobile">
          <p>&copy; Bitcoin Payment Bank. All rights reserved.</p>
        </div>
    </div>
  );
};
export default RequestSent;
