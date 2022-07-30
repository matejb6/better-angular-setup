export class LibraryDialogComponentQuery {
  public static getDialogTitle(parentElem: HTMLElement): HTMLElement | null {
    return parentElem.querySelector('h1.mat-dialog-title');
  }

  public static getDialogContent(parentElem: HTMLElement): HTMLElement | null {
    return parentElem.querySelector('mat-dialog-content.mat-dialog-content');
  }

  public static getDialogContentDescription(parentElem: HTMLElement): HTMLParagraphElement | null | undefined {
    return LibraryDialogComponentQuery.getDialogContent(parentElem)?.querySelectorAll('p').item(0);
  }

  public static getDialogContentDescriptionList(parentElem: HTMLElement): HTMLUListElement | null | undefined {
    return LibraryDialogComponentQuery.getDialogContent(parentElem)?.querySelector('ul');
  }

  public static getDialogContentDescriptionListItems(parentElem: HTMLElement): NodeListOf<HTMLLIElement> | undefined {
    return LibraryDialogComponentQuery.getDialogContentDescriptionList(parentElem)?.querySelectorAll('li');
  }

  public static getDialogActions(parentElem: HTMLElement): HTMLElement | null {
    return parentElem.querySelector('mat-dialog-actions.mat-dialog-actions');
  }

  public static getDialogActionsLinkButton(parentElem: HTMLElement): HTMLAnchorElement | null | undefined {
    return LibraryDialogComponentQuery.getDialogActions(parentElem)?.querySelector('a.mat-raised-button');
  }

  public static getDialogActionsOkButton(parentElem: HTMLElement): HTMLButtonElement | null | undefined {
    return LibraryDialogComponentQuery.getDialogActions(parentElem)?.querySelector('button.mat-raised-button');
  }
}
