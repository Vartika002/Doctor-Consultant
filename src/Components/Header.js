import React, { useState } from "react";
import logoImg from "../Assests/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Drawer } from "antd";
import { HiBars3CenterLeft } from "react-icons/hi2";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const style = {
    "@media (max-width: 500px)": {
      borderRadius: "25px",
    },
  };

  return (
    <div>
      <div className="header-container">
        <div className="header-nav">
          <HiBars3CenterLeft
            onClick={showDrawer}
            style={{ color: "#11e0c8" }}
            className="HiBars3CenterLeft"
          />
          <div className="logo">
            <img src={logoImg} alt="LogoImage" />
          </div>
          <nav>
            <Drawer
              title={<img rc={logoImg} alt="LogoImage" />}
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <p>Find a Doctor</p>
              <p>Video Consultant</p>
              <p>Lab Test</p>
              <p>Business Partner</p>
            </Drawer>
            <ul>
              <li>Find a Doctor</li>
              <li>Video Consultant</li>
              {/* <li>Lab Test</li> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lab Test
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* </div> */}
              <li>Business Partner</li>
            </ul>
          </nav>
          <div className="login-dropdown">
            <div className="login-color">
              <span>
                <i class="bi bi-person-fill"></i>
              </span>
              Login <i class="bi bi-chevron-down"></i>
            </div>
            <div className="dropdown-content">
              <div className="login-option">Patient</div>
              <div className="login-option">Doctor</div>
              <div className="login-option">Business Partner</div>
            </div>
          </div>
        </div>

        <div class="search-location-container">
          <div class="search-container searchHide">
            <div class="input-with-icon">
              <div class="search-icon">
                <i class="bi bi-search"></i>
              </div>
              <input type="text" placeholder="Search Location" />
            </div>
          </div>
          <div class="location-container ">
            <div class="input-with-icon smallScreenStyle">
              <div class="location-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <input
                type="text"
                placeholder="Search by Doctor"
                class="large-width "
                style={style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
