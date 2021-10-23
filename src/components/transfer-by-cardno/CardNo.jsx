import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardno.css";
import Verification from "../transferbwacct/verification/Verification";


const CardNo = () => {
    var a;
    const handleClick = () => {
        if(a===1){
            const element = document.getElementById("verification");
            element.classList.add("show-verification");
            document.getElementById("verification").style.display='inline';
            document.getElementById("cardno-page").style.display='none';
            return a=0;
        }else{
            document.getElementById("verification").style.display='none';
            return a=1;
        }
    };
    return (
        <div>
            <div className='container mt-5 pt-5 cardno-page' id="cardno-page">
                <div className="col">
                    <div className="col-md-10 col-sm-10 col-xs-10">
                        <div className="input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control input-form" 
                                aria-label="Large" 
                                aria-describedby="inputGroup-sizing-sm" 
                                placeholder="Card Number"
                            />
                        </div>
                        <div className="mt-5 input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control input-form" 
                                aria-label="Large" 
                                aria-describedby="inputGroup-sizing-sm" 
                                placeholder="CVV number"
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

export default CardNo;
