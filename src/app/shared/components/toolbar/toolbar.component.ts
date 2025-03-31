import { Component, inject } from '@angular/core';
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
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  public toolbarTitle = 'Better Angular Setup';

  constructor() {
    this.addAngularSvgIconToRegistry();
  }

  /**
   * Adds Angular SVG icon to registry
   */
  private addAngularSvgIconToRegistry(): void {
    this.iconRegistry.addSvgIcon('angular-logo', this.sanitizer.bypassSecurityTrustResourceUrl('/logos/angular.svg'));
  }
}
