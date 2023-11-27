import React from "react";
import "../../css/Payment.css"
// eslint-disable-next-line
import Prime from "../../Assets(New)/Cards/DemoPrimeMasterCard.png"
import World from "../../Assets(New)/Cards/DemoWorldEliteMasterCard.png"
// import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import ParticleAnimation from "../components/ParticleAnimation";

import { useHistory } from "react-router-dom";

export default function PrimeMasterCard() {
    let history =useHistory();
    return (
        <div className="payment" >

            <h2>Withdraw using Prime Master Card</h2>
            <ParticleAnimation/>
            <form style={{ "marginTop": "20px" }}className="withdrawalCardImage" >
                <br />
                <br />
                <img src={World} alt="PrimeMasterCard" />
                <input
                    type="text"
                    placeholder="First Name*"
                />
                <input
                    type="text"
                    placeholder="Last Name*"
                />
                <input
                    type="text"
                    placeholder="Email Address*"
                />
                <input
                    type="text"
                    placeholder="Phone*"
                />
                <input
                    type="text"
                    placeholder="Address*"
                />
                <input
                    type="text"
                    placeholder="Country*"
                />

                {/* <CountryDropdown
                    /> */}

                <button onClick={()=>{history.push("/bitcoinaccepted")}} >Proceed to Payment</button>
                <br />
                <br />
            </form>
        </div>
    )
}