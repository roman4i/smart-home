import insertHeader from './header/header';
import menuBlock from './menus';
import footer from './footer';
import setRoute from './router/path';
import sessionStor from './utils/session/storage';

const toSession = {
    action: 'write',
    type: 'username',
    payload: 'Guest',
};
const root = document.getElementById('root');

if (sessionStorage.getItem('username') == null) {
    sessionStor(toSession);
}

root.append(insertHeader());
root.append(menuBlock('home'));
root.append(footer());

window.onpopstate = () => {
    const mMenu = document.getElementById('contentMenu');
    mMenu.append(setRoute(window.location.pathname.slice(1,window.location.pathname.length)));
}

