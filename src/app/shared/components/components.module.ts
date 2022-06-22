import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { LibraryCardComponent } from './library-card/library-card.component';

@NgModule({
  imports: [MatCardModule, MatRippleModule],
  exports: [LibraryCardComponent],
  declarations: [LibraryCardComponent],
  providers: []
})
export class ComponentsModule {}
