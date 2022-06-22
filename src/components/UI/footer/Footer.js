import React from 'react';
import './Footer.css'
import icon from '../../assets/icon/github__icon.svg'

const Footer = () => {
    return (
        <footer>

                <span className='footer__content'>© Copyright 2022, Made by Elena Pak </span>
                <span className='footer__github'>
                    <a href="https://github.com/elena-pak"
                       className="footer__github">
                    <img src={icon}  alt="github__ref" />
                        <title>Github</title>
                </a>

                </span>




        </footer>
    );
};

export default Footer;