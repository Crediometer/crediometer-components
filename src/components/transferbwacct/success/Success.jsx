import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./success.css";

const Success = () => {

    var a;
    const handleClick = () => {
        if(a===1){
            document.getElementById("success-card").style.display='inline';
            return a=0;
        }else{
            document.getElementById("success-card").style.display='none';
            return a=1;
        }
    }

    return (
        <>
            <div onClick={handleClick} id='success-card' className="container-fluid success-card">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="col justify-content-center success-col">
                        <i class="far fa-check-circle success-icon pt-4"></i>
                        <h2 className="success-text">
                            The amount has been sent successfully to the account.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success;
