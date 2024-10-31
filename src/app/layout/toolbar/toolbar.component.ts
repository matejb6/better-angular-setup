import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  public toolbarTitle = 'Ng Custom Setup';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.addAngularSvgIconToRegistry();
  }

  /**
   * Adds Angular SVG icon to registry
   */
  private addAngularSvgIconToRegistry(): void {
    this.iconRegistry.addSvgIcon(
      'angular-logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/logos/angular.svg')
    );
  }
}
