import "./ContactUs.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <p className="contactSubHead">BE A PART OF THE COMMUNITY</p>
      <div className="contactHead">Contact Us</div>
      <div>
        <p className="contactAddress">
          Main Office: Falkenstrasse 14, 8024 Zürich, Switzerland <br />
          Contact us at: contact.mainoffice@gmail.com <br />
          <br />
          <br />
          Corporate Office: 535 Fahey Road Apt. 184, <br />
          New Austenview, Utah Contact us at: contact.corpoffice@gmail.com
          <br />
        </p>
      </div>
      <button>
        Get Started <ArrowForwardIcon />
      </button>
      <div className="contactSocial">
        <div className="contactSocialIcon">
          <TelegramIcon fontSize="inherit" />
        </div>
        <div className="contactSocialIcon">
          <WhatsAppIcon fontSize="inherit" />
        </div>
        <div className="contactSocialIcon">
          <MailOutlineIcon fontSize="inherit" />
        </div>
      </div>
      <p className="contactCopyright">
        &copy; Swift Business Pay. All rights reserved.
      </p>
    </div>
  );
};
export default ContactUs;
