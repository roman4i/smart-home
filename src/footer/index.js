import './style.css';

export default function footer() {
    const footerLine = document.createElement('div');
    footerLine.classList = 'footerMain';
    footerLine.innerText = 'Some userful logs';

    return footerLine;
};