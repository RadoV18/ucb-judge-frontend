import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './pages/error/error.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenuComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
