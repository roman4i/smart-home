import menuBlock from "../menus";
import setRoute from "../router/path";

export default function createButton(data) {
  const button = document.createElement('a');
  button.text = data.text;

  button.onclick = () => {
    const mMenu = document.getElementById('contentMenu');
    mMenu.append(setRoute(data.path));
  };

  return button;
}
