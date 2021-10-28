import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";

const Payment = () => {
    return (
        <div>
            <div className="container-fluid px-5 payment-page">
                <div className="col">
                    <div className="pt-5 col-md-10 col-sm-12 col-xs-12">
                        <h1>Payment</h1>
                        <div className="card balance-card">
                            <div className="row px-4">
                                <div className="pt-3 col-md-6 col-sm-6 col-xs-6">
                                    <h5>Available Balance</h5>
                                    <h1>2,324,178.07</h1>
                                    <h3 className="view-detail">View Details</h3>
                                </div>
                                <div className="pt-3 col-md-6 col-sm-6 col-xs-6">
                                    <h5>Account Details</h5>
                                    <h1>2,324,178.07</h1>
                                    <h3 className="view-detail">View Details</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 from-to-export">
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="card from-card">
                                    <h5 className='pt-3 px-2'>From</h5>
                                    <div className="input-group input-group-sm">
                                        <input 
                                            type="text" 
                                            className="form-control date-input" 
                                            aria-label="Large" 
                                            aria-describedby="inputGroup-sizing-sm" 
                                            placeholder="mm/dd/yy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-xs-2 col-md-4 col-sm-12 col-xs-12">
                                <div className="card from-card">
                                    <h5 className='pt-3 px-2'>To</h5>
                                    <div className="input-group input-group-sm">
                                        <input 
                                            type="text" 
                                            className="form-control date-input" 
                                            aria-label="Large" 
                                            aria-describedby="inputGroup-sizing-sm" 
                                            placeholder="mm/dd/yy"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className=" pt-2 col-md-4 col-sm-12 col-xs-12">
                                <button className="btn btn-light">Export</button>
                            </div>
                        </div>
                        <h6 className="pt-3 operational-history">Operational History(3 of 8)</h6>
                        <div className="card mb-5 operational-card">
                            <div className="row">
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <span className="date">Date</span>
                                    <span className="to-from">To/From</span>
                                    <span className="method">Method</span>
                                    <span className="amount">Amount</span>
                                </div>
                            </div>
                            <hr className="line1"/>
                            <span className="today-date5">Oct 5</span>
                            <hr className="line2"/>
                            <span className="today-date6">Oct 6</span>
                            <hr className="line3"/>
                            <span className="today-date7">Oct 7</span>
                            <hr className="line4"/>
                            <span className="see-more">
                                See more<i class="fas fa-sort-down more-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
