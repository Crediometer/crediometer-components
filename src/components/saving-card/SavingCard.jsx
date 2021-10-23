import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./savingcard.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TransferBwAcct from "../transferbwacct/TransferBwAcct";
import CardNo from "../transfer-by-cardno/CardNo";
import TransferToOtherBank from "../transfer-to-other-bank/TransferToOtherBank";
import QRCode from "../transfer-by-qr-code/QRCode";

const SavingCard = () => {
  var a;
  const handleClick = () => {
    if(a===1){
      document.getElementById("saving-card").style.display='inline';
      return a=0;
    }else{
      document.getElementById("saving-card").style.display='none';
      return a=1;
    }
  }



 return(
   <>
    <Router>
    <Route path="/transfer-bw-account" component={TransferBwAcct} />
    <Route path="/transfer-by-cardno" component={CardNo} />
    <Route path="/transfer-to-other-bank" component={TransferToOtherBank} />
    <Route path="/transfer-by-qrcode" component={QRCode} />
    <div id="saving-card" className="container-fluid mx-auto pt-5 px-lg-5 saving-card">
      <div className="row">
        <div className="mt-3 col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <Link to="/transfer-bw-account" style={{textDecoration: "none"}}>
          <div id="card-saving" className="card card-saving" onClick={handleClick} 
            style={{
              background: "pink",
            }}>
            <div className="card-body pt-4">
              <i class="fas fa-user-friends px-3"></i>
              <h4 className="card-title saving-card-heading pt-5">
                Transfer between Account
              </h4>
            </div>
          </div>
          </Link>
        </div>

        <div className="mt-3 col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <Link to="/transfer-by-cardno" style={{textDecoration: "none"}}>
          <div id="hide-cardno" className="card card-saving" onClick={handleClick} style={{
              background: "skyblue",
            }}>
            <div className="card-body pt-4">
              <i class="fas fa-credit-card px-3"></i>
              <h4 className="card-title pt-5 saving-card-heading">
                Transfer by Card Number
              </h4>
            </div>
          </div>
          </Link>
        </div>

        <div className="mt-3 col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <Link to="/transfer-to-other-bank" style={{textDecoration: "none"}}>
          <div className="card card-saving" onClick={handleClick} style={{
              background: "#786fa6",
            }}>
            <div className="card-body pt-4">
              <i class="fas fa-university px-3"></i>
              <h4 className="card-title pt-5 saving-card-heading">
                Transfer to the other Bank
              </h4>
            </div>
          </div>
          </Link>
        </div>

        <div className="pb-5 mt-3 col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <Link to="/transfer-by-qrcode" style={{textDecoration: "none"}}>
          <div className="card card-saving" onClick={handleClick} style={{
              background: "#487eb0",
            }}>
            <div className="card-body pt-4">
              <i class="fas fa-qrcode px-3"></i>
              <h4 className="card-title pt-5 saving-card-heading">
                Transfer by QRCode
              </h4>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
    </Router>
   </>
 ) 
}

export default SavingCard;