import mainMenu from "../menus/data";
import routeTo from ".";


const errorMenu = () => {
    const cont = document.createElement('div');
    cont.id = 'menu';
    cont.innerText = 'Ooops, wrong address!!!';
    return cont;
}

export default function setRoute(path) {
    if (document.getElementById('menu') != null) {
        document.getElementById('menu').remove();
    }

    let pathRes;
    let title = '';
    switch (path) {
        case 'home': 
            pathRes = mainMenu(path);
            title = 'Welcome';
            break;
        case 'sensors':
            pathRes = mainMenu(path);
            title = 'Sensors panel';
            break;
        case 'settings':
            pathRes = mainMenu(path);
            title = 'Settings';
            break;
        default:
            pathRes = mainMenu(path);
            title = 'Ooops';
    }

    routeTo(path, title);
    
    return pathRes;
}