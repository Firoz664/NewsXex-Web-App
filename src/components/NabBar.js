/* eslint-disable jsx-a11y/anchor-is-valid */


import React, { Component } from 'react'
import './NavBar.css'
import {Link} from "react-router-dom";


export class NabBar extends Component {

    render() {
        return (
            <div className= "firoz">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark highlight">
           <div className="container-fluid">
              <Link className="navbar-brand" href="#">TheExpesssNews</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                  <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                  <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/about">About Us</Link></li>
                   
                   
                   <li className="nav-item"> <Link className="nav-link"  to="/general">General</Link></li>
                   <li className="nav-item"> <Link className="nav-link"  to="/business">Business</Link></li>
                   <li className="nav-item"> <Link className="nav-link"  to="/entertainment">Entertainment</Link></li>
                   <li className="nav-item"> <Link className="nav-link"  to="/health">Health</Link></li>
                   <li className="nav-item"> <Link className="nav-link"  to="/science">Science</Link></li>
                   <li className="nav-item"> <Link className="nav-link"  to="/sports">Sports</Link></li>
                   <li className ="nav-item"> <Link className="nav-link"  to="/technology">Technology</Link></li> 
                   <li className ="nav-item"> <Link className="nav-link"  to="/lifestyle">Lifestyle</Link></li> 
                           
               </ul>
            
               
               </div>
           </div>
           </nav>
       </div>
           
        )
    }
}

export default NabBar



