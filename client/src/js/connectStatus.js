
export const checkConnect = () => {
const online = navigator.onLine;
const imageCont = document.getElementsByClassName("navbar-brand")[0].firstChild;

if (online == false) {
    console.log("Currently Offline");
    imageCont.src += './assets/icons/icon_96x96.97a96e0fc4eb2a8bec3b8d49d90f1d14.png'
    
} else {
    console.log("Currently Online");
    imageCont.src += './assets/icons/icon_96x96.97a96e0fc4eb2a8bec3b8d49d90f1d14.png'
}};

