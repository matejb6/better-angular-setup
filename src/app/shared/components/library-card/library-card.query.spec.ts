export const getCard = (parentElem: HTMLElement): HTMLElement | null => {
  return parentElem.querySelector('mat-card.card');
};

export const getCardTitle = (parentElem: HTMLElement): HTMLElement | null | undefined => {
  return getCard(parentElem)?.querySelector('mat-card-title');
};

export const getCardImage = (parentElem: HTMLElement): HTMLImageElement | null | undefined => {
  return getCard(parentElem)?.querySelector('img.logo');
};
