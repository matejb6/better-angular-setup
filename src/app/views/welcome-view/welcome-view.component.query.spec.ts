export class WelcomeViewComponentQuery {
  public static getTitle(parentElem: HTMLElement): HTMLHeadingElement | null {
    return parentElem.querySelector('h1');
  }

  public static getLibraryCards(parentElem: HTMLElement): NodeListOf<HTMLElement> {
    return parentElem.querySelectorAll('app-library-card');
  }

  public static getFirstLibraryCard(parentElem: HTMLElement): HTMLElement | null {
    return WelcomeViewComponentQuery.getLibraryCards(parentElem).item(0).querySelector('mat-card.card');
  }

  public static getLibraryDialog(): Element | null {
    return document.querySelector('app-library-dialog');
  }

  public static getLibraryDialogOkButton(): HTMLButtonElement | null | undefined {
    return WelcomeViewComponentQuery.getLibraryDialog()?.querySelector('button.mat-primary');
  }
}
