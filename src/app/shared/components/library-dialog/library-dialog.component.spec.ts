import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '../components.module';
import { LibraryDialogComponent } from './library-dialog.component';
import { librariesMock } from '@core/data/libraries.mock';

describe('LibraryDialogComponent', () => {
  let fixture: ComponentFixture<LibraryDialogComponent>;
  let component: LibraryDialogComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsModule, SharedModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: librariesMock[0] }]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render dialog title', () => {
    expect(getDialogTitle(nativeElem)).toBeTruthy();
  });

  it('should render dialog content', () => {
    expect(getDialogContent(nativeElem)).toBeTruthy();
  });

  it('should render dialog content description', () => {
    expect(getDialogContentDescription(nativeElem)).toBeTruthy();
  });

  it('should render dialog content description list', () => {
    expect(getDialogContentDescriptionList(nativeElem)).toBeTruthy();
  });

  it('should render dialog content description list items', () => {
    expect(getDialogContentDescriptionListItems(nativeElem)).toBeTruthy();
  });

  it('should render dialog actions', () => {
    expect(getDialogActions(nativeElem)).toBeTruthy();
  });

  it('should render dialog actions link button', () => {
    expect(getDialogActionsLinkButton(nativeElem)).toBeTruthy();
  });

  it('should render dialog actions OK button', () => {
    expect(getDialogActionsOkButton(nativeElem)).toBeTruthy();
  });

  it('should have title', () => {
    expect(getDialogTitle(nativeElem)?.innerText).toEqual(librariesMock[0].name);
  });

  it('should have description', () => {
    expect(getDialogContentDescription(nativeElem)?.innerText).toEqual(librariesMock[0].description);
  });

  it('should have correct number of steps', () => {
    expect(getDialogContentDescriptionListItems(nativeElem)?.length).toEqual(librariesMock[0].stepsToAdd.length);
  });

  it('should have first step', () => {
    expect(getDialogContentDescriptionListItems(nativeElem)?.item(0).innerText).toEqual(librariesMock[0].stepsToAdd[0]);
  });

  it('should align dialog actions to end', () => {
    expect(getDialogActions(nativeElem)).toHaveClass('mat-dialog-actions-align-end');
  });

  it('should not have dialog actions link button as primary', () => {
    expect(getDialogActionsLinkButton(nativeElem)).not.toHaveClass('mat-primary');
  });

  it('should have dialog actions link button link', () => {
    expect(getDialogActionsLinkButton(nativeElem)?.href).toEqual(librariesMock[0].link);
  });

  it('should have dialog actions OK button as primary', () => {
    expect(getDialogActionsOkButton(nativeElem)).toHaveClass('mat-primary');
  });
});

const getDialogTitle = (parentElem: HTMLElement): HTMLElement | null => parentElem.querySelector('h1.mat-dialog-title');

const getDialogContent = (parentElem: HTMLElement): HTMLElement | null =>
  parentElem.querySelector('mat-dialog-content.mat-dialog-content');

const getDialogContentDescription = (parentElem: HTMLElement): HTMLParagraphElement | null | undefined =>
  getDialogContent(parentElem)?.querySelectorAll('p').item(0);

const getDialogContentDescriptionList = (parentElem: HTMLElement): HTMLUListElement | null | undefined =>
  getDialogContent(parentElem)?.querySelector('ul');

const getDialogContentDescriptionListItems = (parentElem: HTMLElement): NodeListOf<HTMLLIElement> | undefined =>
  getDialogContentDescriptionList(parentElem)?.querySelectorAll('li');

const getDialogActions = (parentElem: HTMLElement): HTMLElement | null =>
  parentElem.querySelector('mat-dialog-actions.mat-dialog-actions');

const getDialogActionsLinkButton = (parentElem: HTMLElement): HTMLAnchorElement | null | undefined =>
  getDialogActions(parentElem)?.querySelector('a.mat-raised-button');

const getDialogActionsOkButton = (parentElem: HTMLElement): HTMLButtonElement | null | undefined =>
  getDialogActions(parentElem)?.querySelector('button.mat-raised-button');
