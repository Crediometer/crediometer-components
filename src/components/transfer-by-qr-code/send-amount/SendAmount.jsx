import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./sendamount.css";
import Confirmation from "../../transferbwacct/confirmation/Confirmation";


const SendAmount = () => {
    var a;
    const handleClick = () => {
        if(a===1){
            var element = document.getElementById("confirmation");
            element.classList.add('show-confirmation');
            document.getElementById("confirmation").style.display='inline';
            document.getElementById("send-amount-page").style.display="none";
            return a=0;
        }else{
            document.getElementById('confirmation').style.display='none';
            return a=1;
        }
    }
    return (
        <div>
            <div className="container send-amount-page" id="send-amount-page">
                <div className="col">
                    <div className="col-md-10 col-sm-10 col-xs-10">
                        <div className="mt-5 pt-5 input-group input-group-lg">
                            <input 
                                    type="text" 
                                    className="form-control mt-5 input-form-send-amount" 
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="Enter amount"
                            />
                        </div>
                        <button onClick={handleClick} className="btn btn-primary px-5 transfer-btn-send-amount">
                            Transfer Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="confirmation" id="confirmation">
                <Confirmation/>
            </div>
        </div>
    )
}

export default SendAmount
