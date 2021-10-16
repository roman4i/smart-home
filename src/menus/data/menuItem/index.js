export default function menuItem(itemData) {
    const itemBox = document.createElement('div');
    itemBox.className = 'itemBoxStyle';

    const title = document.createElement('div');
    title.innerText = itemData.title;
    title.className = 'boxTitle';

    // here must be an algorithm for multiply data lines
    const dataLine = document.createElement('div');
    dataLine.className = 'boxContent';
    dataLine.innerText = itemData.data;

    itemBox.append(title);
    itemBox.append(dataLine);

    return itemBox;
}