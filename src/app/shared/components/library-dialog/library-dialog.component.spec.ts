import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LIBRARIES_MOCK } from '@data/libraries.mock';
import { LibraryDialogComponent } from './library-dialog.component';
import {
  getDialogActions,
  getDialogActionsLinkButton,
  getDialogActionsOkButton,
  getDialogContent,
  getDialogContentDescription,
  getDialogContentDescriptionList,
  getDialogContentDescriptionListItems,
  getDialogTitle
} from './library-dialog.component.query.spec';

describe('LibraryDialogComponent', () => {
  let fixture: ComponentFixture<LibraryDialogComponent>;
  let component: LibraryDialogComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryDialogComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: LIBRARIES_MOCK[0] }]
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
    expect(getDialogTitle(nativeElem)?.innerText).toEqual(LIBRARIES_MOCK[0].name);
  });

  it('should have description', () => {
    expect(getDialogContentDescription(nativeElem)?.innerText).toEqual(LIBRARIES_MOCK[0].description);
  });

  it('should have correct number of steps', () => {
    expect(getDialogContentDescriptionListItems(nativeElem)?.length).toEqual(LIBRARIES_MOCK[0].stepsToAdd.length);
  });

  it('should have first step', () => {
    expect(getDialogContentDescriptionListItems(nativeElem)?.item(0).innerText).toEqual(
      LIBRARIES_MOCK[0].stepsToAdd[0]
    );
  });

  it('should align dialog actions to end', () => {
    expect(getDialogActions(nativeElem)).toHaveClass('mat-mdc-dialog-actions-align-end');
  });

  it('should not have dialog actions link button as primary', () => {
    expect(getDialogActionsLinkButton(nativeElem)).not.toHaveClass('mat-primary');
  });

  it('should have dialog actions link button link', () => {
    expect(getDialogActionsLinkButton(nativeElem)?.href).toEqual(LIBRARIES_MOCK[0].link);
  });

  it('should have dialog actions OK button as primary', () => {
    expect(getDialogActionsOkButton(nativeElem)).toHaveClass('mat-primary');
  });
});
