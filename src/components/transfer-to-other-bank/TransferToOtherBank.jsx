import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./transfertootherbank.css";
import Confirmation from "../transferbwacct/confirmation/Confirmation";


const TransferToOtherBank = () => {
    var a;
    const handleClick = () => {
        if(a===1){
            var element = document.getElementById("confirmation");
            element.classList.add('show-confirmation');
            document.getElementById("confirmation").style.display='inline';
            document.getElementById("transfer-to-other-bank-page").style.display='none';
            return a=0;
        }else{
            document.getElementById("confirmation").style.display='none';
            return a=1;
        }
    }
    return (
        <div>
            <div className="container pt-5 mt-5 transfer-to-other-bank-page" id="transfer-to-other-bank-page">
                <div className="col">
                    <div className="col-md-10 col-sm-10 col-xs-10">
                        <div className="input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control other-bank-form" 
                                aria-label="Large" 
                                aria-describedby="inputGroup-sizing-sm" 
                                placeholder="Enter Amount"
                            />
                        </div>
                        <div className="mt-5 input-group input-group-lg">
                            <div className="col-md-10 col-sm-10 col-xs-10">
                                <select class="custom-select bank-select" id="inputGroupSelect01">
                                    <option selected>Select Bank</option>
                                    <option value="1">Nigeria</option>
                                    <option value="2">Access Bank</option>
                                    <option value="3">FCMB</option>
                                    <option value="4">Polaris Bank</option>
                                    <option value="5">Providus</option>
                                    <option value="6">GT Bank</option>
                                    <option value="7">Heritage Bank</option>
                                    <option value="8">Union Bank</option>
                                    <option value="9">WEMA Bank</option>
                                    <option value="10">Zenith Bank</option>
                                    <option value="11">Unity Bank</option>
                                    <option value="12">Kudo Micro Finance Bank</option>
                                    <option value="12">PayCom Bank</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-5 input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control other-bank-form" 
                                aria-label="Large" 
                                aria-describedby="inputGroup-sizing-sm" 
                                placeholder="Enter Account Number"
                            />
                        </div>
                        <div className="mt-5 input-group input-group-lg">
                            <input 
                                type="text" 
                                className="form-control other-bank-form" 
                                aria-label="Large" 
                                aria-describedby="inputGroup-sizing-sm" 
                                placeholder="Account holder name"
                            />
                        </div>
                        <button onClick={handleClick} className="btn btn-primary px-5 transfer-btn-other-bank">
                            Send Now
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

export default TransferToOtherBank
