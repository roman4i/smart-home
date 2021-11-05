import insertHeader from './header/header';
import menuBlock from './menus';
import footer from './footer';
import setRoute from './router/path';

const root = document.getElementById('root');

root.append(insertHeader());
root.append(menuBlock('home'));
root.append(footer());

window.onpopstate = () => {
    const mMenu = document.getElementById('contentMenu');
    mMenu.append(setRoute(window.location.pathname.slice(1,window.location.pathname.length)));
}

