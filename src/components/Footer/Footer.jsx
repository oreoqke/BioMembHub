import React from 'react';
import './Footer.css';
import { Links } from '../../Urls.jsx';

const Footer = () => {
    return (
        <div className='footer-container'>
            <a href={Links.Lehigh_University} ><img src="images/Lehigh_University.jpg" alt="Lehigh University" className="footer-logo" /></a>
            <div className='footer-text'>
                <a href={Links.Lehigh_University}>Lehigh University</a>
                {' / '}
                <a href={Links.Department_of_Biological_Sciences}>Department of Biological Sciences</a>
                {' / '}
                <a href={Links.Department_of_Chemistry}> Department of Chemistry</a>
                {' / '}
                <a href={Links.Department_of_Bioengineering}> Department of Bioengineering</a>
                {' / '}
                <a href={Links.Im_Lab}> Im Lab</a>
                <br />
                Problems, Questions & Comments? / {" "}
                <a href=".">Contact</a>
                {' / '}
                Copyright(c) 2024-2026 by the Im Lab
            </div>
        </div>
    );
}

export default Footer;