export const getDialogTitle = (parentElem: HTMLElement): HTMLElement | null => {
  return parentElem.querySelector('h1.mat-mdc-dialog-title');
};

export const getDialogContent = (parentElem: HTMLElement): HTMLElement | null => {
  return parentElem.querySelector('mat-dialog-content.mat-mdc-dialog-content');
};

export const getDialogContentDescription = (parentElem: HTMLElement): HTMLParagraphElement | null | undefined => {
  return getDialogContent(parentElem)?.querySelectorAll('p').item(0);
};

export const getDialogContentDescriptionList = (parentElem: HTMLElement): HTMLUListElement | null | undefined => {
  return getDialogContent(parentElem)?.querySelector('ul');
};

export const getDialogContentDescriptionListItems = (
  parentElem: HTMLElement
): NodeListOf<HTMLLIElement> | undefined => {
  return getDialogContentDescriptionList(parentElem)?.querySelectorAll('li');
};

export const getDialogActions = (parentElem: HTMLElement): HTMLElement | null => {
  return parentElem.querySelector('mat-dialog-actions.mat-mdc-dialog-actions');
};

export const getDialogActionsLinkButton = (parentElem: HTMLElement): HTMLAnchorElement | null | undefined => {
  return getDialogActions(parentElem)?.querySelector('a.mat-mdc-raised-button');
};

export const getDialogActionsOkButton = (parentElem: HTMLElement): HTMLButtonElement | null | undefined => {
  return getDialogActions(parentElem)?.querySelector('button.mat-mdc-raised-button');
};
