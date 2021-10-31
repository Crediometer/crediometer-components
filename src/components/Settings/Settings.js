import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../navbar/Sidebar";
// import Topbar from "../Topbar/Topbar";

const containerStyle = {
  backgroundColor: "white",
  height: "100%",
};

const Settings = () => {
  return (
    <div>
    {/* <Topbar></Topbar> */}
      <div className="row">
        {/* <div className="col-md-1 col-sm-2">
          <Sidebar></Sidebar>
        </div> */}
        <div className="col-md-11 col-sm-9 mt-5">
          {/* <div className="d-flex">
            <div className="mx-3 my-5">
              <Searchbar />
            </div>
            <FontAwesomeIcon className="fs-5 my-5" icon={faBell} />
          </div> */}
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a
                style={{ backgroundColor: "#982C31" }}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                General
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bank Accounts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                API
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Web Hooks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Account Settings
              </a>
            </li>
          </ul>
          {/* personal information */}
          <div className="d-flex justify-content-between m-3">
            <div>
              <h5>Personal Information</h5>
            </div>
            <div>
              <button
                style={{ backgroundColor: "#982C31" }}
                className="btn text-white mx-1"
              >
                Save
              </button>
            </div>
          </div>
          <hr />
          <form>
            <div className="d-flex justify-content-between">
              <div className="mb-3 me-5">
                <label className="form-label">First Name</label>
                <input size="60" type="text" className="form-control" />
              </div>
              <div className="mb-3 ms-5">
                <label className="form-label">Last Name</label>
                <input size="60" type="text" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="number" className="form-control" />
            </div>
            <label className="form-label">Password</label>
            <br />
            <button
              type="submit"
              style={{ backgroundColor: "#982C31" }}
              className="text-white btn"
            >
              Change Password
            </button>
          </form>
          <hr />
          {/* business information */}
          <div className="d-flex justify-content-between mt-5">
            <div>
              <h5>Business Information</h5>
            </div>
            <div>
              <button
                style={{ backgroundColor: "#982C31" }}
                className="btn text-white mx-1"
              >
                Save
              </button>
            </div>
          </div>
          <hr />
          <div className="row d-flex align-items-center mx-5 mb-5">
            <div className="col-md-6">
              <form>
                <div className="d-flex">
                  <div className="mb-3 me-5">
                    <label className="form-label">Business Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3 ms-5">
                    <label className="form-label">Business Phone</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="mb-3 me-5">
                    <label className="form-label">Business Email</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="mb-3 ms-5">
                    <label className="form-label">Business Address</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="mb-3 me-5">
                    <label className="form-label">Support Email</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="mb-3 ms-5">
                    <label className="form-label">Support Phone</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="mb-3 me-5">
                    <label className="form-label">Country</label>
                    <input
                      type="number"
                      placeholder="Nigeria"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 ms-5">
                    <label className="form-label">Chargeback Email(s)</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 text-center">
              <p>Upload Business Logo</p>
              <button
                style={{ backgroundColor: "#982C31" }}
                className="btn btn-primary"
              >
                Upload Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
