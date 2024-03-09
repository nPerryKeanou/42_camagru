import React, {useEffect, useState} from "react";
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import styles from '../../style/scss/Home.scss';


/*
    à quoi sert un useEffect ? Que fait il ici ?

    -   Le hook useEffect de React permet d'exécuter du code après le rendu du composant,
        et potentiellement à d'autre moment, en fonction des dépendences spécifiées.

        il est utilisés pour :
            * Gérer les effets de bord : Gérer des événement DOM, des appels API, des timers, des aimations, etc.
            * Mettre à jour le DOM en fonction de l'état: Mettre à jour le contenu du composant en fonction du changement dans ces variable d'état.
            * Effectuer des nettoyages: Libérer des ressources ou annuler des subscriptions lorsqu'un composant est désalloué.


        il est utilisé ici pour :
            * Démarrer la webcam après le rendu du composant: La fonction startwebcam est appelé une seul fois après le rendu initial du composant.
            * Arrêter la webcam lorsque le composant est désalloué: La fonction de nettoyage (optionnelle) s'assure que la webcam est arrêté et que 
                les ressources sont libérés lorsque le composant n'est plus utilisé.

        En résumé, useEffect permet de lancer la webcam au bon moment dt de le nettoyé correctement lorsque le composant n'est plus nécessaire.


        Point important à retenir:
            .le tableau de de dépendence vide [], indique que l'effet ne s'exécute qu'une seul fois après le rendu.
            .Vous pouvez utiliser plusieurs instances de useEffect dans un même composant pour gérer différent effet de bord.
            .il est important de bien gérer es nettoyages pour éviter les fuites de mémoires.


*/



const Home = () => {

    // useEffect(() => {
    //     //ici je dois créer les div html pour accueillir mon js.
    //     function startWebcam(event){
    //         const video = document.getElementById('webcam');
    //         const startWebcamButton = document.getElementById('startWebcam');
    
    //         //vérifier si l'API MediaDevice est disponible.
    
    //         startWebcamButton.addEventListener('click', () => {
    //             if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    //             //demande l'accés à la webcam.
    //             navigator.mediaDevices.getUserMedia({video : true})
    //             .then((stream) => {
    //                 //afficher le flux video dans l'élément video
    //                 video.srcObject = stream;
    //                 console.log(video.srcObject);
    //             })
    //             .catch((error => {
    //                 console.error('Error accessing webcam: ', error);
    //             }));
    //             }else{
    //                 console.error('getUserMedia is not supported.');
    //             }
    //         });
    //     }

    //     startWebcam();
    // }, []);

    const [video, setVideo] = useState(null);

    useEffect(() => {
        const startWebcam = () => {
        // Vérifier si l'API MediaDevices est disponible
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Demander l'accès à la webcam
            navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                // Créer un élément vidéo
                const videoElement = document.createElement('video');
                videoElement.srcObject = stream;
                videoElement.id = 'my-webcam';

                // Définir l'état avec l'élément vidéo
                setVideo(videoElement);
            })
            .catch((error) => {
                console.error('Error accessing webcam: ', error);
            });
        } else {
            console.error('getUserMedia is not supported.');
        }
        };

        startWebcam();

        // // Nettoyage
        // return () => {
        // // Arrêter la webcam et libérer les ressources
        // if (video) {
        //     video.srcObject = null;
        //     video.remove();
        // }
        // };
    }, []);



    const title = "Camagru";
    const links = [
        {href: "/connexion", text: "Connexion"},
        {href: "/Inscription", text: "Inscription"}
    ];



    return(
        <div>
            <Header title={title} links={links}></Header>
            <div className="div-webcam">
                {video && <div id="webcam-container"><video ref={video} /></div>}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
