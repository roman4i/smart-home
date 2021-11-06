import menuItem from "./menuItem";
import homePage from "./home";
import settingsPage from "./settings";
import errorPage from "./wrongPath";
import fakeAPI from "../../utils/fakeAPI";

const API = new fakeAPI();
const sensContent = API.getSensorsData();

export default function mainMenu(part) {
    const menu = document.createElement('div');
    menu.className = 'menu';
    menu.id = 'menu';

    switch (part) {
        case 'home':
            menu.append(homePage());
        break;
        case 'settings':
            menu.append(settingsPage());
        break;
        case 'sensors':
            for (let key in sensContent) {
                menu.append(menuItem(sensContent[key]));
            }
        break;
        default:
            menu.append(errorPage());
    }

    return menu;
};
