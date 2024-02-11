import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import near from '../img/near-input.png'
import reapeat from '../img/repeat.png'
import question from '../img/question-mark.png'
import thpay from '../img/thpay.png'

import {
  faCreditCard,
  faArrowUpRightFromSquare,
  faChartColumn,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

import "./main.css";

const main = () => {
  return (
    <div className="main-container">
      <div className="part-1">
        <div className="hpay-exchange">
          <h2>HPAY | Exchange</h2>
          <ul>
            <li>
              <div className="li-contianer">
                <div className="f-icon">
                  <FontAwesomeIcon icon={faCreditCard} />
                </div>
                <div className="text-first">Buy HedgePay</div>
                <div className="arrow-first">&#10095;</div>
              </div>
            </li>

            <li>
              <div className="li-contianer">
                <div className="font-icon">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
                <div className="text">Transfer Gateway</div>
                <div className="arrow">&#10095;</div>
              </div>
              {/* <i className="icon-exchange"></i> Transfer Gateway */}
            </li>
            <li>
              <div className="li-contianer">
                <div className="font-icon">
                  <FontAwesomeIcon icon={faChartColumn} />
                </div>
                <div className="text">View Chart</div>
                <div className="arrow">&#10095;</div>
              </div>
            </li>

            <li>
              <div className="li-contianer">
                <div className="font-icon">
                  <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </div>
                <div className="text">Buy with Track</div>
                <div className="arrow">&#10095;</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="second-2">
        <div className="dex-container">
          <h1>Aggregator DEX</h1>
          <p className="dex-text">
            HedgePay's Aggregator DEX has the ability to track the best prices
            for the token you want on established Decentralized Exchanges. The
            HedgePay DEX will also provides you with the option to set limit
            orders, giving you the freedom hunt for the token you want at the
            price you want it.
          </p>
          <br></br>
          <div className="middle-button">
            <button className="first-button">Buy HedgePay</button>
            <button className="second">View Chart</button>
          </div>
        </div>
      </div>

      <div className="third">
        <div class="form-container">
          <div className="hearder-part">
            <small>Your Balance: $0.92</small>
            <h2>0.20115234 NEAR</h2>
          </div>

          <div className="Youpay">

            <p>You Pay</p>
            <p>3409.2419 THPAY/NEAR</p>

          </div>

          {/* <br /> */}

          <div className="input-image">
            {/* <input type="text" /> */}
            <img src={near} alt=""   height="30px" className=""/>

            
          </div>

          <div className="quesiont-mask">
            <img src={reapeat} alt="" className="circle" />
            <img src={question} alt="" />
          </div>

          <div className="thyap">
            <img src={thpay} height="30px" alt="" />
          </div>

      <div className="last-section">
          <input type="checkbox" id="terms" name="terms" className="check" />
   <p className="agree">I have read and agree with HedgePay Terms of Service.I
have done my research to make sure I am legally able to
purchase the token in my country of residence.</p> </div>
    <br />

     <button type="submit" className="swap-btn" >Swap</button>



        </div>
      </div>
    </div>
  );
};

export default main;