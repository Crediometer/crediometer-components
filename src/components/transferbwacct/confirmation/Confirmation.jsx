import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./confirmation.css";
import Success from '../success/Success';
import Failure from '../failure/Failure';

const Confirmation = () => {

    var a;
    const handleSuccess = () => {
        if(a===1){
            var element = document.getElementById("success");
            element.classList.add("show-success");
            document.getElementById("success").style.display="inline";
            document.getElementById("confirmation-page").style.display='none';
            return a=0;
        }else{
            document.getElementById("success").style.display='none';
            return a=1;
        }
    }

    var b;
    const handleFailure = () => {
        if(b===1){
            var ele = document.getElementById("failure");
            ele.classList.add("show-failure");
            document.getElementById("failure").style.display="inline";
            document.getElementById("confirmation-page").style.display='none';
            return b=0;
        }else{
            document.getElementById("failure").style.display='none';
            return b=1;
        }
    }

    return (
        <div>
            <div id="confirmation-page" className="container confimation-page">
                <div className="card confirmation-card">
                    <div className="col">
                        <div className="row pt-5 justify-content-center">
                            <i class="fas fa-user confirmation-icon"></i>
                            <i class="fas fa-exchange-alt px-5 confirmation-icon"></i>
                            <i class="fas fa-user-friends px-5 confirmation-icon"></i>
                        </div>
                        <h2 className="confirmation-head pt-5">Would you like to Transfer?</h2>
                        <div className="row confirmation-btn">
                            <button onClick={handleSuccess} type="button" class="btn btn-success">Yes</button>
                            <button onClick={handleFailure} type="button" class="btn btn-danger">No</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="success" id="success">
                <Success/>
            </div>
            <div className="failure" id="failure">
                <Failure/>
            </div>
        </div>
    )
}

export default Confirmation
