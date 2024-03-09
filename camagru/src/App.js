import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import Inscription from './components/inscription/Inscription.js';
import Connexion from './components/connexion/Connexion.js';
import Workspace from './components/workspace/Workspace.js';
import Mygallery from './components/mygallery/Mygallery.js';
import Usersgallery from './components/usergallery/Usersgallery.js';
import Contact from './components/contact/Contact.js';
import Parameters from './components/parameters/Parameters.js';
import NotFound from './components/notfound/Notfound.js';
//import { routes } from './routers/routes.js';

const App = () => {
  return (

    /*
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.component} />
            ))}
        </Routes>
    */
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/mygallery" element={<Mygallery />} />
        <Route path="/usersgallery" element={<Usersgallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parameters" element={<Parameters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;