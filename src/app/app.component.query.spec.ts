export class AppComponentQuery {
  public static getToolbar(parentElem: HTMLElement): HTMLElement | null {
    return parentElem.querySelector('app-toolbar');
  }
}
