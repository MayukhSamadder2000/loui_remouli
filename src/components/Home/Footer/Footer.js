import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
           <div className="footer_content">
               <div className="foot">
                   <div className="footer_head">
                       Loui-Remouli
                   </div>
                   <div className="icons">
                       <a href="https://www.facebook.com "><i class="fab fa-facebook"></i></a>
                       <a href="https://in.linkedin.com/"><i class="fab fa-linkedin"></i></a>
                       <a href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
                       <a href="https://codepen.io/"><i class="fab fa-codepen"></i></a>
                   </div>
                   
               </div>
               <div className="foot">
                   <li>Support us</li>
                   <li>Contact us</li>
                   <li>FAQ</li>
                   <li>Our Address</li>
                   <li>News Letter</li>
                   <li>Our Partners</li>
                   
               </div>
               <div className="foot">
                   <div className="btn btn-subscribe">Subscribe to us</div>
                   <div><input type="email" name="myMail" id="email" placeholder="Enter your email"/></div>
                   
               </div>

           </div>
        </footer>
    )
}
