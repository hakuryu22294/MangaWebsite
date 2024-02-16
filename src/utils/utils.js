export function createElement(elem, id) {
  const element = document.createElement(elem);
  element.setAttribute("id", id);
  return element;
}

export async function render(elem, ...components) {
  elem.innerHTML = "";
  for (const component of components) {
    const content = await component();
    elem.innerHTML += content;
  }
}
