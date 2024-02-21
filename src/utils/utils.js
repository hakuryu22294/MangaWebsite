export async function render(elem, ...components) {
  elem.innerHTML = "";
  for (const component of components) {
    const content = await component();
    elem.innerHTML += content;
  }
}

export function createElement(tagName, ...attributes) {
  const element = document.createElement(tagName);
  attributes.forEach((attribute) => {
    if (typeof attribute === "object") {
      Object.keys(attribute).forEach((key) => {
        element.setAttribute(key, attribute[key]);
      });
    }
  });
  return element;
}

export function notifiInnerHTML(element, innerHTML) {
  element.innerHTML = innerHTML;
}
