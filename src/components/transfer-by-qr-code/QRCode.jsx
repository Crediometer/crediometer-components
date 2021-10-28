import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./qrcode.css";
import Logo from "../../assests/Logo.png";
import QRCODE from "../../assests/QRCODE.svg";
import SendAmount from './send-amount/SendAmount';

const QRCode = () => {
    var a;
    const handleClick = () => {
        if(a===1){
            var element = document.getElementById("send-amount");
            element.classList.add("show-send-amount");
            document.getElementById("send-amount").style.display='inline';
            document.getElementById("qrcode-page").style.display='none';
            return a=0;
        }else{
            document.getElementById("send-amount").style.display='none';
            return a=1;
        }
    }
    return (
        <div>
            <div className="container pt-5 mt-5 qrcode-page" id="qrcode-page">
                <div className="col">
                    <div className="col-md-10 col-xs-10 col-sm-10">
                        <div className="row">
                            <img src={Logo} className="rounded float-left logo-img" alt="..."/>
                            <button onClick={handleClick} className="btn btn-danger pay-with">Pay with</button>
                        </div>
                        <div className="text-center">
                            <img src={QRCODE} className="rounded qrcode" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="send-amount" id="send-amount">
                <SendAmount/>
            </div>
        </div>
    )
}

export default QRCode
