import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, ServicesModule],
  exports: [CommonModule, ComponentsModule, ServicesModule],
  declarations: [],
  providers: []
})
export class SharedModule {}
