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

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.toolbarTitle = 'Ng Custom Setup';

    this.addAngularSvgIconToRegistry();
  }

  /**
   * @private
   * @description Adds Angular SVG icon to registry
   */
  private addAngularSvgIconToRegistry(): void {
    this.iconRegistry.addSvgIcon(
      'angular-logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/logos/angular.svg')
    );
  }
}
