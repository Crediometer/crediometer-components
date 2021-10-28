import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./failure.css";
import $ from "jquery";

const Failure = () => {
    var a;
    const handleClick = () => {
        if(a===1){
            document.getElementById("failure-card").style.display='inline';
            return a=0;
        }else{
            document.getElementById("failure-card").style.display='none';
            return a=1;
        }
    }

    return (
        <>
            <div onClick={handleClick} id='failure-card' className="container-fluid failure-card">
                <div className="col justify-content-center failure-col">
                    <i class="far fa-times-circle pt-4 failure-icon"></i>
                    <h2 className="failure-text">
                        Your Last transcation was cancelled.
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Failure;
