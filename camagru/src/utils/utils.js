// document.addEventListener('DOMContentLoaded', startWebcam);
// function startWebcam(){
//     const video = document.getElementById('webcam');
//     const startWebcamButton = document.getElementById('startWebcam');

//     //vérifier si l'API MediaDevice est disponible.

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
// }

// export default startWebcam;