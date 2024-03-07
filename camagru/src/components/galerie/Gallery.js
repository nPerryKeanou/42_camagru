/**
 * 
 * Vous pouvez créer un système de composants imbriqués où chaque composant est responsable de l'affichage d'une partie de l'interface utilisateur.
    Vous pouvez afficher ou masquer les composants en fonction du lien cliqué.


 * const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleNavClick = (e) => {
    const componentName = e.target.getAttribute("data-component");
    switch (componentName) {
      case "Home":
        setShowHome(true);
        setShowAbout(false);
        setShowContact(false);
        break;
      case "About":
        setShowHome(false);
        setShowAbout(true);
        setShowContact(false);
        break;
      case "Contact":
        setShowHome(false);
        setShowAbout(false);
        setShowContact(true);
        break;
    }
  };

  return (
    <div>
      <Header />
      {showHome && <Home />}
      {showAbout && <About />}
      {showContact && <Contact />}
    </div>
  );
};

Dans cet exemple, l'état est utilisé pour afficher ou masquer les composants en fonction du lien cliqué.

*/