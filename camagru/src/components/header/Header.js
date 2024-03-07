import React from 'react';
import styles from '../../style/css/Header.css';

const Header = ({ title, links }) => {    
    return(
        <header>
            <h1>{title}</h1>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li><a href={link.href}>{link.text}</a></li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}; 

export default Header;


/**
 * 
 * 
 * Ce code définit un composant fonctionnel Header qui prend deux props:
 *  title et links. Le prop title est le text du titre. Le props links est un tableau d'objet avec les propriétés href et text.
 * 
 * Voir sa première utilisation dans App.js.
 */