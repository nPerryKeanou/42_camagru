import { useEffect, useState } from 'react';
import { BrowserRouteur, Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home.js';
//ici on va importer toutes les pages que nous allons utiliser.
//Chaque page est un composant, qui sera elles même composé d'autre composant.
//Ces importe nous permettront de switcher avec les routes selon le choix du users.
import Inscription from './components/inscription/Inscription.js';
import Connexion from './components/connexion/Connexion.js';
import Workspace from './components/workspace/Workspace.js';
import Mygallery from './components/mygallery/Mygallery.js';
import Usersgallery from './components/usersgallery/Usersgallery.js';
import Contact from './components/contact/Contact.js';
import Parameters from './components/parameters/Parameters.js';
import NotFound from './components/notfound/Notfound.js';

/*
    Les hooks : 
        Un hook est une fonction spécial introduite dns react 16.8 qui permet de "brancher" des fonctionnalités de react à des composants fonctionnels.
        Ils vous permettent de gérer l'état, d'accéder aux props et au contexte, et d'effectuer d'autre actions sans avoir besoin de class.

        Fonctionnement :
            Les hooks fonctionnent en utilisant le système de rendu de React.
            Ils s'executent pendant la phase de rendu d'un composant et peuvent modifier l'état d'un composat ou effecttuer d'autres actions.


*/


const App = () => {
    <BrowserRouteur>
        <Switch>
            <Route exact path="/" Component={Home}/>
            <Route path="/Inscription" Component={Inscription}/>
            <Route path="/Connexion" Component={Connexion}/>
            <Route path="/Workspace" Component={Workspace}/>
            <Route path="/Mygallery" Component={Mygallery}/>
            <Route path="/Usersgallery" Component={Usersgallery}/>
            <Route path="/Contact" Component={Contact}/>
            <Route path="/parameters" Component={Parameters}/>
            <Route Component={NotFound}/>
        </Switch>
    </BrowserRouteur>
};

export default App;


/**
 * Ce code import le composant Header est l'utilise dans le composant principal.
 * Les props title et links sont passées au composant Header.
 */