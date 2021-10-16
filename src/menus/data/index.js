import menuItem from "./menuItem";

let expData = {
    title: 'Title',
    data: 'Data 123',
};

export default function mainMenu() {
    const menu = document.createElement('div');
    menu.className = 'menu';

    for (let i=0; i<3; i++) {
        menu.append(menuItem(expData));
    }

    return menu;
};
