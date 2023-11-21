import React from "react";
import Welcome from "./Home/Welcome/Welcome";
import WhatIs from "./components/WhatIs";
import Actions from "./components/Actions";

import FeaturedIn from "./components/FeaturedIn";
import Reviews from "./components/Reviews";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
// eslint-disable-next-line
import Footer from "./components/Footer";

import BitcoinHome from "../Assets/BitcoinHome.png"
import Phone from "./components/Phone"
// eslint-disable-next-line
import TelegramFollow from "./components/TelegramFollow";
import PaymentSecure from "../Assets/PaymentSecured.jpeg"

import TelegramImage from "../Assets/TelegramImage.png"
import WhereWeInvest from "./HomeComponents/WhereWeInvest";
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
            {/* <a href="https://t.me/swiftbusinesspaypro" target="_blank" rel="noreferrer" >

                <img src={TelegramImage} alt="TelegramImage" style={{ "position": "fixed", "bottom": "0", "right": "0", "width": "80px", "margin": "0 15px 15px 0", }} />
            </a>

            <div style={{'width':'100%', 'display':'flex', 'alignItems':'center', 'justifyContent':'center'}} >
                <img src={BitcoinHome} alt='BitcoinHome' style={{'width':'20%'}}/>
            </div> */}
            {/* <img src={PaymentSecure} alt="paymentSecure" style={{ "width": "100%" }} /> */}

        </div>
    );
}