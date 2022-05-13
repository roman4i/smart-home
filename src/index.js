import insertHeader from './header/header';
import menuBlock from './menus';
import footer from './footer';
import setRoute from './router/path';
import sessionStor from './utils/session/storage';

import "./index.css";

const toSession = {
    action: 'write',
    type: 'username',
    payload: 'Guest',
};
const root = document.getElementById('root');

const app = document.createElement('div');
app.className = 'app';

if (sessionStorage.getItem('username') == null) {
    sessionStor(toSession);
}

app.append(insertHeader());
app.append(menuBlock('home'));
app.append(footer());

root.append(app);

window.onpopstate = () => {
    const mMenu = document.getElementById('contentMenu');
    mMenu.append(setRoute(window.location.pathname.slice(1,window.location.pathname.length)));
}

