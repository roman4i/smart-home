import insertHeader from './header/header';
import menuBlock from './menus';

const root = document.getElementById('root');

root.append(insertHeader());
root.append(menuBlock());

