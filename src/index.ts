export function applyHead(headElements: { tag: string, attributes?: { [key: string]: string }, content?: string }[]) {
  const fragment = document.createDocumentFragment();
  headElements.forEach(object => {
    const element = document.createElement(object.tag);
    if (object.attributes) {
      Object.keys(object.attributes).forEach(item => {
        element.setAttribute(item, object.attributes?.[item] ?? '');
      });
    }
    if (object.content) {
      element.appendChild(document.createTextNode(object.content));
    }
    fragment.appendChild(element);
  });
  document.head.appendChild(fragment);
}
