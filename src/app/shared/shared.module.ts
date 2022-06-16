import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { LibraryCardComponent } from './components/library-card/library-card.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatCardModule],
  exports: [CommonModule, LibraryCardComponent],
  declarations: [LibraryCardComponent],
  providers: []
})
export class SharedModule {}
