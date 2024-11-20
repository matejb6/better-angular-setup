import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  public toolbarTitle = 'Better Angular Setup';

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
    this.iconRegistry.addSvgIcon('angular-logo', this.sanitizer.bypassSecurityTrustResourceUrl('/logos/angular.svg'));
  }
}
