import Image_TrustedNetwork from "../../../Assets(New)/Image_TrustedNetwork.jpeg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "../CommonCSS/Common.css"

const TrustedNetwork=()=>{
    return(
        <div className="block1" id='trustedNetworkMain'>
            <div className="block1-image" >
              {/* <img src={Image_TrustedNetwork} alt="Decentralized" />   */}
            </div>
            <div className="block1-content">
                <p className="block1-content-subHead1" >FULL PROTECTION</p>
                <h2 className="block1-content-head">Trusted Networks</h2>
                <p className="block1-content-subHead2" >All transactions are done using trusted networks thus there is no chance of illegal activities or fund misplacing.</p>
                <button>Get Started <ArrowForwardIcon/></button>
            </div>
        </div>
    )
}   
export default TrustedNetwork;