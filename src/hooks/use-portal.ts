const createRootElement = (id: string): HTMLElement => {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
};

const addRootElement = (rootElem: HTMLElement): void => {
  const elements = document.querySelectorAll("body > div");
  if (elements.length > 0) {
    const lastElement = elements[elements.length - 1];
    document.body.insertBefore(rootElem, lastElement);
  } else {
    document.body.append(rootElem);
  }
};

export const usePortal = (id: string): HTMLElement => {
  const existingElement = document.getElementById(id);
  const portalElement = existingElement ?? createRootElement(id);
  if (!existingElement) {
    addRootElement(portalElement);
  }
  return portalElement;
};
