import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from '@app/core/core.module';
import { Toolbar } from '@app/shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
