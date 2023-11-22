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
      <div>
      <button onClick={()=>{
                  window.scrollTo({top: 0, behavior: "smooth"})
                }} >Get Started <ArrowForwardIcon/></button>
      </div>
      <a className="contactSocial" href="https://t.me/swiftbusinesspaypro" target="_blank" rel="noreferrer">
        <div className="contactSocialIcon">
          <TelegramIcon fontSize="inherit"  />
        </div>
        <a className="contactSocialIcon" href="https://wa.me/+19148391269" target="_blank" rel="noreferrer">
          <WhatsAppIcon fontSize="inherit" />
        </a>
        <a className="contactSocialIcon" href="mailto: zonalteam.swiftbusinesspay@gmail.com" target="_blank" rel="noreferrer">
          <MailOutlineIcon fontSize="inherit" />
        </a>
      </a>
      <p className="contactCopyright">
        &copy; Swift Business Pay. All rights reserved.
      </p>
    </div>
  );
};
export default ContactUs;
