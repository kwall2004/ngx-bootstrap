import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadDirective } from './typeahead.directive';
import { ComponentLoaderFactory } from '@nk-dev/ngx-bootstrap/component-loader';
import { PositioningService } from '@nk-dev/ngx-bootstrap/positioning';

@NgModule({
  imports: [CommonModule],
  declarations: [TypeaheadContainerComponent, TypeaheadDirective],
  exports: [TypeaheadContainerComponent, TypeaheadDirective],
  entryComponents: [TypeaheadContainerComponent]
})
export class TypeaheadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TypeaheadModule,
      providers: [ComponentLoaderFactory, PositioningService]
    };
  }
}
