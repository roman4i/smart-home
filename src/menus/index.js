import setRoute from "../router/path";
import './menuStyle.css';

export default function menuBlock(route) {
        let mainBlock = document.createElement('div');
        mainBlock.className = 'mainBlock';
        mainBlock.id = 'contentMenu';
        mainBlock.append(setRoute(route));
        return mainBlock;
}