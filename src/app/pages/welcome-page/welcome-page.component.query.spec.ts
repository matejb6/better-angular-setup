export const getTitle = (parentElem: HTMLElement): HTMLHeadingElement | null => {
  return parentElem.querySelector('h1');
};

export const getLibraryCards = (parentElem: HTMLElement): NodeListOf<HTMLElement> => {
  return parentElem.querySelectorAll('app-library-card');
};

export const getFirstLibraryCard = (parentElem: HTMLElement): HTMLElement | null => {
  return getLibraryCards(parentElem).item(0).querySelector('mat-card.card');
};

export const getLibraryDialog = (): Element | null => {
  return document.querySelector('app-library-dialog');
};

export const getLibraryDialogOkButton = (): HTMLButtonElement | null | undefined => {
  return getLibraryDialog()?.querySelector('button.mat-primary');
};
