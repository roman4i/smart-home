export default function createButton(data) {
  const button = document.createElement('a');
  button.text = data.text;

  return button;
}
