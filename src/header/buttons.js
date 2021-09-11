export default function createButton(data) {
  const button = document.createElement('input');
  button.type = "button";
  button.value = data.text;
  button.className = data.style;

  return button;
}
