import React from "react";
import "../css/ActiveDebitCard.css"

import ActiveCards from "./components/ActiveCards";

import Classic from "../Assets(New)/Cards/DemoClassicMasterCard.png"
import Merhchant from "../Assets(New)/Cards/DemoMerchantMasterCard.png"
import Prime from "../Assets(New)/Cards/DemoPrimeMasterCard.png"
// eslint-disable-next-line
import Titanium from "../Assets(New)/Cards/DemoTitaniumMasterCard.png"
import WorldElite from "../Assets(New)/Cards/DemoWorldEliteMasterCard.png"
import ParticleAnimation from "./components/ParticleAnimation"

import MoneyBack from "../Assets/MoneyBack.png"
// eslint-disable-next-line
import PaymentSecured from "../Assets/PaymentSecured.jpeg"
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ActiveDebitCard() {
    let history = useHistory();
    axios.post(`${process.env.REACT_APP_SERVER}/getcarddetails`, { userId: JSON.parse(localStorage.getItem("data")).userId },
        {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(async (response) => {
            // await console.log(response.data)
            await localStorage.setItem("card", JSON.stringify(response.data));

        })

    return (
        <div className="activeDebitCard" >
            <div className="backButton" style={{ "fontSize": "50px", "color": "#DF2D07" }} >
                <i class="fas fa-chevron-circle-left" onClick={() => history.goBack()} />
            </div>
            <ParticleAnimation />

            <h1 style={{ "textAlign": "center", "width": "100%" }} >Activate Debit Card</h1>
            <br />
            <div className="moneyBack" >

                <img src={MoneyBack} alt="MoneyBack" />
                <p>100% Money back gurantee within 30 days.</p>
            </div>
            <hr />
            <br />
            <div>
                <ActiveCards
                    cardName="Merchant MasterCard"
                    image={Merhchant}
                    amount="50"
                    limit="1000"
                    name="merchant"
                    route="/merchantmastercard"
                />
                <ActiveCards
                    cardName="World Elite MasterCard"
                    image={Classic}
                    amount="200"
                    limit="5000"
                    name="worldElite"
                    route="worldelitemastercard"
                />
                <ActiveCards
                    cardName="Classic MasterCard"
                    image={Prime}
                    amount="500"
                    limit="25000"
                    name="classic"
                    route="/classicmastercard"
                />
                <ActiveCards
                    cardName="Prime MasterCard"
                    image={WorldElite}
                    amount="1000"
                    limit="100000"
                    name="prime"
                    route="/primemastercard"
                />
                {/* <ActiveCards
                    cardName="Titanium MasterCard"
                    image={Titanium}
                    amount="2000"
                    limit="1000000"
                    name="titanium"
                    route="/titaniummastercard"
                /> */}
            </div>
            {/* <div className="secureImageActiveDebitCard" style={{ "width": "100%", "textAlign": "center" }} >

                <img src={PaymentSecured} alt="PaymentSecured" />
            </div> */}
        </div>
    )
}