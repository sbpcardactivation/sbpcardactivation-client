  // eslint-disable-next-line
import Image_Seamless from "../../../Assets(New)/Image-Seamless.jpeg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "../CommonCSS/Common.css"

const Seamless = () => {
    return (
        <div className="block1" id='seamlessMain'>
            <div className="block1-content">
                <p className="block1-content-subHead1">EASY ACCESS</p>
                <h2 className="block1-content-head">Seamless</h2>
                <p className="block1-content-subHead2">
                    Easy access to your Crypto wallet and seamless transactions in just a
                    few clicks with our user friendly interface
                </p>
                <button>Get Started <ArrowForwardIcon/></button>
            </div>
            <div className="block1-image">
                {/* <img src={Image_Seamless} alt="Security" /> */}
            </div>
        </div>
    );
};
export default Seamless;
