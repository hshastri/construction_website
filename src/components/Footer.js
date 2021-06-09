import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p><address>845 Woburn St. <br/>Wilmington, MA 01887</address></p>
            <p><a href='tel:9786581923'>978-658-1923</a> </p>
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Frazier Sheet Metal Inc.

            </Link>
          </div>
          <small class='website-rights'>Copyright © 2021</small>
          <div class='social-icons'>
            <span class="text">Social Media Links:</span>
            <Link
              class='social-icon-link instagram'
              to='//www.instagram.com/fraziersheetmetal/?utm_medium=copy_link'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            
            <Link
              class='social-icon-link twitter'
              to='//www.linkedin.com/company/frazier-sheet-metal-inc/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
  </div>
  );
}

export default Footer;
