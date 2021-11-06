const itemTitle = (text) => {
    const title = document.createElement('div');
    title.innerText = text;
    title.className = 'boxTitle';

    return title;
}

const itemDataLine = (name, value) => {
    const dataLine = document.createElement('div');
    dataLine.className = 'boxContent';
    dataLine.innerText = name + ' ' + value;

    return dataLine;
}

export default function menuItem(itemData) {
    const itemBox = document.createElement('div');
    itemBox.className = 'itemBoxStyle';

    itemBox.append(itemTitle(itemData.name));   //title

    // lines with sensors data
    for(let key in itemData.data) {
        itemBox.append(itemDataLine(key, itemData.data[key]))
    }

    return itemBox;
}