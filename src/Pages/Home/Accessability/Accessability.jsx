import Image_Accessibility from "../../../Assets(New)/Image-Accessibility.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "../CommonCSS/Common.css"

const Accessibility = () => {
  return (
    <div className="block1" id='accessibilityMain'>
      <div className="block1-content">
        <p className="block1-content-subHead1">GLOBAL REACH</p>
        <h2 className="block1-content-head">Accessibility</h2>
        <p className="block1-content-subHead2">
          Our platform is renowned for its global 24/7 accessibility and low
          transaction fees for easy and simple transactions worldwide
        </p>
        <button>
          Get Started <ArrowForwardIcon />
        </button>
      </div>
      <div className="block1-image">
        <img src={Image_Accessibility} alt="Security" />
      </div>
    </div>
  );
};
export default Accessibility;
