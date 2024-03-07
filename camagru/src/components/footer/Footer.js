import React from 'react';
import styles from '../../style/css/Footer.css';

const Footer = () => {
    return(
        <footer>
            <div class="links_route">
                <lu>
                    <li><a>Home</a></li>
                    <li><a>Workspace</a></li>
                    <li><a>My gallery</a></li>
                    <li><a>Users gallery</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Parameters</a></li>
                </lu>
            </div>
            <div class="links_images">
                <ul>
                    <li><a><img href="../../../public/style/images/logo/facebook.png"></img></a></li>
                    <li><a><img href="../../../public/style/images/logo/instagram.png"></img></a></li>
                    <li><a><img href="../../../public/style/images/logo/twitter.png"></img></a></li>
                </ul>
            </div>
        </footer>
    );
}; 

export default Footer;