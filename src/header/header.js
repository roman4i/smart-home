import createButton  from "./buttons";
import "./header-style.css";

const buttonsData = [
  {
    text: "Button1",
    style: "headerBtn"
  },
  {
    text: "Button2",
    style: "headerBtn"
  },
  {
    text: "Button3",
    style: "headerBtn"
  }
];

export default function insertHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.className = "headerStyle";

  const btnCont = document.createElement('div');
  btnCont.className = 'btnsGroupHead';
  btnCont.append(createButton(buttonsData[0]));
  btnCont.append(createButton(buttonsData[1]));
  btnCont.append(createButton(buttonsData[2]));

  headerContainer.append(btnCont);

  return headerContainer;
}
