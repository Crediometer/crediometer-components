import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import logo from "../../assets/logo.png";
import dashboard from "./icons/dashboard_black_24dp.svg";
import transactions from "./icons/money_black_24dp.svg";
import customers from "./icons/transfer_within_a_station_black_24dp.svg";
import balance from "./icons/paid_black_24dp.svg";
import transfers from "./icons/description_black_24dp.svg";
import cards from "./icons/credit_card_black_24dp.svg";
import chargeBacks from "./icons//sync_alt_black_24dp.svg";
import store from "./icons/shopping_basket_black_24dp.svg";
import paymentLinks from "./icons/add_link_black_24dp.svg";
import paymentPlans from "./icons/account_balance_wallet_black_24dp.svg";
import invoices from "./icons/receipt_long_black_24dp.svg";
import documentation from "./icons/api_black_24dp.svg";
import settings from "./icons/settings_black_24dp.svg";
import logout from "./icons/logout_black_24dp.svg";


const Topbar = () => {
  return (
    <div>
      <nav class="navbar  sticky-top bg-dark">

          <div>
            <img alt="..." className="topbarLogo" src={logo}></img>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item active">
                <Link className="nav-link text-white" to="dashboard"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={dashboard}
                ></img></span>Dashboard <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={transactions}
                ></img></span>Transactions</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={customers}
                ></img></span>Customers</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={balance}
                ></img></span>Balance</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={transfers}
                ></img></span>Transfers</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={cards}
                ></img></span>Cards</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={chargeBacks}
                ></img></span>Charge Backs</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={store}
                ></img></span>Stores</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={paymentLinks}
                ></img></span>payment link</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={paymentPlans}
                ></img></span>payment plan</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={invoices}
                ></img></span>Invoices</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={settings}
                ></img></span>Settings</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={documentation}
                ></img></span>Documentation</Link>
              </li>
              <li class="nav-item">

                <Link className="nav-link text-white" to="#"> <span className="me-3">  <img
                  alt="dashboard icon"
                  src={logout}
                ></img></span>Log out</Link>
              </li>
            </ul>
          </div>

      </nav>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    </div>


  );
};

export default Topbar;
