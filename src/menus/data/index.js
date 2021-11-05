import menuItem from "./menuItem";
import homePage from "./home";
import settingsPage from "./settings";
import errorPage from "./wrongPath";

let expData = {
    title: 'Title',
    data: 'Data 123',
};

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
            for (let i=0; i<3; i++) {
                menu.append(menuItem(expData));
            }
        break;
        default:
            menu.append(errorPage());
    }

    return menu;
};
