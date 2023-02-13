import React from 'react';
import { MdSearch } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import "./Home.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
       <div className="header_background">
                <div class="Hello-Chaitanya">Hello Chaitanya</div>
                <div class="How-are-you-today">How are you today?</div>
                <div class="Search-BackgroundMask">
                 
                  <input type="search" class="Search88" placeholder="Search"/>
                  <MdSearch className="icon88" color="grey" size={20} />
                </div>

                <div className="bell">
                  <FaBell size={25} color="grey" />
                </div>
                <div className="chat_icon">
                  <BsChatText size={25} color="grey" />
                </div>
                <div className="Ellipse"></div>
                <div class="Ari-Berkumis">Ari Berkumis</div>
                <div class="Admin">Admin</div>
                <div class="Log-Out-BackgroundMask">
                  <span class="Log-out">Log out</span>
                </div>
              </div>
    </div>
  )
}

export default NavBar
