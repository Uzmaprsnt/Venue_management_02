import React from 'react'
import "./Home.css";
import { RiHome3Fill } from "react-icons/ri";
import { RiUserFill } from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { MdIncompleteCircle } from "react-icons/md";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
           <div className="_01">
              <div class="venuemanagement">venuemanagement</div>
              <div className="options">
                <div className="home_vector">
                 <div><RiHome3Fill color="grey" size={15} /></div> 
                  <span className="Home">Home</span>
                </div>
                <div className="package_vector">
                  <div><RiUserFill color="grey" size={15} /></div>
                  <span className="Packages">Packages</span>
                </div>
                <div className="companies_vector">
                  <div><BsTag color="grey" /></div>
                  <span className="Companies" style={{marginLeft:"10px"}}>Companies</span>
                </div>
                <div className="venues_vector">
                  <div><BiWalletAlt color="grey" /></div>
                  <span className="Venues">Venues</span>
                </div>
                <div className="enquires_vector">
                 <div> <MdIncompleteCircle color="grey" /></div>
                  <span className="Enquires">Enquires</span>
                </div>
              </div>
              <div class="Rectangle-37">
                <div className="center">Help Center</div>
              </div>
            </div>
    </div>
  )
}

export default Sidebar
