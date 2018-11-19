import { ModuleWithProviders, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'nk-ngx-bootstrap/component-loader';

import { PositioningService } from 'nk-ngx-bootstrap/positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownConfig } from './bs-dropdown.config';

import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';

@NgModule({
  declarations: [
    BsDropdownMenuDirective,
    BsDropdownToggleDirective,
    BsDropdownContainerComponent,
    BsDropdownDirective
  ],
  exports: [
    BsDropdownMenuDirective,
    BsDropdownToggleDirective,
    BsDropdownDirective
  ],
  entryComponents: [BsDropdownContainerComponent]
})
export class BsDropdownModule {
  // tslint:disable-next-line:no-any
  static forRoot(config?: any): ModuleWithProviders {
    return {
      ngModule: BsDropdownModule,
      providers: [
        ComponentLoaderFactory,
        PositioningService,
        BsDropdownState,
        {
          provide: BsDropdownConfig,
          useValue: config ? config : { autoClose: true }
        }
      ]
    };
  }
}
