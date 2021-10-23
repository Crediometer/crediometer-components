import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./crediocard.css";

const CredioCard = () => {
    return (
        <div>
            <div className="container-fluid pt-5 px-lg-5 mx-auto credio-card-container">
                <div className="row">
                    <div className="mt-3 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card credio-card" style={{
                                background: "pink"
                            }}>
                            <div className="card-body">
                                <h3 className="card-title pt-3 px-2 credioCardHeading">
                                    Lock/Unlock Card
                                </h3>
                                <button type="button" className="btn viewMore" style={{
                                    background: "#fd79a8"
                                }}>
                                    View More
                                </button>
                                <i class="fas fa-lock cardi"></i>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card credio-card" style={{
                                background: "rgba(66,207,199,0.49)"
                            }}>
                            <div className="card-body">
                                <h3 className="card-title pt-3 px-2 credioCardHeading">
                                    Change Pin
                                </h3>
                                <button type="button" className="btn viewMore" style={{
                                    background: "#81ecec"
                                }}>
                                    View More
                                </button>
                                <i class="fas fa-key cardi"></i>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card credio-card" style={{
                                background: "rgba(65, 147, 58, 0.43)"
                            }}>
                            <div className="card-body">
                                <h3 className="card-title pt-3 px-2 credioCardHeading">
                                    Block Card
                                </h3>
                                <button type="button" className="btn viewMore" style={{
                                    background: "#eccc68"
                                }}>
                                    View More
                                </button>
                                <i class="fas fa-times-circle cardi"></i>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card credio-card" style={{
                                background: "rgba(58, 72, 147, 0.43)"
                            }}>
                            <div className="card-body">
                                <h3 className="card-title pt-3 px-2 credioCardHeading">
                                    Request New Card
                                </h3>
                                <button type="button" className="btn viewMore" style={{
                                    background: "#a29bfe"
                                }}>
                                    View More
                                </button>
                                <i class="far fa-credit-card cardi"></i>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 mb-5 col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <div className="card credio-card" style={{
                                background: "rgba(190, 72, 72, 0.56)"
                            }}>
                            <div className="card-body">
                                <h3 className="card-title pt-3 px-2 credioCardHeading">
                                    Activate Card
                                </h3>
                                <button type="button" className="btn viewMore" style={{
                                    background: "#ff5e57"
                                }}>
                                    View More
                                </button>
                                <i class="fas fa-check-circle cardi"></i>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default CredioCard
