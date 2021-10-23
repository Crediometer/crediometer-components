import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./sidebar.css";
import blackn from "../../assests/blackn.png";
import SavingCard from "../saving-card/SavingCard";
import CredioCard from "../credio-card/CredioCard";
import Payment from "../payment/Payment";


const Sidebar1 = () => {
  return (
    <Router>
    <Route path="/transactions" component={CredioCard} />
    <Route path="/transfers" component={SavingCard} />
    <Route path="/balance" component={Payment} />

    <div>
      <nav class="main-menu">
        <div>
          <a class="logo" href="http://startific.com"></a>
        </div>
        <div class="settings"></div>
        <div class="scrollbar" id="style-1">
          <ul>
            <li>
                <Link to="/transactions">
                <div className="icon">
                <i class="far fa-circle"></i>
                    <img src={blackn} alt="" style={{
                        position: "absolute",
                        left: "21px",
                        top: "10px",
                        width: "15px",
                        height: "12px"
                    }} />
                </div>
                <span class="nav-text">CredioCash</span>
              </Link>
            </li>

            <li>
                <Link to="/customers">
                <div className="icon">
                    <i class="far fa-circle"></i>
                    <img src={blackn} alt="" style={{
                        position: "absolute",
                        left: "21px",
                        top: "10px",
                        width: "15px",
                        height: "12px",
                      }} 
                    />
                </div>
                <span class="nav-text">NairaCard</span>
              </Link>
            </li>

            <li>
                <Link to="/balance" >
                <div className="icon">
                <i class="far fa-circle"></i>
                    <i class="fas fa-dollar-sign" style={{
                      fontSize: "20px",
                      position: "absolute",
                      left: "2px",
                      top: "10px",
                      color: "black"
                    }}></i>
                </div>
                <span class="nav-text">DollarCard</span>
              </Link>
            </li>
            <li>
                <Link to="/transfers">
                  <div className="icon">
                    <i class="fas fa-money-check fa-lg"></i>
                  </div>
                <span class="nav-text">Savings</span>
              </Link>
            </li>
            <li>
              <Link to="/subaccounts">
                <div className="icon">
                  <i class="far fa-comment-dots fa-lg"></i>
                </div>
                <span class="nav-text">Dailogue</span>
              </Link>
            </li>
            
          </ul>
        </div>
        <ul class="logout">
          <li>
                <div className="icon">
                  <i class="fas fa-question-circle fa-lg"></i>
                </div>
              <span class="nav-text">Support</span>
          </li>
          <li>
            <Link to="/profile">
                <div className="icon">
                  <i class="fas fa-user fa-lg"></i>
                </div>
              <span class="nav-text">Profile</span>
            </Link>
          </li>
          <li>
                <div className="icon">
                  <i class="fas fa-sign-out-alt fa-lg"></i>                    
                </div>
              <span class="nav-text">Logout</span>
          </li>
        </ul>
      </nav>
    </div>
    </Router>
  );
};

export default Sidebar1;