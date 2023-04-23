import React from "react";
import instagram from "../images/footer-icon3.png"
import facebook from "../images/footer-icon2.png"
import send from "../images/footer-icon1.png"




const Footer = () => (
    <div>
    <footer class="footer-section">
    <div class="container-footer">
       
        <div class="footer-content pt-5 pb-5">
            <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                    <div class="footer-widget">
                        
                       
                        <div class="footer-social-icon">
                            <h3>Stay connected</h3>
                            <a href="#"> <img  class="footer-icon" src={instagram} alt="instagram"/></a>
                            <a href="#"> <img  class="footer-icon" src={facebook} alt="facebook" /> </a>
                          
                        </div>
                    </div>
                </div>
  
  
  
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3 className="footer-h3"> Customer Service</h3>
                        </div>
                        <ul>
                         
                        
                            
                            <li><a href="#">Shipping & Deliveries</a></li>
                            <li><a href="#">Exchanges & Returns Policy</a></li>
                           
                            <li><a href="#">Sizing Information</a></li>
                            <li><a href="#">Contact Us</a></li>
                          
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                    <div class="footer-widget">
                        <div class="footer-widget-heading">
                            <h3 className="footer-h3">Newsletter</h3>
                        </div>
                        <div class="footer-text mb-25">
                        
                        </div>
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" placeholder="Email Address"/>
                                <button><i class="fab fa-telegram-plane">  <img class="icon"  src={send} alt=""/></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  </footer>

    
  </div>
);

export default Footer;
