import React from "react";
import Welcome from "./Home/Welcome/Welcome";
  // eslint-disable-next-line
  import WhatIs from "./components/WhatIs";
  // eslint-disable-next-line
  import Actions from "./components/Actions";
  
  // eslint-disable-next-line
  import FeaturedIn from "./components/FeaturedIn";
  // eslint-disable-next-line
  import Reviews from "./components/Reviews";
  // eslint-disable-next-line
  import Founder from "./components/Founder";
  // eslint-disable-next-line
import Contact from "./components/Contact";
// eslint-disable-next-line
import Footer from "./components/Footer";

// eslint-disable-next-line
import BitcoinHome from "../Assets/BitcoinHome.png"
// eslint-disable-next-line
import Phone from "./components/Phone"
// eslint-disable-next-line
import TelegramFollow from "./components/TelegramFollow";
// eslint-disable-next-line
import PaymentSecure from "../Assets/PaymentSecured.jpeg"

// eslint-disable-next-line
import TelegramImage from "../Assets/TelegramImage.png"
import WhatsappImage from "../Assets/WhatsAppLogo.png"
// eslint-disable-next-line
import WhereWeInvest from "./HomeComponents/WhereWeInvest";
// eslint-disable-next-line
import ProfitPercentage from "./HomeComponents/ProfitPercentage";
import Security from "./Home/Security/Security"
import Seamless from "./Home/Seamless/Seamless";
import Decentralized from "./Home/Decentralized/Decentralized";
import Accessibility from "./Home/Accessability/Accessability";
import TrustedNetwork from "./Home/TrustedNetwork/TrustedNetwork";

import ContactUs from "./Home/ContactUs/ContactUs";

export default function Home() {
    return (
        <div style={{ "width": "100%" }} >


            <Welcome />
            {/* <TelegramFollow/> */}



            <Security/>
            <Seamless/>
            <Decentralized/>
            <Accessibility/>
            <TrustedNetwork/>
            <ContactUs/>

            {/* <WhatIs /> */}
            {/* <FeaturedIn /> */}
            {/* <Phone /> */}
            {/* <Actions /> */}

            {/* <Reviews /> */}

            {/* <WhereWeInvest/> */}
            {/* <ProfitPercentage/> */}
            {/* <Founder /> */}
            {/* <Contact /> */}
            {/* <Footer/> */}
            <a href="https://t.me/swiftbusinesspaypro" target="_blank" rel="noreferrer" >

                <img src={TelegramImage} alt="TelegramImage" style={{ "position": "fixed", "bottom": "50", "right": "0", "width": "80px", "margin": "0 15px 100px 0", }} />
            </a>
            <a href="https://wa.me/+19148391269" target="_blank" rel="noreferrer" >

                <img src={WhatsappImage} alt="TelegramImage" style={{ "position": "fixed", "bottom": "0", "right": "0", "width": "80px", "margin": "0 15px 15px 0", }} />
            </a>

            {/* <div style={{'width':'100%', 'display':'flex', 'alignItems':'center', 'justifyContent':'center'}} >
                <img src={BitcoinHome} alt='BitcoinHome' style={{'width':'20%'}}/>
            </div> */}
            {/* <img src={PaymentSecure} alt="paymentSecure" style={{ "width": "100%" }} /> */}

        </div>
    );
}