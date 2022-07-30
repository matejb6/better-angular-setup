import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '../components.module';
import { LibraryDialogComponent } from './library-dialog.component';
import { librariesMock } from '@core/data/libraries.mock';
import { LibraryDialogComponentQuery } from './library-dialog.component.query.spec';

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
    expect(LibraryDialogComponentQuery.getDialogTitle(nativeElem)).toBeTruthy();
  });

  it('should render dialog content', () => {
    expect(LibraryDialogComponentQuery.getDialogContent(nativeElem)).toBeTruthy();
  });

  it('should render dialog content description', () => {
    expect(LibraryDialogComponentQuery.getDialogContentDescription(nativeElem)).toBeTruthy();
  });

  it('should render dialog content description list', () => {
    expect(LibraryDialogComponentQuery.getDialogContentDescriptionList(nativeElem)).toBeTruthy();
  });

  it('should render dialog content description list items', () => {
    expect(LibraryDialogComponentQuery.getDialogContentDescriptionListItems(nativeElem)).toBeTruthy();
  });

  it('should render dialog actions', () => {
    expect(LibraryDialogComponentQuery.getDialogActions(nativeElem)).toBeTruthy();
  });

  it('should render dialog actions link button', () => {
    expect(LibraryDialogComponentQuery.getDialogActionsLinkButton(nativeElem)).toBeTruthy();
  });

  it('should render dialog actions OK button', () => {
    expect(LibraryDialogComponentQuery.getDialogActionsOkButton(nativeElem)).toBeTruthy();
  });

  it('should have title', () => {
    expect(LibraryDialogComponentQuery.getDialogTitle(nativeElem)?.innerText).toEqual(librariesMock[0].name);
  });

  it('should have description', () => {
    expect(LibraryDialogComponentQuery.getDialogContentDescription(nativeElem)?.innerText).toEqual(
      librariesMock[0].description
    );
  });

  it('should have correct number of steps', () => {
    expect(LibraryDialogComponentQuery.getDialogContentDescriptionListItems(nativeElem)?.length).toEqual(
      librariesMock[0].stepsToAdd.length
    );
  });

  it('should have first step', () => {
    expect(LibraryDialogComponentQuery.getDialogContentDescriptionListItems(nativeElem)?.item(0).innerText).toEqual(
      librariesMock[0].stepsToAdd[0]
    );
  });

  it('should align dialog actions to end', () => {
    expect(LibraryDialogComponentQuery.getDialogActions(nativeElem)).toHaveClass('mat-dialog-actions-align-end');
  });

  it('should not have dialog actions link button as primary', () => {
    expect(LibraryDialogComponentQuery.getDialogActionsLinkButton(nativeElem)).not.toHaveClass('mat-primary');
  });

  it('should have dialog actions link button link', () => {
    expect(LibraryDialogComponentQuery.getDialogActionsLinkButton(nativeElem)?.href).toEqual(librariesMock[0].link);
  });

  it('should have dialog actions OK button as primary', () => {
    expect(LibraryDialogComponentQuery.getDialogActionsOkButton(nativeElem)).toHaveClass('mat-primary');
  });
});
