import insertHeader from './header/header';
import menuBlock from './menus';
import footer from './footer';

const root = document.getElementById('root');

root.append(insertHeader());
root.append(menuBlock());
root.append(footer());

