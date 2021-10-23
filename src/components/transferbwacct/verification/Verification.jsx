import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Verification.css";
import Confirmation from '../confirmation/Confirmation';

const Verification = () => {

    var a;
    const handleClick = () => {
        if(a===1){
            var element = document.getElementById("confirmation");
            element.classList.add("show-confirmation");
            document.getElementById("confirmation").style.display='inline';
            document.getElementById("verification-page").style.display='none';
            return a=0;
        }else{
            document.getElementById("confirmation").style.display='none';
            return a=1;
        }
    }

    return (
        <div>
            <div id="verification-page" className="container mt-5 pt-5 verification-page" style={{background: "#ffffff"}}>
                    <div className="col">
                        <div className="col-md-10 col-xs-10 col-sm-10">
                            <div className="input-group input-group-lg">
                                <input 
                                    type="text" 
                                    className="form-control input-verify" 
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="Account Name"
                                />
                            </div>
                            <div className="mt-5 input-group input-group-lg">
                                <input 
                                    type="text" 
                                    className="form-control input-verify" 
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="Bank name"
                                />
                            </div>
                            <div className="mt-5 input-group input-group-lg">
                                <input 
                                    type="text" 
                                    className="form-control input-verify" 
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="Account Number"
                                />
                            </div>
                            <div className="mt-5 input-group input-group-lg">
                                <input 
                                    type="text" 
                                    className="form-control input-verify" 
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    placeholder="Amount"
                                />
                            </div>
                            <button onClick={handleClick} className="btn btn-primary px-5 confirm-btn">
                                Confirm
                            </button>
                        </div>
                    </div>
            </div>
            <div className="confirmation" id="confirmation">
                <Confirmation />
            </div>
        </div>
    )
}

export default Verification
