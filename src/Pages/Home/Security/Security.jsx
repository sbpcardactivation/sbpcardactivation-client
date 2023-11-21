import Security_Image from "../../../Assets(New)/Image-Security.jpeg"
import TrustPilot from "../../../Assets(New)/Trust-Pilot.svg"

import "../CommonCSS/Common.css"

const Security=()=>{
    return(
        <div className="block1" id='securityMain' >
            <div className="block1-image" >
              {/* <img src={Security_Image} alt="Security" />   */}
            </div>
            <div className="block1-content">
                <p className="block1-content-subHead1" >#1 TRUSTED WALLET</p>
                <h2 className="block1-content-head">Security</h2>
                <p className="block1-content-subHead2" >We are known for our top notch security and trust among our customers. With a Trust Pilot rating of 4.7 stars,  we are trusted by millions.</p>
                <img src={TrustPilot} alt="TrustPilot" />
                <p className="trustPilot-score" >Excellent Score: 4.7</p>
            </div>
        </div>
    )
}   
export default Security;