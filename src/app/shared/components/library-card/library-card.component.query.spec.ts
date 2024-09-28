export class LibraryCardComponentQuery {
  public static getCard(parentElem: HTMLElement): HTMLElement | null {
    return parentElem.querySelector('mat-card.card');
  }

  public static getCardTitle(parentElem: HTMLElement): HTMLElement | null | undefined {
    return LibraryCardComponentQuery.getCard(parentElem)?.querySelector('mat-card-title');
  }

  public static getCardImage(parentElem: HTMLElement): HTMLImageElement | null | undefined {
    return LibraryCardComponentQuery.getCard(parentElem)?.querySelector('img.logo');
  }
}
