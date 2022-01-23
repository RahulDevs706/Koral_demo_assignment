import React, { Fragment } from 'react';

import logo from "../../../Images/logo.png";
import {FaTwitter as Twitter, FaInstagram as Instagram, FaGithub as Github, FaLinkedin as Linkedin} from "react-icons/fa"

import './footer.css'

const Footer = () => {

    const link = "http://demos.upperthemes.com/koral/demo1/";

  return (<Fragment>
      <div className='Footer_component'>
        <img src={logo} alt="Logo" />
        <div className='Footer_icons'>
            <a href='https://www.instagram.com/rahul_at_417/'><Instagram /></a>
            <a href='https://twitter.com/RahulSi99095813'><Twitter /></a>
            <a href='https://github.com/RahulDevs706'><Github /></a>
            <a href='www.linkedin.com/in/rahuldevs706'><Linkedin /></a>
        </div>
        <p>Note: This is a clone of <a href={link}>this</a> webpage. All the rights of images goes to that webpage. Go to abve social handles for contacting me. Thanks </p>
      </div>
  </Fragment>);
};

export default Footer;
