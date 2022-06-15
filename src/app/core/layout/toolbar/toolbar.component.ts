import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public toolbarTitle: string;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.toolbarTitle = 'Ng Custom Setup';

    iconRegistry.addSvgIcon(
      'angular-logo',
      sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/logos/angular_solidBlack.svg')
    );
  }
}
