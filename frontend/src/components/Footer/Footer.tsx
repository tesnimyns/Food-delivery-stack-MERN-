import './Footer.css'
import React from 'react'
import assets from '../../assets/assets'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer(){

    return(
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Join us at G-Food Delivery, where great meals are just a click away.</p>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                    </div>
                    

                </div>
                <div className="footer-content-center">
                    <h2>G-Delivery FOOD</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch </h2>
                    <ul>
                        <li>+216 97 096 658</li>
                        <li>contact@gcompany.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024  © G-Delivery.com -All Right Reserved . </p>
        </div>
    )
}
export default Footer;