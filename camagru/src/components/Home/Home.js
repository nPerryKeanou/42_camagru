import React from "react";
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';


const Home = () => {

    const title = "Camagru";
    const links = [
        {href: "/connexion", text: "Connexion"},
        {href: "/Inscription", text: "Inscription"}
    ];

    return(
        <div>
            <Header title={title} links={links}></Header>
            <Footer />
        </div>
    );
};

export default Home;
