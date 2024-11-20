export class NotFoundPageComponentQuery {
  public static getMessage(parentElem: HTMLElement): HTMLHeadingElement | null {
    return parentElem.querySelector('p');
  }
}
