/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
// import { Link} from "react-router-dom";
import "./PreNavbar.css"
export class PreNavbar extends Component {
    render() {
        return (
            <div className="preNav">
            <div>
                <a  href="/india">INDIA</a> <span>|</span>
                <a  href="/app">GET STORE APP</a> <span>|</span>
                <a  href="/online">ONLINE HELP</a> <span>|</span>
                <a  href="/">Sponsor News</a>
            </div>
            <div>
            
            <a  href="/login">LogIn</a> <span>|</span>
                <a  href="/signup">SIGN UP</a> <span>|</span>
                <a  href="/contact">Contact Us</a> <span>|</span>
                <a  href="https://store.mi.com/in/site/login"></a>
              
            </div>
           
       </div>
        )
    }
}

export default PreNavbar
