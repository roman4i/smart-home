import mainMenu from "./data";
import './menuStyle.css';

export default function menuBlock() {
    const mainBlock = document.createElement('div');
    mainBlock.className = 'mainBlock';
    mainBlock.append(mainMenu());
    
    return (mainBlock);
}