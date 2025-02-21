export function applyHead(headElements: { tag: string, attributes?: { [key: string]: string }, content?: string }[]) {
  headElements.forEach(object => {
    const element = document.createElement(object.tag);
    if (object.attributes) {
      Object.keys(object.attributes).forEach(item => {
        element.setAttribute(item, object.attributes?.[item] || '');
      });
    }
    if (object.content) {
      element.appendChild(document.createTextNode(object.content));
    }
    document.head.appendChild(element);
  });
}
