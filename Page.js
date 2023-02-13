import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import "./Page.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
function Home() {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <NavBar/>
    <div style={{display:"flex"}}>
 <Sidebar/>
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          {/* <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
            
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-2 text-gred packages" style={{color:"black"}}>Packages</div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Student
              </Button>
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                
                </form>
              </div>    
             </div>
           </div>   */}
           <div className="upper-port2">
            <div className="packages">Packages</div>
            <div class="Log-Out-BackgroundMask2"><span class="Add-Packages">
  Add Packages
</span></div>
            <div class="Search-BackgroundMask">
                 
                 <input type="search" class="Searchin" placeholder="Search"/>
                 <MdSearch className="icon2" color="grey" size={20} />
               </div>
           </div>
            <div class="row">
                <div class="table-responsive " >
                 <table class="table  table-hover ">
                    <thead>
                        <tr>
                            <th >Package</th>
                            <th>Hall </th>
                            <th>Software Model</th>
                            <th>Access </th>
                            <th>Amount </th>
                            <th>Date </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="the_20">
                            <td>Gold</td>
                            <td>7</td>
                            <td>Booking</td>
                            <td>6</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                           
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip">
                                    <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span>
                                    
                                </a>
                                
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={22}   color="red"/></a>
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>Silver</td>
                            <td>2</td>
                            <td>Booking</td>
                            <td>3</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                           
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
                         
 
                        <tr className="the_20">
                            <td>Gold</td>
                            <td> 7</td>
                            <td>Booking</td>
                            <td>6</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                         
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
 
                        <tr>
                            <td>Silver</td>
                            <td>2 </td>
                            <td>Booking</td>
                            <td>6</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                            
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
 
 
                        <tr className="the_20">
                            <td>Gold</td>
                            <td>2</td>
                            <td>Booking</td>
                            <td>3</td>
                            <td>Rs 10000</td>
                            <td>02/12/2022</td>
                            <td>
                            
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
 
 
                        <tr >
                            <td>Silver</td>
                            <td>7</td>
                            <td>Booking</td>
                            <td>6</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                            
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
                        <tr className="the_20">
                            <td>Silver</td>
                            <td>7</td>
                            <td>Booking</td>
                            <td>3</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                            
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
                        <tr >
                            <td>Silver</td>
                            <td>2</td>
                            <td>Booking</td>
                            <td>6</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                           
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
                        <tr className="the_20">
                            <td>Silver</td>
                            <td>7 </td>
                            <td>Booking</td>
                            <td>3</td>
                            <td>Rs 10000</td>
                            <td>02/12/2022</td>
                            <td>
                            
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
                        <tr>
                            <td>Silver</td>
                            <td>2</td>
                            <td>Booking</td>
                            <td>6</td>
                            <td>Rs 8000</td>
                            <td>02/12/2022</td>
                            <td>
                            
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
                        <tr className="the_20">
                            <td>Silver</td>
                            <td>7</td>
                            <td>Booking</td>
                            <td>3</td>
                            <td>Rs 10000</td>
                            <td>02/12/2022</td>
                            <td>
                            
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"> <span style={{marginRight:"15px"}}>
                                    <FaEdit size={22} color=" #01bea3" />
                                    </span></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><RiDeleteBin6Line size={25} color="red"/></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>  
 
     
       
      </div>    
      </div> 
      </div> 
      </>
  );
}
 
export default Home;