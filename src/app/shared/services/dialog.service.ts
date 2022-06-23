import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  constructor(public dialog: MatDialog) {}

  /**
   * @public
   * @param component Component to open
   * @param data Data to inject
   * @description Opens dialog with component and injects data
   */
  public openDialog(component: any, data: any): void {
    this.dialog.open(component, {
      data: data
    });
  }
}
