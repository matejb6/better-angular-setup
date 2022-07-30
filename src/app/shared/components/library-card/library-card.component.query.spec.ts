export class LibraryCardComponentQuery {
  public static getCard(parentElem: HTMLElement): HTMLElement | null {
    return parentElem.querySelector('mat-card.card');
  }

  public static getCardTitle(parentElem: HTMLElement): HTMLElement | null | undefined {
    return LibraryCardComponentQuery.getCard(parentElem)?.querySelector('mat-card-title');
  }

  public static getCardContent(parentElem: HTMLElement): HTMLElement | null | undefined {
    return LibraryCardComponentQuery.getCard(parentElem)?.querySelector('mat-card-content');
  }

  public static getCardContentImage(parentElem: HTMLElement): HTMLImageElement | null | undefined {
    return LibraryCardComponentQuery.getCardContent(parentElem)?.querySelector('img.logo');
  }
}
