import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [CommonModule, ServicesModule],
  exports: [CommonModule, ServicesModule],
  declarations: [],
  providers: []
})
export class SharedModule {}
