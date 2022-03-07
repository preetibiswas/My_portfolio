import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Preeti</a>
      <ul className='permalinks'>
        <li><a href="#">HOme</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <a href="#testimonial">Testimonial</a>
        
        <li><a href="#contact">Contact</a>
        </li>
        
      </ul>
      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>

      </div>
      <div className='footer__copyright'>
        <small>&copy; preeti biswas.All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer