  // eslint-disable-next-line
import Image_Decentralized from "../../../Assets(New)/Image-Decentralized.jpeg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "../CommonCSS/Common.css"

const Decentralized=()=>{
    return(
        <div className="block1" id='decentralizedMain' >
            <div className="block1-image" >
              <img src={Image_Decentralized} alt="Decentralized" />  
            </div>
            <div className="block1-content">
                <p className="block1-content-subHead1" >VAULT PROTECTION</p>
                <h2 className="block1-content-head">Decentralized</h2>
                <p className="block1-content-subHead2" >For added protection your funds are safely stored in our decentralized crypto vaults to prevent from hacking or cyber attacks</p>
                <button onClick={()=>{
                  window.scrollTo({top: 0, behavior: "smooth"})
                }} >Get Started <ArrowForwardIcon/></button>
            </div>
        </div>
    )
}   
export default Decentralized;