import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
