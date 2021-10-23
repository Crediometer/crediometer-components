import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./TransferBwAcct.css";
import Verification from './verification/Verification';

const TransferBwAcct = () => {

    var a;
    const handleClick = () => {
        if(a===1){
            var element = document.getElementById("verification");   
            element.classList.add("show-verification");
            document.getElementById("verification").style.display='inline';
            document.getElementById("transfer-bw-acct").style.display="none";
            return a=0;
        }else{
            document.getElementById("verification").style.display="false";
            return a=1;
        }
    }

    return (
        <div>
            <div id="transfer-bw-acct" className="container mt-5 pt-5 transfer-bw-acct" style={{background: "#ffffff"}}>
                    <div className="col">
                        <div className="col-md-10 col-xs-10 col-sm-10">
                            <div className="input-group input-group-lg">
                                <input 
                                    type="text" 
                                    className="form-control input-form" 
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="Amount"
                                />
                            </div>
                            <div className="mt-5 input-group input-group-lg">
                                <input 
                                    type="text" 
                                    className="form-control input-form" 
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="To: CredioCash"
                                />
                            </div>
                            <button onClick={handleClick} className="btn btn-primary px-5 transfer-btn">
                                Transfer Now
                            </button>
                        </div>
                    </div>
            </div>
            <div className="verification" id="verification">
                <Verification />
            </div>
        </div>
    )
}

export default TransferBwAcct;
