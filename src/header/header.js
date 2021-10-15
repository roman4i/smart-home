import createButton  from "./buttons";
import authPanel from "./auth/auth";
import "./header-style.css";

const buttonsData = [
  {
    text: "Button1"
  },
  {
    text: "Button2"
  },
  {
    text: "Button3"
  }
];

export default function insertHeader() {
  const headerContainer = document.createElement('div');
  headerContainer.className = "headerStyle";

  const titlePanel = document.createElement('div');
  titlePanel.className = 'titlePanel';

  const headTitle = document.createElement('div');
  headTitle.innerText  = 'Smart home panel';
  headTitle.className = 'titleStyle';

  titlePanel.append(headTitle);
  titlePanel.append(authPanel());

  const btnCont = document.createElement('div');
  btnCont.className = 'headerBtn';
  btnCont.append(createButton(buttonsData[0]));
  btnCont.append(createButton(buttonsData[1]));
  btnCont.append(createButton(buttonsData[2]));

  headerContainer.append(titlePanel);
  headerContainer.append(btnCont);

  return headerContainer;
}
